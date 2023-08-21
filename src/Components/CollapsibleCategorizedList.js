import React, { useState } from 'react';
import './CollapsibleCategorizedList.css';

import { Search } from '@mui/icons-material'; // Import the search icon from Material-UI

const CollapsibleList = ({ data, searchTerm }) => {
  const [expandedCategories, setExpandedCategories] = useState([]);

  const toggleCategory = (category) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter(cat => cat !== category));
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  const filteredData = data.map(categoryData => {
    const filteredItems = categoryData.items.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredItems.length === 0) {
      return null; // Skip rendering this category if no matching items
    }

    // TODO(oritmosko): Handle match
    // if (filteredItems.length === 1) {
    //   setExpandedCategories([...expandedCategories, categoryData.category]);
    // }

    return {
      ...categoryData,
      items: filteredItems,
    };
  }).filter(categoryData => categoryData !== null);

  return (
    <div>
      {filteredData.map((categoryData) => (
        <div key={categoryData.category} className="category">
          <h4 onClick={() => toggleCategory(categoryData.category)}>
            {categoryData.category}
          </h4>
          <ul className={`category-items ${expandedCategories.includes(categoryData.category) ? 'expanded' : ''}`}>
            {categoryData.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const sampleData = [
    {
      category: '> ציבורי',
      items: ['Item A', 'Item B', 'Item C'],
    },
    {
      category: '> הייטק',
      items: ['Item X', 'Item Y', 'Item Z'],
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="app-container">
      <div className="search-container">
        <Search className="search-icon" fontSize="small" />
        <input
          type="text"
          placeholder="חפש.י חברה"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-input" // Apply your CSS class here
        />
      </div>
      <CollapsibleList data={sampleData} searchTerm={searchTerm} />
    </div>
  );

};

export default App;
