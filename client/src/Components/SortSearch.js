import React from "react";

function SortSearch({ setSearch, sortBy, search, setSortBy }) {
  

  return (
    <div className="sortsearch">
      <input
        type="text"
        className="searchinp"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <select
            className="searchdrop"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="states">State</option>
            <option value="name">Name</option>
          </select>
    </div>
  );
}

export default SortSearch;
