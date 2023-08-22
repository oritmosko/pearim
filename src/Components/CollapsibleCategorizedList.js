import React, { useState } from 'react';
import './CollapsibleCategorizedList.css';

import { Search } from '@mui/icons-material'; // Import the search icon from Material-UI

const CollapsibleList = ({ reports, searchTerm, onClickCallback }) => {
  const [expandedCategories, setExpandedCategories] = useState([]);

  const toggleCategory = (category) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter(cat => cat !== category));
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  const filteredReports = reports.map(reportsCategory => {
    const filteredItems = reportsCategory.reports.filter(report =>
      report.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredItems.length === 0) {
      return null; // Skip rendering this category if no matching items
    }

    // TODO(oritmosko): Handle match
    // if (filteredItems.length === 1) {
    //   setExpandedCategories([...expandedCategories, categoryData.category]);
    // }

    return {
      ...reportsCategory,
      items: filteredItems,
    };
  }).filter(reportsCategory => reportsCategory !== null);

  return (
    <div>
      {filteredReports.map((reportsCategory) => (
        <div key={reportsCategory.category}
             className={`category ${expandedCategories.includes(reportsCategory.category) || searchTerm != ""  ? 'expanded' : ''}`}>
          <h4 onClick={() => toggleCategory(reportsCategory.category)}>
            <i className={`arrow ${expandedCategories.includes(reportsCategory.category) || searchTerm != ""  ? 'down' : 'left'}`}></i>
            {reportsCategory.category}
          </h4>
          <ul className={`category-items ${expandedCategories.includes(reportsCategory.category) || searchTerm != ""  ? 'expanded' : ''}`}>
            {reportsCategory.reports.map((report, index) => (
              <li key={index} onClick={() => onClickCallback(report)}>
                {report.fullName}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const CollapsibleListWithSearch = ({ reports, onClickCallback }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div >
      <div className="search-container">
        <Search className="search-icon" fontSize="small" />
        <input
          type="text"
          placeholder="חפש.י חברה"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-input"
        />
      </div>
      <CollapsibleList reports={reports} searchTerm={searchTerm} onClickCallback={onClickCallback} />
    </div>
  );

};

export default CollapsibleListWithSearch;
