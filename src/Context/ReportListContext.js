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

  return (
    <ReportListContext.Provider value={{ reportListLoaded, reportsList }}>
      {children}
    </ReportListContext.Provider>
  );
};

const useReportList = () => {
  return useContext(ReportListContext);
};

export { ReportListProvider, useReportList };
