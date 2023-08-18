import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useSearch } from '../Context/SearchContext';

import './Reports.css';

// Import Search Bar
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

// Import Pdf related
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import wordcloud from '../assets/wordcloud2.png';

// Connect to backend server's URL
const api = axios.create({
  baseURL: 'http://localhost:5000',
  // baseURL: 'https://hello-world-app-server-4zpqlhbhaa-ew.a.run.app'
});

const Reports = () => {
  // Fetch single pdf report.
  const defaultLayoutPluginInstance = window.innerWidth < 768 ? "" : defaultLayoutPlugin(); // Creating new plugin instance
  const [pdfFile, setPdfFile] = useState(null); // Pdf file onChange state
  const [pdfUrl, setPdfUrl] = useState(null); // Pdf file URL state

  const handleFetchPdf = async (reportUrl) => {
    try {
      const response = await api.get('/api/fetchPdf', {
        params: { url: reportUrl },
        responseType: 'arraybuffer',
      });

      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      let reader = new FileReader();
      reader.readAsDataURL(pdfBlob);
      reader.onloadend = (e) => {
        setPdfFile(e.target.result);
        setPdfUrl(null);
      }
    } catch (error) {
      setPdfFile(null);
      setPdfUrl(reportUrl);
      // console.error('Error fetching PDF:', error);
    }
  };

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
  const [selectedReport, setSelectedReport] = useState(null);
  const handleOnSelect = (report) => {
    setSelectedReport(report);
    handleFetchPdf(report.reportUrl);
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

  return (
    <div className="reports-content">
      <div className="search-bar">
        <ReactSearchAutocomplete
          items={reportsList}
          // onSearch={handleOnSearch}
          // onHover={handleOnHover}
          // onFocus={handleOnFocus}
          onSelect={handleOnSelect}
          inputSearchString={inputSearchString}
          // fuseConfigs={fuseConfig}
          fuseOptions={{ keys: ["name", "engName", "year"] }}
          resultStringKeyName="fullName"
          autoFocus
          formatResult={formatResult}
        />
      </div>
      <div className="selected-item">
        {pdfFile && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]}>
            </Viewer>
          </Worker>
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
