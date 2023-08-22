import React, { createContext, useContext, useState } from 'react';

const ChosenReportContext = createContext();

const ChosenReportProvider = ({ children }) => {
  const [chosenReport, setChosenReport] = useState('');

  return (
    <ChosenReportContext.Provider value={{ chosenReport, setChosenReport }}>
      {children}
    </ChosenReportContext.Provider>
  );
};

const useChosenReport = () => {
  return useContext(ChosenReportContext);
};

export { ChosenReportProvider, useChosenReport };
