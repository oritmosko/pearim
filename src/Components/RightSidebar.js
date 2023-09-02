import React, { useState, useEffect } from 'react';
import './RightSidebar.css';

import axios from 'axios';
import CollapsibleCategorizedList from './CollapsibleCategorizedList';
import { SERVER_PATH } from '../Config/ServerConfig';
import { useChosenReport } from '../Context/ChosenReportContext';
import { useReportList } from '../Context/ReportListContext';

// Connect to backend server's URL
const api = axios.create({
  baseURL: SERVER_PATH
});

const RightSidebar = (firstTime) => {
  // Fetch companies list.
  const { setReportListLoaded } = useReportList();
  const [reportsList, setReportsList] = useState([]);
  useEffect(() => {
    new Promise(resolve => setTimeout(resolve, 45))
      .then(() =>
        api.get('/api/fetchReportsJson')
          .then(response => {
            setReportsList(response.data);
            setReportListLoaded(true);
          })
          .catch(error => console.error('Error loading JSON:', error)));
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
                                  firstTime={firstTime}
                                  onClickCallback={(report, pageNum = 0) => handleItemClick(report, pageNum)}/>
    </div>
  );
};

export default RightSidebar;
