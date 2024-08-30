import React from "react";
import gif from "../assets/bg.gif";
import image1 from "../assets/pandamain.png"; // Ensure this path is correct and the image exists.

const ParallaxSection = () => {
  return (
    <div className="relative h-[65vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={gif}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Foreground Content */}
      <div className=" flex items-center justify-center h-full">
        <img
          src={image1}
          alt="Middle Image"
          className="max-w-md mx-auto transform transition-transform duration-700 hover:scale-110 h-[750px]"
        />
      </div>
    </div>
  );
};

export default ParallaxSection;
