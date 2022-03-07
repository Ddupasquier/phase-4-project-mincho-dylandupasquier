import React, { useState, useEffect } from "react";
import SortSearch from "./SortSearch";
import "../grid-card-styles.css";
import ParkCard from "./ParkCard";

function Main() {
  const [allParks, setAllParks] = useState([]);

  

  useEffect(() => {
    fetch("/parks")
      .then((res) => res.json())
      .then((data) => {
        setAllParks(data);
      });
  }, []);

  if (allParks === 0) {
    return <h1>Loading...</h1>
  }

  // console.log(allParks);

  // This will be usable once I have something to render
  const eachPark = allParks.map((park) => {
    return <ParkCard park={park} key={park.id} />;
  });

  return (
    <main>
      <SortSearch />
      <div className="grid-container">
        {eachPark}
        {/* <div className="grid-square">1</div>
        <div className="grid-square">1</div>
        <div className="grid-square">1</div>
        <div className="grid-square">1</div>
        <div className="grid-square">1</div>
        <div className="grid-square">1</div>
        <div className="grid-square">1</div>
        <div className="grid-square">1</div>
        <div className="grid-square">1</div>
        <div className="grid-square">1</div>
        <div className="grid-square">1</div>
        <div className="grid-square">1</div>
        <div className="grid-square">1</div>
        <div className="grid-square">1</div>
        <div className="grid-square">1</div>
        <div className="grid-square">1</div>
        <div className="grid-square">1</div>
        <div className="grid-square">1</div>
        <div className="grid-square">1</div>
        <div className="grid-square">1</div> */}
      </div>
      <div className="tocenter">
        <button className="btn">Back</button>{" "}
        <button className="btn">More</button>
      </div>
    </main>
  );
}

export default Main;
