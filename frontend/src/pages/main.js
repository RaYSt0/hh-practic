import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  // Fetch data from API or local source
  useEffect(() => {
    // Fetch data here and set it to data state
  }, []);

  // Filter data based on search term and filter
  useEffect(() => {
    const result = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      item.category.includes(filter)
    );
    setFilteredData(result);
  }, [data, searchTerm, filter]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={e => setSearchTerm(e.target.value)}
      />
      <select onChange={e => setFilter(e.target.value)}>
        <option value="">All Categories</option>
        {/* Add options based on your data categories */}
      </select>
      {filteredData.map(item => (
        <div key={item.id}>
          {/* Display your data here */}
        </div>
      ))}
    </div>
  );
};

export default App;
