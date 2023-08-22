import React, { useState, useEffect } from 'react';
import './RightSidebar.css';

import axios from 'axios';
import CollapsibleCategorizedList from './CollapsibleCategorizedList';
import { SERVER_PATH } from '../Config/ServerConfig';
import { useChosenReport } from '../Context/ChosenReportContext';
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

  const { setChosenReport } = useChosenReport();
  const handleItemClick = (report) => {
    setChosenReport(report); // Set the search term when an item is clicked
  };

  return window.innerWidth < 768 ?
  (<div/>) :
  (
    <div className="right-sidebar">
      <CollapsibleCategorizedList reports={reportsList}
                                  onClickCallback={(report, index) => handleItemClick(report)}/>
    </div>
  );
};

export default RightSidebar;
