import React, { useState, useEffect } from "react";
import SortSearch from "./SortSearch";
import Loading from "./Loading";
import "../grid-card-styles.css";
// import ParkCard from "./ParkCard";

function Main({
  eachPark,
  setAllParks,
  allParks,
  search,
  sortBy,
  setSearch,
  setSortBy,
}) 

{
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`/api/parks?limit=20&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setAllParks(data.parks);
      });
  }, [page, setAllParks]);

  if (allParks.length === 0) {
    return <Loading />;
  }

  function incPage() {
    setPage(page + 1);
  }

  function decPage() {
    setPage(page - 1);
  }

  return (
    <main>
      <SortSearch
        search={search}
        sortBy={sortBy}
        setSearch={setSearch}
        setSortBy={setSortBy}
      />
      <div className="grid-container">{eachPark}</div>
      <div className="tocenter">
        <button className="btn" onClick={decPage}>
          Back
        </button>{" "}
        <button className="btn" onClick={incPage}>
          More
        </button>
      </div>
    </main>
  );
}

export default Main;
