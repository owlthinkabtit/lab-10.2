import React, { useState } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import { FRUITS } from '../fruits'

function DebounceSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);
  const filteredFruits = FRUITS.filter((fruit) => fruit.toLowerCase().includes(debouncedSearch.toLowerCase()))

  return(
    <div style={{ padding: '20px', border: '1px solid #ccc'}}>
      <h2>Fruit Finder</h2>
      <input 
        type="text"
        placeholder="Search for a fruit...."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        style={{ padding: '8px', width: '250px'}}
      />  

      <p><i>Status: {searchTerm !== debouncedSearch ? "Typing..." : "Done!"}</i></p>
      <h4>Results (Searching for: "{debouncedSearch}"):</h4>

      <ul style={{ maxHeight: '200px', overflowY: 'auto'}}>
       {debouncedSearch.length > 0 ? (
          filteredFruits.length > 0 ? (
            filteredFruits.map((fruit, index) => (
              <li key={index}>{fruit}</li>
            ))
          ) : (
            <li>No fruits found!</li>
          )
       ) : (
        <li style={{listStyle: 'none'}}>Type a fruit name to start searching...</li>
       )}
      </ul>
    </div>
  );
};

export default DebounceSearch;