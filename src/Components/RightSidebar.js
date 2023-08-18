import React, { useState, useEffect } from 'react';
import './RightSidebar.css';

import axios from 'axios';
import { SERVER_PATH } from '../Config/ServerConfig';
import { useSearch } from '../Context/SearchContext';
import wordcloud from '../assets/wordcloud2.png';

// Connect to backend server's URL
const api = axios.create({
  baseURL: SERVER_PATH
});

const RightSidebar = () => {
  // Fetch companies list.
  const [reportsList, setReportsList] = useState([]);
  useEffect(() => {
    api.get('/api/fetchReportsJson')
      .then(response => {
        // console.log("Fetched JSON:", json.data);
        setReportsList(response.data);
        // setInputSearchString("ג");
      })
      .catch(error => console.error('Error loading JSON:', error));
  }, []);

  const { setSearchTerm } = useSearch();
  const handleItemClick = (item) => {
    setSearchTerm(item); // Set the search term when an item is clicked
  };

//         <li className="sidebar-category">Category 1</li>
  return window.innerWidth < 768 ?
  (<div/>) :
  (
    <div className="right-sidebar">
      <ul className="sidebar-list">
        {reportsList.map((report, index) => (
          <li key={index} onClick={() => handleItemClick(report)}>
            {report.fullName}
          </li>
        ))}
        {reportsList.map((report, index) => (
          <li key={index} onClick={() => handleItemClick(report)}>
            {report.fullName}
          </li>
        ))}
        {reportsList.map((report, index) => (
          <li key={index} onClick={() => handleItemClick(report)}>
            {report.fullName}
          </li>
        ))}
        {reportsList.map((report, index) => (
          <li key={index} onClick={() => handleItemClick(report)}>
            {report.fullName}
          </li>
        ))}
        {reportsList.map((report, index) => (
          <li key={index} onClick={() => handleItemClick(report)}>
            {report.fullName}
          </li>
        ))}
        {reportsList.map((report, index) => (
          <li key={index} onClick={() => handleItemClick(report)}>
            {report.fullName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightSidebar;
