import React, { useState } from "react";
import "./Search.css";

function Search({ filterFunction }) {
  const [searchText, setSearchText] = useState("");

  function handleSearch() {
    filterFunction(searchText); // Call the parent's filter function with search text
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search here ......"
      />
      <button onClick={handleSearch}>🔍</button>
    </div>
  );
}

export default Search;
