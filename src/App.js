import React from 'react';
import './App.css';

import { ChosenReportProvider } from './Context/ChosenReportContext';
import { DisplayedReportPdfProvider } from './Context/DisplayedReportPdfContext';
import { ReportListProvider } from './Context/ReportListContext';
import AppTabs from './AppTabs';

const App = () => {
  return (
    <ChosenReportProvider>
    <DisplayedReportPdfProvider>
    <ReportListProvider>
      <AppTabs />
    </ReportListProvider>
    </DisplayedReportPdfProvider>
    </ChosenReportProvider>
  );
};

export default App;
