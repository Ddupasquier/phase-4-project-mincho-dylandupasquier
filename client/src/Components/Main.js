import React, { useState, useEffect } from "react";
import SortSearch from "./SortSearch";
import "../grid-card-styles.css";
import ParkCard from "./ParkCard";

function Main() {
  // const [allParks, setAllParks] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://developer.nps.gov/api/v1/parks?limit=10&start=0&q=data&api_key=gNJoHqgkJgXhDR0HejOhKQSVeu9iW825MiQB3NpL"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAllParks(data);
  //     });
  // }, []);

  // console.log(allParks);

  // This will be usable once I have something to render
  // const eachPark = allParks.map((park) => {
  //   return <ParkCard />
  // })

  return (
    
    <main>
      <SortSearch />
      <div className="grid-container">
        {/* {eachPark} */}
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
        <div className="grid-square">1</div>
        <div className="grid-square">1</div>
      </div>
      <div className="tocenter">
        <button className="btn">Back</button>{" "}
        <button className="btn">More</button>
      </div>
    </main>
    
  );
}

export default Main;
