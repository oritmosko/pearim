import React, { useState, useEffect } from 'react';
import './Reports.css';

import axios from 'axios';
import CollapsibleCategorizedList from '../Components/CollapsibleCategorizedList';
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
  // Large screens configuration with Pdf viewer
  const { chosenReport, chosenReportPage } = useChosenReport();
  useEffect(() => {
    if (chosenReport) {
      handleFetchReport(chosenReport, chosenReportPage);
    }
  }, [chosenReport, chosenReportPage]);

  // Fetch single pdf report.
  // const [originUrl, setOriginUrl] = useState(null); // Pdf file URL state
  const [pdfFile, setPdfFile] = useState(null); // Pdf file onChange state
  const [pdfUrl, setPdfUrl] = useState(null); // Pdf file URL state
  const [reportPageNum, setReportPageNum] = useState(0);
  const [loading, setLoading] = useState(false);
  const handleFetchReport = async (report, pageNum = 0) => {
    setLoading(true);
    // Handle click on the same report url on a different page.
    if (report.reportUrl == pdfUrl) {
      if (pdfFile) {
        const defaultPageNum = report.hasOwnProperty('page') ? report.page : 0;
        setReportPageNum(pageNum > 0 ? pageNum : defaultPageNum);
        // Refresh pdf to re-render.
        const tmpPdfFile = pdfFile;
        setPdfFile(null);
        await new Promise(resolve => setTimeout(resolve, 10));
        setPdfFile(tmpPdfFile);
      }
      setLoading(false);
      return;
    }
    // Reprot url changed
    setPdfUrl(report.reportUrl);
    // setOriginUrl(report.originUrl);
    setPdfFile(null);
    try {
      const response = await api.get('/api/fetchPdf', {
        params: { url: report.reportUrl },
        responseType: 'arraybuffer',
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.toLowerCase().includes("pdf")) {
        setPdfFile(null);
        setLoading(false);
        return;
      }

      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      let reader = new FileReader();
      reader.readAsDataURL(pdfBlob);
      reader.onloadend = (e) => {
        setPdfFile(e.target.result);
        setReportPageNum(pageNum > 0 ? pageNum : report.page);
        setLoading(false);
      }
    } catch (error) {
      setPdfFile(null);
      setLoading(false);
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

  // Small screen configuration, only with collapsible list of reports
  // Fetch companies list.
  const [reportsList, setReportsList] = useState([]);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setLoading(true);
      console.log("here");
      api.get('/api/fetchReportsJson')
        .then(response => setReportsList(response.data))
        .catch(error => console.error('Error loading JSON:', error))
        .finally(() => setLoading(false));
    }
  }, []);
  const handleItemClick = (report, pageNum) => {
    window.open(report.reportUrl, "_blank");
  };

  return window.innerWidth < 768 ?
  (
    <div className="reports-list-container">
      <CollapsibleCategorizedList reports={reportsList}
                                  onClickCallback={(report, pageNum = 0) => handleItemClick(report, pageNum)}
                                  renderMorePages={false}/>
      {loading && (
        <div className="loader">
          <img src={wordcloud}/>
        </div>
      )}
    </div>
  ) :
  (
    <div className="reports-content">
      <div className="selected-item">
        {loading && (
          <div className="loader">
            <img src={wordcloud}/>
          </div>
        )}
        {pdfFile && (
          <div className="pdf-file-container">
            {pdfUrl && (
              <p> לדו"ח המקורי
                <a href={pdfUrl} className="link" target="_blank"> {chosenReport.fullName}</a>
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
        {!loading && !pdfFile && pdfUrl && (
          <p> לא ניתן לטעון את הדו"ח, ניתן לצפות בו ישירות ב
            <a href={pdfUrl} className="link" target="_blank">{chosenReport.fullName}</a>
          </p>
        )}
        {!loading && !pdfFile && (
          <img src={wordcloud} className="image-container"/>
        )}

      </div>
    </div>
  );
};

export default Reports;
