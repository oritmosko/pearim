import React, { useState } from 'react';
import './AppTabs.css';

import About from './Tabs/About';
import Contact from './Tabs/Contact';
import RightSidebar from './Components/RightSidebar';
import Reports from './Tabs/ReportsFromServer';
import logo from './assets/logo.png';

const AppTabs = () => {
  const getActiveTabName = () => {
    const tabName = window.location.hash !== "" ? window.location.hash.split("#")[1].toLocaleLowerCase() : "";
    return tabName !== "" ? tabName : "about";
  }
  const [selectedTab, setSelectedTab] = useState(getActiveTabName()); // Default selected tab is About

  let tabContent;
  switch (selectedTab) {
    case "about":
      tabContent = <About />;
      break;
    case "reports":
      tabContent = <Reports />;
      break;
    case "contact":
      tabContent = <Contact />;
      break;
    default:
      tabContent = <About />;
  }

  const isActiveTab = (tabName) => {
    return tabName.toLocaleLowerCase() === getActiveTabName();
  }
  const switchTabs = () => {
    setSelectedTab(getActiveTabName());
  }
  window.addEventListener('hashchange', switchTabs);

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
           className={`tab about ${isActiveTab("about")  ? "active" : ""}`}>
          רקע
        </a>
        <span className="divider">|</span>
        <a href="#reports"
           className={`tab reports ${isActiveTab("reports")  ? "active" : ""}`}>
          צפייה בדוח"ות
        </a>
        <span className="divider">|</span>
        <a href="#contact"
           className={`tab contact ${isActiveTab("contact")  ? "active" : ""}`}>
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
