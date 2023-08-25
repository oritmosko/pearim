import React, { useState, useEffect } from 'react';
import './RightSidebar.css';

import axios from 'axios';
import CollapsibleCategorizedList from './CollapsibleCategorizedList';
import { SERVER_PATH } from '../Config/ServerConfig';
import { useChosenReport } from '../Context/ChosenReportContext';

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
        setReportsList(response.data);
      })
      .catch(error => console.error('Error loading JSON:', error));
  }, []);

  const { setChosenReport, setChosenReportPage } = useChosenReport();
  const handleItemClick = (report, pageNum) => {
    setChosenReport(report);
    setChosenReportPage(pageNum);
  };

  return window.innerWidth < 768 ?
  (<div/>) :
  (
    <div className="right-sidebar">
      <CollapsibleCategorizedList reports={reportsList}
                                  onClickCallback={(report, pageNum = 0) => handleItemClick(report, pageNum)}/>
    </div>
  );
};

export default RightSidebar;
