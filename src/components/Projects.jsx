import React from "react";
import logo from "../assets/logo2.png";
import image3 from "../assets/Panda_main.png";

const SoftPandaAd = () => {
  return (
    <div className="bg-black">
      <div className=" p-4 rounded-lg">
        <div className="flex flex-col md:flex-row rounded-lg bg-black p-4">
          {/* Left Panel */}
          <div className="flex-none md:flex-1 bg-[#a24df2] flex flex-col justify-center items-center p-4 rounded-2xl mb-4 md:mb-0 md:mr-4">
            <h1 className="text-white font-extrabold text-3xl md:text-5xl p-4">
              Soft Panda
            </h1>
            <img src={logo} alt="Soft Panda" className="w-32 md:w-40 h-auto" />
          </div>

          {/* Right Panel */}
          <div className="flex-1 flex flex-col">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              {/* Color Grid */}
              <div className=" text-white flex flex-col justify-center items-center p-2 rounded-2xl flex-1">
                <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full h-auto place-items-center">
                  <div className="bg-[#7bc6cc] w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl" />
                  <div className="bg-[#d24444] w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl" />
                  <div className="bg-[#c0c5f2] w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl" />
                  <div className="bg-[#e1ca35] w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl" />
                  <div className="bg-[#c5b78f] w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl" />
                  <div className="bg-[#182039] w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl" />
                  <div className="bg-[#1d2c15] w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl" />
                  <div className="bg-[#e78e50] w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl" />
                  <div className="bg-[#9ed392] w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl" />
                </div>
              </div>

              {/* Works On Everything */}
              <div className="bg-gray-200 flex-1 p-4 md:p-5 flex flex-col justify-center items-center rounded-2xl">
                <h2 className="text-black text-4xl md:text-7xl font-extrabold mb-4">
                  Works On Everything
                </h2>
                <img
                  src={image3}
                  alt="Phone with Panda"
                  className="w-full md:w-96 h-auto rounded-xl"
                />
              </div>
            </div>

            {/* Supports Depth Effect */}
            <div className="bg-[#2c74d1] text-white p-4 md:p-5 rounded-2xl flex flex-col justify-center items-center mt-4">
              <h2 className="font-extrabold text-4xl md:text-6xl mb-2">
                Kinetic
              </h2>
              <h2 className="text-xl md:text-2xl">Depth Effect</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftPandaAd;
