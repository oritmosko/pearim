import React, { useState, useEffect } from 'react';
import './App.css';

import RightSidebar from './Components/RightSidebar';
import { ChosenReportProvider } from './Context/ChosenReportContext';
import { DisplayedReportPdfProvider } from './Context/DisplayedReportPdfContext';
import Reports from './Tabs/ReportsFromServer';
import Missing from './Tabs/MissingWithGoogleForms';
import QNA from './Tabs/QNA';
import About from './Tabs/About';
import logo from './assets/logo.png';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('Reports'); // Default selected tab is Reports

  let tabContent;
  switch (selectedTab) {
    case 'Reports':
      tabContent = <Reports />;
      break;
    case 'Missing':
      tabContent = <Missing />;
      break;
    case 'QNA':
      tabContent = <QNA />;
      break;
    case 'About':
      tabContent = <About />;
      break;
    default:
      tabContent = <Reports />;
  }

  const [rightSidebarStyle, setRightSidebarStyle] = useState({}); // Default selected tab is Reports
  useEffect(() => {
    if (selectedTab === 'Reports') {
      setRightSidebarStyle({});
    } else {
      setRightSidebarStyle({
        display: 'none'
      });
    }
  }, [selectedTab]);

  return (
    <ChosenReportProvider>
    <DisplayedReportPdfProvider>
      <div>
        <div>
          <div className="header-container">
            <a href="#reports">
              <img src={logo}
                   className="header-image-container"
                   onClick={() => setSelectedTab('Reports')}
                   alt="" />
            </a>
            <header className="header">
              <h1 className="title">דו"ח שכר (לא) שווה לעובדת ולעובד</h1>
              <div className="title-line"></div>
              <nav className="tabs">
                <a href="#reports" className="tab" onClick={() => setSelectedTab('Reports')}>דוח"ות</a>
                <span className="divider">|</span>
                <a href="#missing-report" className="tab" onClick={() => setSelectedTab('Missing')}>חסרה חברה?</a>
                <span className="divider">|</span>
                <a href="#qna" className="tab" onClick={() => setSelectedTab('QNA')}>שאלות</a>
              </nav>
            </header>
          </div>
          <div className="main-content">
            <div style={rightSidebarStyle}>
              <RightSidebar />
            </div>
            {tabContent}
          </div>
        </div>
      </div>
    </DisplayedReportPdfProvider>
    </ChosenReportProvider>
  );
};

export default App;
