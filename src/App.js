import React, { useState, useEffect } from 'react';
import './App.css';

import { ChosenReportProvider } from './Context/ChosenReportContext';
import { DisplayedReportPdfProvider } from './Context/DisplayedReportPdfContext';
import { ReportListProvider } from './Context/ReportListContext';
import About from './Tabs/About';
import Missing from './Tabs/MissingWithGoogleForms';
import QNA from './Tabs/QNA';
import RightSidebar from './Components/RightSidebar';
import Reports from './Tabs/ReportsFromServer';
import logo from './assets/logo.png';

const App = () => {
  const [selectedTab, setSelectedTab] = useState("About"); // Default selected tab is About
  const [firstTime, setFirstTime] = useState(false);
  const [firstTimeHappened, setFirstTimeHappened] = useState(false);

  let tabContent;
  switch (selectedTab) {
    case "About":
      tabContent = <About />;
      break;
    case "Reports":
      tabContent = <Reports />;
      break;
    case "Missing":
      tabContent = <Missing />;
      break;
    case "QNA":
      tabContent = <QNA />;
      break;
    default:
      tabContent = <About />;
  }

  const [rightSidebarStyle, setRightSidebarStyle] = useState({}); // Default selected tab is Reports
  useEffect(() => {
    if (selectedTab === "Reports") {
      if (!firstTimeHappened) {
        setFirstTime(true);
        setFirstTimeHappened(true);
      } else {
        setFirstTime(false);
      }
      setRightSidebarStyle({});
    } else {
      setRightSidebarStyle({
        display: "none"
      });
    }
  }, [selectedTab]);

  const switchTabs = (tabName) => {
    document.getElementsByClassName(selectedTab.toLocaleLowerCase())[0].classList.toggle("active");
    setSelectedTab(tabName);
    document.getElementsByClassName(tabName.toLocaleLowerCase())[0].classList.toggle("active");
  }

  return (
    <ChosenReportProvider>
    <DisplayedReportPdfProvider>
    <ReportListProvider>
      <div>
        <div>
          <div className="header-container">
            <a href="#reports">
              <img src={logo}
                   className="header-image-container"
                   onClick={() => {document.getElementsByClassName("about")[0].click()}}
                   alt="" />
            </a>
            <header className="header">
              <h1 className="title">
                דוח שכר (לא) שווה לעובדת ולעובד
              </h1>
              <div className="title-line"></div>
              <nav className="tabs">
                <a href="#about"
                   className="tab about active"
                   onClick={() => switchTabs("About")}>
                  מה הבעיה בעצם?
                </a>
                <span className="divider">|</span>
                <a href="#reports"
                   className="tab reports"
                   onClick={() => switchTabs("Reports")}>
                  דוח"ות
                </a>
                <span className="divider">|</span>
                <a href="#missing-report"
                   className="tab missing"
                   onClick={() => switchTabs("Missing")}>
                  חסרה חברה?
                </a>
                <span className="divider">|</span>
                <a href="#qna"
                   className="tab qna"
                   onClick={() => switchTabs("QNA")}>
                  על הדוח
                </a>
              </nav>
            </header>
          </div>
          <div className="main-content">
            <div style={rightSidebarStyle}>
              <RightSidebar firstTime={firstTime} />
            </div>
            {tabContent}
          </div>
        </div>
      </div>
    </ReportListProvider>
    </DisplayedReportPdfProvider>
    </ChosenReportProvider>
  );
};

export default App;
