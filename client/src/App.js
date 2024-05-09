import React, { useState } from 'react';
import { searchEngine } from './searchEngine';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    // Assuming you have set up an endpoint to handle the search
    const response = searchEngine(searchInput);
    setResults(response);
  };

  return (
    <div>
      <input 
        type="text" 
        value={searchInput} 
        onChange={(e) => setSearchInput(e.target.value)} 
      />
      <button onClick={handleSearch}>This Button Goes Wee!</button>
      <div>
        {results.map((result, index) => (
          <div key={index}>
            <a href={result.link}>{result.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
