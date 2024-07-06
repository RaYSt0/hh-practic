import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [salary, setSalary] = useState('');
  const [region, setRegion] = useState('');
  const [experience, setExperience] = useState('');
  const [employmentType, setEmploymentType] = useState('');

  // Fetch data from API or local source
  useEffect(() => {
    // Fetch data here and set it to data state
  }, []);

  // Filter data based on search term and filters
  useEffect(() => {
    const result = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      item.salary.includes(salary) &&
      item.region.includes(region) &&
      item.experience.includes(experience) &&
      item.employmentType.includes(employmentType)
    );
    setFilteredData(result);
  }, [data, searchTerm, salary, region, experience, employmentType]);

  return (
    <div className="App">
      <aside className="filters">
        <input
          type="text"
          placeholder="Search..."
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select onChange={e => setSalary(e.target.value)}>
          <option value="">All Salaries</option>
          {/* Add options based on your data */}
        </select>
        <select onChange={e => setRegion(e.target.value)}>
          <option value="">All Regions</option>
          {/* Add options based on your data */}
        </select>
        <select onChange={e => setExperience(e.target.value)}>
          <option value="">All Experiences</option>
          {/* Add options based on your data */}
        </select>
        <select onChange={e => setEmploymentType(e.target.value)}>
          <option value="">All Employment Types</option>
          {/* Add options based on your data */}
        </select>
      </aside>
      <main>
        {filteredData.map(item => (
          <div key={item.id}>
            {/* Display your data here */}
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;