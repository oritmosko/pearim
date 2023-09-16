import React, { useState, useEffect } from 'react';
import './Reports.css';

import axios from 'axios';
import CollapsibleCategorizedList from '../Components/CollapsibleCategorizedList';
import PDFViewer from '../Components/PdfViewer';
import { SERVER_PATH } from '../Config/ServerConfig';
import { useChosenReport } from '../Context/ChosenReportContext';
import { useDisplayedReportPdf } from '../Context/DisplayedReportPdfContext';
import { useReportList } from '../Context/ReportListContext';
import logo from '../assets/logo.png';

// Connect to backend server's URL
const api = axios.create({
  baseURL: SERVER_PATH
});

const Reports = () => {
  const { reportListLoaded, reportsList } = useReportList();

  // Fetch single pdf report.
  const { setDisplayedReportUrl, setDisplayedReportPdfFile,
          setDisplayedReportUrlBlob, setDisplayedReportPageNum,
          displayedReportUrl, displayedReportPdfFile,
          displayedReportUrlBlob } = useDisplayedReportPdf();
  const [loadingReport, setLoadingReport] = useState(false);

  const handleFetchReport = async (report, pageNum = 0) => {
    setLoadingReport(true);
    const defaultPageNum = report.hasOwnProperty("page") ? report.page : 0;
    setDisplayedReportPageNum(pageNum > 0 ? pageNum : defaultPageNum);
    setDisplayedReportUrl(report.reportUrl);
    // Handle click on the same report url on a different page.
    if (report.reportUrl === displayedReportUrl) {
      if (displayedReportPdfFile) {
        // Refresh pdf to re-render.
        const tmpPdfFile = displayedReportPdfFile;
        const tmpUrlBlob = displayedReportUrlBlob;
        setDisplayedReportUrlBlob(null);
        setDisplayedReportPdfFile(null);
        await new Promise(resolve => setTimeout(resolve, 6));
        setDisplayedReportUrlBlob(tmpUrlBlob);
        setDisplayedReportPdfFile(tmpPdfFile);
      }
      setLoadingReport(false);
      return;
    }
    // Reprot url changed.
    try {
      setDisplayedReportPdfFile(null);
      setDisplayedReportUrlBlob(null);
      const response = await api.get("/api/fetchPdf", {
        params: { url: report.reportUrl },
        responseType: "arraybuffer",
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.toLowerCase().includes("pdf")) {
        setDisplayedReportPdfFile(null);
        setLoadingReport(false);
        return;
      }

      const pdfBlob = new Blob([response.data], { type: "application/pdf" });
      setDisplayedReportUrlBlob(URL.createObjectURL(pdfBlob));
      let reader = new FileReader();
      reader.readAsDataURL(pdfBlob);
      reader.onloadend = (e) => {
        setDisplayedReportPdfFile(e.target.result);
        setLoadingReport(false);
      }
    } catch (error) {
      setDisplayedReportPdfFile(null);
      setLoadingReport(false);
    }
  };

  const { chosenReport, chosenReportPage } = useChosenReport();
  useEffect(() => {
    if (chosenReport) {
      handleFetchReport(chosenReport, chosenReportPage);
    }
  }, [chosenReport, chosenReportPage]);

  // Small screen configuration, only with collapsible list of reports.
  const onReportChosen = (report, pageNum) => {
    window.open(report.reportUrl, "_blank");
  };

  const runLogoAnimation = async (e) => {
    e.target.classList.remove("start");
    await new Promise(resolve => setTimeout(resolve, 6));
    e.target.classList.add("start");
  }

  return window.innerWidth < 768 ?
  (
    <div className="reports-list-container">
      <CollapsibleCategorizedList reports={reportsList}
                                  onClickCallback={(report, pageNum = 0) => onReportChosen(report, pageNum)}
                                  renderMorePages={false}/>
      {!reportListLoaded && (
        <div className="loader">
          <img src={logo} alt="" />
        </div>
      )}
    </div>
  ) :
  (
    <div className="reports-content">
      <div className="selected-item">
        {loadingReport && (
          <div className="loader">
            <img src={logo} alt=""
                 className="image-container" />
          </div>
        )}
        {displayedReportUrlBlob && (
          <div className="pdf-file-container">
            {displayedReportUrl && (
              <p> לדו"ח המקורי&nbsp;
                <a href={displayedReportUrl}
                   target="_blank" rel="noopener noreferrer"
                   className="link">
                  {chosenReport.fullName}
                </a>
              </p>
            )}
            <PDFViewer />
          </div>
        )}
        {!loadingReport && !displayedReportUrlBlob && displayedReportUrl && (
          <p> לא ניתן לטעון את הדו"ח, ניתן לצפות בו ישירות ב
            <a href={displayedReportUrl}
               target="_blank" rel="noopener noreferrer"
               className="link">
              {chosenReport.fullName}
            </a>
          </p>
        )}
        {!loadingReport && !displayedReportUrlBlob && !displayedReportUrl && reportListLoaded && (
          <img src={logo} alt=""
               className="image-container start"
               onClick={(e) => runLogoAnimation(e)} />
        )}
      </div>
    </div>
  );
};

export default Reports;
