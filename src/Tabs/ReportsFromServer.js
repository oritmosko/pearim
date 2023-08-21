import React, { useState, useEffect } from 'react';
import './Reports.css';

import axios from 'axios';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'; // Search Bar
import { SERVER_PATH } from '../Config/ServerConfig';
import { useSearch } from '../Context/SearchContext';
import wordcloud from '../assets/wordcloud2.png';
// Import Pdf related
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Viewer } from '@react-pdf-viewer/core';
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
        // console.log("Fetched JSON:", json.data);
        setReportsList(response.data);
        // setInputSearchString("ג");
      })
      .catch(error => console.error('Error loading JSON:', error));
  }, []);

  // Callbacks for search items.
  const handleOnSelect = (report) => {
    document.querySelector('input').blur();
    handleFetchReport(report);
    // debugger;
  };
  const formatResult = (report) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'right' }}>
          {report.fullName}
        </span>
      </>
    )
  }
  const { searchTerm } = useSearch();
  useEffect(() => {
    // console.log("searchTerm updated:", searchTerm);
    if (searchTerm) {
      setInputSearchString(searchTerm.fullName + " ");
      handleOnSelect(searchTerm);
    }
  });

  // Fetch single pdf report.
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => []
  });
  const defaultScale = window.innerWidth < 768 ? 1.3 : 0;

  const [pdfFile, setPdfFile] = useState(null); // Pdf file onChange state
  const [pdfUrl, setPdfUrl] = useState(null); // Pdf file URL state
  const [reportPageNum, setReportPageNum] = useState(0);

  const handleFetchReport = async (report) => {
    if (report.reportUrl == pdfUrl) {
      if (report.hasOwnProperty('pageNumber')) {
        setReportPageNum(report.pageNumber);
      }
      return;
    }
    try {
      setPdfUrl(report.reportUrl);
      const response = await api.get('/api/fetchPdf', {
        params: { url: report.reportUrl },
        responseType: 'arraybuffer',
      });

      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      let reader = new FileReader();
      reader.readAsDataURL(pdfBlob);
      reader.onloadend = (e) => {
        setPdfFile(e.target.result);
        if (report.hasOwnProperty('pageNumber')) {
          setReportPageNum(report.pageNumber);
        }
      }
    } catch (error) {
      setPdfFile(null);
      // console.error('Error fetching PDF:', error);
    }
  };

  return (
    <div className="reports-content">
      <div className="search-bar">
        <ReactSearchAutocomplete
          items={reportsList}
          className="react-search-autocomplete-dropdown-container"
          // onSearch={handleOnSearch}
          // onHover={handleOnHover}
          // onFocus={handleOnFocus}
          onSelect={handleOnSelect}
          inputSearchString={inputSearchString}
          fuseOptions={{
            keys: ["name", "engName", "year"],
            threshold: 0.0,
            isCaseSensitive: false,
            ignoreLocation: true
          }}
          resultStringKeyName="fullName"
          autoFocus
          formatResult={formatResult}
          maxResults={200}
        />
      </div>
      <div className="selected-item">
        {pdfFile && (
          <div className="pdf-file-container">
            {pdfUrl && (
              <p> לדו"ח המקורי ב
                <a href={pdfUrl} className="link" target="_blank">אתר החברה</a>
              </p>
            )}
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer fileUrl={pdfFile}
                      plugins={[defaultLayoutPluginInstance]}
                      enableSmoothScroll={false}
                      defaultScale={defaultScale}
                      initialPage={reportPageNum}>
              </Viewer>
            </Worker>
          </div>
        )}
        {pdfUrl && (
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
