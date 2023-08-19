import React, { useState } from 'react';
import './CollapsibleSidebar.css'; // Create this CSS file for styling

const CollapsibleSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="collapsible-sidebar">
      <div className="toggle-button" onClick={toggleSidebar}>
        ☲ {/* Trigram for Heaven HTML Symbol */}
      </div>
      <div className={`content ${sidebarOpen ? 'open' : ''}`}>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          {/* Add more items */}
        </ul>
      </div>
    </div>
  );
};

export default CollapsibleSidebar;
