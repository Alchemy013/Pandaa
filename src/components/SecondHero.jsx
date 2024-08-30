// SecondHero.jsx
import React, { useState, useEffect } from "react";
import image1 from "../assets/9.png";
import image2 from "../assets/10.png";
import image3 from "../assets/11.png";
const SecondHero = () => {
  return (
    <div className="bg-black px-12 py-24 ">
      <div className="second-hero-container ">
        <img
          src={image1}
          alt="Image 1"
          style={{ animationDelay: "1s" }}
          className="animated-image h-[650px] "
        />
        <img
          src={image2}
          alt="Image 2"
          style={{ animationDelay: "0.5s" }}
          className="animated-image h-[700px]"
        />
        <img
          src={image3}
          alt="Image 3"
          style={{ animationDelay: "0s" }}
          className="animated-image h-[650px]"
        />
      </div>
    </div>
  );
};

export default SecondHero;
