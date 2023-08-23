import React, { createContext, useContext, useState } from 'react';

const ChosenReportContext = createContext();

const ChosenReportProvider = ({ children }) => {
  const [chosenReport, setChosenReport] = useState('');
  const [chosenReportPage, setChosenReportPage] = useState(0);

  return (
    <ChosenReportContext.Provider value={{ chosenReport, setChosenReport,
                                           chosenReportPage, setChosenReportPage }}>
      {children}
    </ChosenReportContext.Provider>
  );
};

const useChosenReport = () => {
  return useContext(ChosenReportContext);
};

export { ChosenReportProvider, useChosenReport };
