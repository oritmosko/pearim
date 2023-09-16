import React, { createContext, useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { SERVER_PATH } from '../Config/ServerConfig';

const ReportListContext = createContext();

// Connect to backend server's URL
const api = axios.create({
  baseURL: SERVER_PATH
});

const ReportListProvider = ({ children }) => {
  const [reportListLoaded, setReportListLoaded] = useState(false);
  const [reportsList, setReportsList] = useState([]);

  useEffect(() => {
    api.get('/api/fetchReportsJson')
      .then(response => {
        setReportsList(response.data);
        setReportListLoaded(true);
      })
      .catch(error => console.error('Error loading JSON:', error))
  }, []);

  // Mapping of url to http fetch response
  const [cachedReports, setCachedReports] = useState(new Map());
  cachedReports.set("https://www.gov.il/BlobFolder/dynamiccollectorresultitem/salary-supervisor-report-gender-wage-differentials-public-body-2021/he/salary-supervisor-reports_salary-supervisor-report-gender-wage-differentials-public-body-2021-full-versionfull-version.pdf", null);
  cachedReports.set("https://www.gov.il/BlobFolder/reports/salary-supervisor-report-gender-wage-differentials-2021-main-findings/he/salary-supervisor-reports_salary-supervisor-report-gender-wage-differentials-2021-full-version.pdf", null);
  cachedReports.set("https://www.mevaker.gov.il/he/Transparency/DocLib1/EqualSalary-2021.pdf", null);
  cachedReports.set("https://www.mevaker.gov.il/he/Transparency/DocLib1/EqualSalary-2022.pdf", null);
  useEffect(() => {
    cachedReports.forEach((fetchResponse, reportUrl, cachedReports) => {
      api.get("/api/fetchPdf", {
        params: { url: reportUrl },
        responseType: "arraybuffer",
      }).then((response) => {
        cachedReports.set(reportUrl, response);
      });
    });
  }, []);

  return (
    <ReportListContext.Provider value={{ reportListLoaded, reportsList, cachedReports }}>
      {children}
    </ReportListContext.Provider>
  );
};

const useReportList = () => {
  return useContext(ReportListContext);
};

export { ReportListProvider, useReportList };
