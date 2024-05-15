import './App.css';
import { searchEngine } from './searchEngine';
import React, { useState } from 'react';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearch = (input = searchInput) => {
    const searchResults = searchEngine(input);
    setResults(searchResults);
    updateRecentSearches(input);
    setSearchInput('');  // Clear the input box
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const updateRecentSearches = (searchTerm) => {
    setRecentSearches(prevSearches => [searchTerm, ...prevSearches].slice(0, 3));
  };

  const clearResults = () => {
    setResults([]);
    setRecentSearches([]);
  };

  return (
    <div className="app-container">
      <div className="navbar">
        <button onClick={() => handleSearch("Nike")}>Nike</button>
        <button onClick={() => handleSearch("Adidas")}>Adidas</button>
        <button onClick={() => handleSearch("Puma")}>Puma</button>
        <button className="clear-button" onClick={clearResults}>Clear Results</button>
      </div>
      <div className="main-content">
        <h1>Search for Shoes</h1>
        <input 
          type="text" 
          value={searchInput} 
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => handleSearch(searchInput)}>Search</button>
        {recentSearches.length > 0 && (
          <div>
            <p>Last Searches:</p>
            <ul>
              {recentSearches.map((search, index) => (
                <li key={index}>{search}</li>
              ))}
            </ul>
          </div>
        )}
        {results.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Store</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index}>
                  <td>{result.name}</td>
                  <td>
                    <a href={result.link} target="_blank" rel="noopener noreferrer">Search results</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
