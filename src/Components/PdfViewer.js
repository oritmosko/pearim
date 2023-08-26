import React, { useState, useEffect } from 'react';
import './PdfViewer.css';

import { renderToolbar } from './PdfViewerDefaultLayoutPluginInstance'
import { useDisplayedReportPdf } from '../Context/DisplayedReportPdfContext';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { SpecialZoomLevel, Viewer } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PDFViewer = () => {
  const { displayedReportUrl, displayedReportPdfFile, displayedReportUrlBlob, displayedReportPageNum } = useDisplayedReportPdf();

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => [],
    renderToolbar
  });
  const layoutPluginInstances = [defaultLayoutPluginInstance]
  const defaultScale = SpecialZoomLevel.PageWidth;

  return navigator && navigator.mimeTypes && navigator.mimeTypes["application/pdf"] ?
    displayedReportUrlBlob && (
      <iframe
        src={`${displayedReportUrlBlob}#page=${displayedReportPageNum + 1}&navpanes=0&view=FitH`}
        width="100%"
        height="100%">
      </iframe>
    ) :
    displayedReportPdfFile && (
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl={displayedReportPdfFile}
                plugins={layoutPluginInstances}
                enableSmoothScroll={false}
                defaultScale={defaultScale}
                initialPage={displayedReportPageNum}>
        </Viewer>
      </Worker>
    );
}

export default PDFViewer;
