import React, { createContext, useContext, useState } from 'react';

const DisplayedReportPdfContext = createContext();

const DisplayedReportPdfProvider = ({ children }) => {
  const [displayedReportUrl, setDisplayedReportUrl] = useState(null); // Pdf file URL state
  const [displayedReportPdfFile, setDisplayedReportPdfFile] = useState(null); // Pdf file onChange state
  const [displayedReportUrlBlob, setDisplayedReportUrlBlob] = useState(null); // Pdf file onChange state
  const [displayedReportPageNum, setDisplayedReportPageNum] = useState(0);

  return (
    <DisplayedReportPdfContext.Provider value={{ displayedReportUrl, setDisplayedReportUrl,
                                                 displayedReportPdfFile, setDisplayedReportPdfFile,
                                                 displayedReportUrlBlob, setDisplayedReportUrlBlob,
                                                 displayedReportPageNum, setDisplayedReportPageNum }}>
      {children}
    </DisplayedReportPdfContext.Provider>
  );
};

const useDisplayedReportPdf = () => {
  return useContext(DisplayedReportPdfContext);
};

export { DisplayedReportPdfProvider, useDisplayedReportPdf };
