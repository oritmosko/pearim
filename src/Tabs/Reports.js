import React, { useState, useEffect } from 'react';

import './Reports.css';
import PDFViewer from '../Components/PDFViewer';

import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const Reports = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/data') // Update with your server URL
      .then(response => response.json())
      .then(jsonData => {
        console.log("Fetched JSON");
        setItems(jsonData);
      })
      .catch(error => console.error('Error loading JSON:', error));
  }, []);

  // const handleOnSearch = (string, results) => {
  //   // onSearch will have as the first callback parameter
  //   // the string searched and for the second the results.
  // }
  // const handleOnHover = (result) => {}
  // const handleOnFocus = () => {}
  // const handleOnSelect = (item) => {
  // }



  const [selectedItem, setSelectedItem] = useState(null);

  const handleOnSelect = (item) => {
    setSelectedItem(item);
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'right' }}>
          {item.name}
        </span>
      </>
    )
  }

  return (
    <div className="reports-content">
      <div className="search-bar">
        <ReactSearchAutocomplete
          items={items}
          // onSearch={handleOnSearch}
          // onHover={handleOnHover}
          onSelect={handleOnSelect}
          // onFocus={handleOnFocus}
          autoFocus
          formatResult={formatResult}
        />
      </div>
      <div className="selected-item">
        {selectedItem && (
            <PDFViewer pdfUrl={selectedItem.reportUrl} />
        )}
      </div>
    </div>
  );
};

export default Reports;
