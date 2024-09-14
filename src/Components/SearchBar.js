import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [countries, setCountries] = useState([]);

  // Fetching JSON data (You can replace the URL with the actual JSON link)
  useEffect(() => {
    fetch('/countries.json')
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching the data", error));
  }, []);

  // Handling search
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  
    if (value.length > 0) {
      const filteredSuggestions = countries.filter(
        (country) =>
          (country.name && country.name.toLowerCase().includes(value.toLowerCase())) ||
          (country.capital && country.capital.toLowerCase().includes(value.toLowerCase()))
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };
  

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by country or capital"
        className="search-input"
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="suggestion-item">
              {suggestion.name} - {suggestion.capital}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
