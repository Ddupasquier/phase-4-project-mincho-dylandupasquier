import React, { useState, useEffect } from "react";
import SortSearch from "./SortSearch";
import "../grid-card-styles.css";
import ParkCard from "./ParkCard";

function Main() {
  const [allParks, setAllParks] = useState([]);
  const [sortBy, setSortBy] = useState(localStorage.getItem("sortBy") || "");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("sortBy", sortBy);
  }, [sortBy]);

  const sortedParks = [...allParks].sort(compare);

  const searchParks = sortedParks.filter((park) => {
    return park.name.toLowerCase().includes(search.toLowerCase());
  });

  function compare(a, b) {
    if (sortBy === "states") {
      if (parseInt(a[sortBy]) < parseInt(b[sortBy])) {
        return -1;
      }
      return 0;
    }
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    return 0;
  }

  useEffect(() => {
    fetch("/parks?limit=20&page=10")
      .then((res) => res.json())
      .then((data) => {
        debugger;
        setAllParks(data.parks);
      });
  }, []);

  if (allParks === 0) {
    return <h1>Loading...</h1>;
  }

  const eachPark = searchParks.map((park) => {
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
        <button className="btn">Back</button>{" "}
        <button className="btn">More</button>
      </div>
    </main>
  );
}

export default Main;
