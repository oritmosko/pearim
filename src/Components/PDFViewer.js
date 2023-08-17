import './PDFViewer.css';

import React from 'react';

// Second attempt to display PDF
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';


const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';


function PDFViewer({ pdfUrl }) {
  // pdfjs.GlobalWorkerOptions.workerSrc =
  // `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; // min.js?

  return (
    <div className="pdf-viewer">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl={`${corsProxyUrl}${pdfUrl}`} />
      </Worker>
    </div>
  )
}

export default PDFViewer;
