import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

function SelectedPark() {
  const [thisPark, setThisPark] = useState("");
  const { id } = useParams();
  //   const whatever = window.location.href;

  useEffect(() => {
    fetch(`/api/parks/${id}`)
      .then((res) => res.json())
      .then((onePark) => {
        setThisPark(onePark);
      });
  }, [id]);

  if (thisPark.length === 0) {
    return <Loading />;
  }

  console.log(thisPark);

  return (
    <div className="selectedPark">
      <div className="selectedParkImage">
        <img
          src={thisPark.images[0].url}
          title={thisPark.images[0].title}
          alt={thisPark.images[0].altText}
        />
        <figcaption>{thisPark.images[0].caption}</figcaption>
      </div>
      <br />
      <h5>{thisPark.name}</h5>
      <p>{thisPark.description}</p>
      X: {thisPark.longitude}, Y: {thisPark.latitude}<br /><br />
      <b>Weather: </b>
      {" "}{thisPark.weatherInfo}<br />
      {/* Entry Fees: {thisPark.entrance_fees} */}
    </div>
  );
}

export default SelectedPark;
