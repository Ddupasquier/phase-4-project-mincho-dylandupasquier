import React from "react";
import "react-slideshow-image/dist/styles.css";
// import { Slide } from "react-slideshow-image";
import { Fade } from "react-slideshow-image";
import img1 from "../LocalAssets/geyser-yelowstone-burst_h.png";
import img2 from "../LocalAssets/GRp433jw6BKfCyL86nk8jc-970-80.jpg.webp";
import img3 from "../LocalAssets/hiker-in-north-window-arch-royalty-free-image-1588786762.jpg";
import img4 from "../LocalAssets/ku5EqMv2ZWTQJvMb3XCmeb-970-80.jpg.webp";
import img5 from "../LocalAssets/national_parks_sustainability_feature.jpg";
import img6 from "../LocalAssets/poAYm6mb5ay4TBSYuMAWs4-970-80.jpg.webp";
import img7 from "../LocalAssets/ukUkjVfuPhJadUKzSS4Kmm-970-80.jpg.webp";
import img8 from "../LocalAssets/ZiVxAfNzdnvjEigJuKXxJW-970-80.jpg.webp";


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
  {
    url: `${img4}`,
  },
  {
    url: `${img5}`,
  },
  {
    url: `${img6}`,
  },
  {
    url: `${img7}`,
  },
  {
    url: `${img8}`,
  },
  
];

const slides = fadeImages.map((fadeImage, index) => {
  return (
    <div className="each-fade" key={index}>
      <div className="image-container">
        <img src={fadeImage.url} alt="carouselimages" />
      </div>
    </div>
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
