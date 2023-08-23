import React, { useState, useEffect } from 'react';
import './Reports.css';

import axios from 'axios';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'; // Search Bar
import { SERVER_PATH } from '../Config/ServerConfig';
import { useChosenReport } from '../Context/ChosenReportContext';
import wordcloud from '../assets/wordcloud2.png';
// Import Pdf related
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { SpecialZoomLevel, Viewer } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// Connect to backend server's URL
const api = axios.create({
  baseURL: SERVER_PATH
});

const Reports = () => {
  // Fetch companies list.
  const [reportsList, setReportsList] = useState([]);
  const [inputSearchString, setInputSearchString] = useState("");
  useEffect(() => {
    api.get('/api/fetchReportsJson')
      .then(response => {
        setReportsList(response.data);
      })
      .catch(error => console.error('Error loading JSON:', error));
  }, []);

  const { chosenReport, chosenReportPage } = useChosenReport();
  useEffect(() => {
    if (chosenReport) {
      handleFetchReport(chosenReport, chosenReportPage);
    }
  }, [chosenReport, chosenReportPage]);

  // Fetch single pdf report.
  const [pdfFile, setPdfFile] = useState(null); // Pdf file onChange state
  const [pdfUrl, setPdfUrl] = useState(null); // Pdf file URL state
  const [reportPageNum, setReportPageNum] = useState(0);
  const [loadingPdf, setLoadingPdf] = useState(false);
  const handleFetchReport = async (report, pageNum = 0) => {
    setLoadingPdf(true);
    if (report.reportUrl == pdfUrl) {
      if (pdfFile) {
        const tmpPdfFile = pdfFile;
        setPdfFile(null);
        setReportPageNum(pageNum > 0 ? pageNum : report.page);
        await new Promise(resolve => setTimeout(resolve, 10));
        setPdfFile(tmpPdfFile);
      }
      setLoadingPdf(false);
      return;
    }
    try {
      setPdfUrl(report.reportUrl);
      setPdfFile(null);
      const response = await api.get('/api/fetchPdf', {
        params: { url: report.reportUrl },
        responseType: 'arraybuffer',
      });

      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      let reader = new FileReader();
      reader.readAsDataURL(pdfBlob);
      reader.onloadend = (e) => {
        setPdfFile(e.target.result);
        setReportPageNum(pageNum > 0 ? pageNum : report.page);
        setLoadingPdf(false);
      }
    } catch (error) {
      setPdfFile(null);
      setLoadingPdf(false);
    }
  };

  const renderToolbar = (Toolbar: (props: ToolbarProps) => ReactElement) => (
      <Toolbar>
         {(slots: ToolbarSlot) => {
           const {
             CurrentPageInput,
             Download,
             GoToNextPage,
             GoToPreviousPage,
             NumberOfPages,
             Zoom,
             ZoomIn,
             ZoomOut,
           } = slots;

           return (
             <div style={{ alignItems: 'center',
                           display: 'flex',
                           width: '100%',
                         }}>
               <div style={{ padding: '0px 2px' }}>
                   <GoToPreviousPage />
               </div>
               <div style={{ padding: '0px 2px', width: '4rem' }}>
                   <CurrentPageInput />
               </div>
               <div style={{ padding: '0px 2px' }}>
                   / <NumberOfPages />
               </div>
               <div style={{ padding: '0px 2px' }}>
                   <GoToNextPage />
               </div>
               <div style={{ padding: '0px 2px', marginRight: 'auto' }}>
                   <ZoomOut />
               </div>
               <div style={{ padding: '0px 2px' }}>
                   <Zoom />
               </div>
               <div style={{ padding: '0px 2px', marginLeft: 'auto' }}>
                   <ZoomIn />
               </div>
               <div style={{ padding: '0px 22px 0 2px' }}>
                   <Download />
               </div>
             </div>
           );
         }}
       </Toolbar>
     );
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => [],
    renderToolbar
  });
  const layoutPluginInstances = [defaultLayoutPluginInstance]
  const defaultScale = SpecialZoomLevel.PageWidth;

  // TODO(oritmosko): If smaller than 768, render the CollapsibleList
  return (
    <div className="reports-content">
      <div className="selected-item">
        {pdfFile && (
          <div className={`pdf-file-container ${reportPageNum}`}>
            {pdfUrl && (
              <p> לדו"ח המקורי ב
                <a href={pdfUrl} className="link" target="_blank">אתר החברה</a>
              </p>
            )}
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer fileUrl={pdfFile}
                      plugins={layoutPluginInstances}
                      enableSmoothScroll={false}
                      defaultScale={defaultScale}
                      initialPage={reportPageNum}>
              </Viewer>
            </Worker>
          </div>
        )}
        {!loadingPdf && !pdfFile && pdfUrl && (
          <p> לא ניתן לטעון את הדו"ח, ניתן לצפות בו ישירות דרך
            <a href={pdfUrl} className="link" target="_blank"> אתר החברה</a>
          </p>
        )}
        {!pdfFile && (
          <img src={wordcloud} className="image-container" alt="Image"/>
        )}

      </div>
    </div>
  );
};

export default Reports;
