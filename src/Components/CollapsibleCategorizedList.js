import React, { useState } from 'react';
import './CollapsibleCategorizedList.css';

import { Search } from '@mui/icons-material'; // Import the search icon from Material-UI

const CollapsibleList = ({ reports, searchTerm, onClickCallback }) => {
  const [expandedCategories, setExpandedCategories] = useState([]);

  const toggleCategory = (category) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter(cat => cat !== category));
    } else {
      setExpandedCategories([category]); // ...expandedCategories,
    }
  };

  const filteredReports = reports.map(reportsCategory => {
    // const filteredItems = reportsCategory.reports.filter(report =>
    //   report.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //   report.engName.includes(searchTerm)
    // );
    const searchWord = searchTerm.toLowerCase();
    const filteredReports = [];

    reportsCategory.reports.forEach(report => {
      let nameMatch = report.fullName.includes(searchWord) || report.engName.includes(searchWord);
      let pageNamesMatches = 0;
      if (report.hasOwnProperty('morePages')) {
        report.morePages.forEach(page => {
          page.display = false;
          if (page.name.includes(searchWord)) {
            pageNamesMatches += 1;
            page.display = true;
          }
        });
      }

      if (nameMatch || pageNamesMatches > 0) {
        filteredReports.push(report);
      }
    });

    if (filteredReports.length === 0) {
      return null; // Skip rendering this category if no matching items
    }

    // TODO(oritmosko): Handle match
    // if (filteredItems.length === 1) {
    //   setExpandedCategories([...expandedCategories, categoryData.category]);
    // }

    return {
      ...reportsCategory,
      items: filteredReports,
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
              <div key={`${report.fullName}_pages`}>
                <li key={report.fullName}
                    onClick={() => onClickCallback(report)}>
                  {report.fullName}
                </li>
                {report.morePages && report.morePages.map((page) => (
                  <li key={page.name}
                      className={`more-pages ${page.display}`}
                      onClick={() => onClickCallback(report, page.page)}>
                    {page.name}
                  </li>
                ))}
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const CollapsibleCategorizedList = ({ reports, onClickCallback }) => {
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

export default CollapsibleCategorizedList;
