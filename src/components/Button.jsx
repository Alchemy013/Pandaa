import React from "react";

const Button = () => {
  return (
    <div className="flex justify-center items-center bg-black py-6">
      <button className="border border-white text-white px-12 py-3 md:px-36 md:py-4 rounded-full flex items-center space-x-2">
        <span>&rarr;</span>
      </button>
    </div>
  );
};

export default Button;
