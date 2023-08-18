import React, { useState, useEffect } from 'react';
import './App.css';

import RightSidebar from './Components/RightSidebar';
import { SearchProvider } from './Context/SearchContext';
import Reports from './Tabs/ReportsFromServer';
import Missing from './Tabs/MissingWithGoogleForms';
import QNA from './Tabs/QNA';
import About from './Tabs/About';
import wordcloud from './assets/wordcloud2.png';

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
    if (selectedTab == 'Reports') {
      setRightSidebarStyle({});
    } else {
      setRightSidebarStyle({
        display: 'none'
      });
    }
  }, [selectedTab]);

  return (
    <SearchProvider>
      <div>
        <div>
          <div className="header-container">
            <img src={wordcloud} className="header-image-container" alt="Image"/>
            <header className="header">
              <h1 className="title">דו"ח שכר (לא) שווה לעובדת ולעובד</h1>
              <div className="title-line"></div>
              <nav className="tabs">
                <a href="#" className="tab" onClick={() => setSelectedTab('Reports')}>דוח"ות</a>
                <span className="divider">|</span>
                <a href="#" className="tab" onClick={() => setSelectedTab('Missing')}>חסרה חברה?</a>
                <span className="divider">|</span>
                <a href="#" className="tab" onClick={() => setSelectedTab('QNA')}>שאלות</a>
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
    </SearchProvider>
  );
};

export default App;
