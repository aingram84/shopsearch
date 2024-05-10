
import './App.css'; // Ensure this line correctly points to your CSS file
import { searchEngine } from './searchEngine';
import React, { useState } from 'react';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [lastSearch, setLastSearch] = useState('');

  const handleSearch = () => {
    const searchResults = searchEngine(searchInput);
    setResults(searchResults);
    setLastSearch(searchInput);  // Save the last searched term
    setSearchInput('');          // Clear the input box
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
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
      {lastSearch && <p>You searched for: {lastSearch}</p>} {/* Display the last search term */}
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
