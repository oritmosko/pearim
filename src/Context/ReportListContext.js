import React, { createContext, useContext, useState } from 'react';

const ReportListContext = createContext();

const ReportListProvider = ({ children }) => {
  const [reportListLoaded, setReportListLoaded] = useState(false);

  return (
    <ReportListContext.Provider value={{ reportListLoaded, setReportListLoaded }}>
      {children}
    </ReportListContext.Provider>
  );
};

const useReportList = () => {
  return useContext(ReportListContext);
};

export { ReportListProvider, useReportList };
