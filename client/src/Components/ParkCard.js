import React from "react";
function ParkCard({ park: { images, name, states } }) {
  debugger;
  return (
    //   might make images BG images and c/c
    <div className="grid-square">
      <img src={images[0].url} />
      <div className="parkInfo">
        {name}
        <br />
        {states}
      </div>
    </div>
  );
}

export default ParkCard;
