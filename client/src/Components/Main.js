import React, { useState, useEffect } from "react";
import SortSearch from "./SortSearch";
import "../grid-card-styles.css";
import ParkCard from "./ParkCard";

function Main() {
  const [allParks, setAllParks] = useState([]);
  const [page, setPage] = useState(1)
  const [sortBy, setSortBy] = useState("name");
  const [search, setSearch] = useState("");
  const sortedParks = [...allParks].sort(compare);

  const searchParks = sortedParks.filter((park) => {
    return park.name.toLowerCase().includes(search.toLowerCase());
  });

  function compare(a, b) {
    // if (sortBy === "") {
    //   if (parseInt(a[sortBy]) < parseInt(b[sortBy])) {
    //     return -1;
    //   }
    //   return 0;
    // }
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    return 0;
  }


  useEffect(() => {
    fetch(`/parks?limit=20&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setAllParks(data.parks);
      });
  }, []);

  if (allParks.length === 0) {
    return <h1>Loading...</h1>;
  }

  function incPage() {
    setPage(page + 1)
  }

  function decPage() {
    setPage(page - 1)
  }

  const eachPark = searchParks.map((park) => {
    // console.log(park)
    return <ParkCard park={park} key={park.id} />;
  });
  
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
        <button className="btn" onClick={decPage}>Back</button>{" "}
        <button className="btn" onClick={incPage} >More</button>
      </div>
    </main>
  );
}

export default Main;
