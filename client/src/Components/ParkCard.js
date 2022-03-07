import React from "react";
function ParkCard({ park: { images, name, states } }) {
    const bgImg = {
        
            backgroundImage: `url(${images[0].url})`,
            backgroundPosition: "50% 50%",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',    
    }

  return (
    
    <div
      className="grid-square"
      style={bgImg}
    >
      {/* <img src={images[0].url} /> */}
      <div className="parkInfo">
        {name}
        <br />
        {states}
      </div>
    </div>
  );
}

export default ParkCard;
