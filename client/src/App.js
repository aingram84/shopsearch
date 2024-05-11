import './App.css'; // Ensure this line correctly points to your CSS file
import { searchEngine } from './searchEngine';
import React, { useState } from 'react';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);  // Store recent searches in an array

  const handleSearch = () => {
    const searchResults = searchEngine(searchInput);
    setResults(searchResults);
    updateRecentSearches(searchInput);  // Update the list of recent searches
    setSearchInput('');                // Clear the input box
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // Function to update recent searches
  const updateRecentSearches = (searchTerm) => {
    setRecentSearches(prevSearches => {
      const updatedSearches = [searchTerm, ...prevSearches];
      return updatedSearches.slice(0, 3);  // Keep only the last 3 searches
    });
  };

  return (
    <div className="centered">
      <h1>Search for Shoes</h1>
      <input 
        type="text" 
        value={searchInput} 
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {recentSearches.length > 0 && (
          <div>
            <p>Last Searches:</p>
            <ul>
              {recentSearches.map((search, index) => (
                <li key={index}>{search}</li>  // Display each search on a new line
              ))}
            </ul>
          </div>
        )}
      </div>
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
  );
}

export default App;
