import React from "react";
import "react-slideshow-image/dist/styles.css";
// import { Slide } from "react-slideshow-image";
import { Fade } from "react-slideshow-image";
import img1 from "../LocalAssets/geyser-yelowstone-burst_h.png";
import img2 from "../LocalAssets/hiker-in-north-window-arch-royalty-free-image-1588786762.jpg";
import img3 from "../LocalAssets/national_parks_sustainability_feature.jpg";

// const slideImages = [`${img1}`, `${img2}`, `${img3}`];

const fadeImages = [
  {
    url: `${img1}`,
  },
  {
    url: `${img2}`,
  },
  {
    url: `${img3}`,
  },
];


  const slides = fadeImages.map((fadeImage, index) => {
    return (
      <>
        <div className="each-fade" key={index}>
          <div className="image-container">
            <img src={fadeImage.url} />
          </div>
        </div>
      </>
    );
  });


function Carousel() {
  return (
    <>
      <Fade>{slides}</Fade>
    </>
  );
}

export default Carousel;
