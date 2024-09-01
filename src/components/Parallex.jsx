import React from "react";
import gif from "../assets/bg.gif";
import image1 from "../assets/pandamain.png"; // Ensure this path is correct and the image exists.

const ParallaxSection = () => {
  return (
    <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[100vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={gif}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Foreground Content */}
      <div className="flex items-center justify-center h-full px-2 sm:px-4">
        <img
          src={image1}
          alt="Middle Image"
          className="h-[120%] w-[70%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] 2xl:w-[25%] mx-auto transform transition-transform duration-700 hover:scale-110"
          style={{ maxHeight: "calc(100vh - 2rem)" }} // Adjust based on the available height
        />
      </div>
    </div>
  );
};

export default ParallaxSection;
