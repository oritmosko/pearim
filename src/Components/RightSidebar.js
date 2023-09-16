import React from 'react';
import './RightSidebar.css';

import CollapsibleCategorizedList from './CollapsibleCategorizedList';
import { useChosenReport } from '../Context/ChosenReportContext';
import { useReportList } from '../Context/ReportListContext';

const RightSidebar = (firstTime = true) => {
  const { reportsList } = useReportList();

  const { setChosenReport, setChosenReportPage } = useChosenReport();
  const onReportChosen = (report, pageNum) => {
    setChosenReport(report);
    setChosenReportPage(pageNum);
    // Go to reports tab.
    document.getElementsByClassName("reports")[0].click();
  };

  return window.innerWidth < 768 ?
  (<div/>) :
  (
    <div className="right-sidebar">
      <CollapsibleCategorizedList reports={reportsList}
                                  firstTime={firstTime}
                                  onClickCallback={(report, pageNum = 0) => onReportChosen(report, pageNum)}/>
    </div>
  );
};

export default RightSidebar;
