import React from "react";
import { Link } from "react-router-dom";
// import SelectedPark from "./SelectedPark";

function ParkCard({ park: { images, name, states, id } }) {
  const bgImg = {
    backgroundImage: `url(${images[0].url})`,
    backgroundPosition: "50% 50%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="grid-square" style={bgImg}>
      <div className="parkInfo">
        {name}
        <br />
        {states}
        <br />
        <Link to={`/parks/${id}`}>More info</Link>
      </div>
    </div>
  );
}

export default ParkCard;
