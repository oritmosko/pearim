import React, { useState } from 'react';
import './App.css';

import About from './Tabs/About';
import Contact from './Tabs/Contact';
import RightSidebar from './Components/RightSidebar';
import Reports from './Tabs/ReportsFromServer';
import logo from './assets/logo.png';

const AppTabs = () => {
  const [selectedTab, setSelectedTab] = useState("About"); // Default selected tab is About

  let tabContent;
  switch (selectedTab) {
    case "About":
      tabContent = <About />;
      break;
    case "Reports":
      tabContent = <Reports />;
      break;
    case "Contact":
      tabContent = <Contact />;
      break;
    default:
      tabContent = <About />;
  }

  const switchTabs = (tabName) => {
    document.getElementsByClassName(selectedTab.toLocaleLowerCase())[0].classList.toggle("active");
    setSelectedTab(tabName);
    document.getElementsByClassName(tabName.toLocaleLowerCase())[0].classList.toggle("active");
  }

  return (
    <div>
      <div className="header-container">
        <a href="#about">
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
        </header>
      </div>
      <nav className="tabs">
        <a href="#about"
           className="tab about active"
           onClick={() => switchTabs("About")}>
          רקע
        </a>
        <span className="divider">|</span>
        <a href="#reports"
           className="tab reports"
           onClick={() => switchTabs("Reports")}>
          צפייה בדוח"ות
        </a>
        <span className="divider">|</span>
        <a href="#contact"
           className="tab contact"
           onClick={() => switchTabs("Contact")}>
          צרו קשר
        </a>
      </nav>
      <div className="main-content">
        <RightSidebar />
        {tabContent}
      </div>
    </div>
  );
};

export default AppTabs;
