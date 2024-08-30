import React from "react";
import logo from "../assets/logo2.png";
import image3 from "../assets/Panda_main.png";

const SoftPandaAd = () => {
  return (
    <div className="bg-black">
      <div className="bg-black p-4 rounded-lg">
        <div className="flex flex-wrap rounded-[100px]">
          {/* Left Panel */}
          <div className="flex-[0.5] bg-[#a24df2] flex flex-col justify-center items-center p-4 rounded-2xl mr-2">
            <h1 className="text-white font-extrabold text-5xl p-4">
              Soft Panda
            </h1>
            <img src={logo} alt="Soft Panda" className="w-40 h-auto" />
          </div>

          {/* Right Panel */}
          <div className="flex-[1.5] flex flex-col justify-between">
            <div className="flex gap-2">
              {/* Color Grid */}
              <div className="bg-black text-white flex flex-col justify-center items-center p-2 rounded-2xl mr-2">
                <div className="grid grid-cols-3 gap-5 w-full h-80">
                  <div className="bg-[#7bc6cc] w-20 h-20 rounded-xl" />
                  <div className="bg-[#d24444] w-20 h-20 rounded-xl" />
                  <div className="bg-[#c0c5f2] w-20 h-20 rounded-xl" />
                  <div className="bg-[#e1ca35] w-20 h-20 rounded-xl" />
                  <div className="bg-[#c5b78f] w-20 h-20 rounded-xl" />
                  <div className="bg-[#182039] w-20 h-20 rounded-xl" />
                  <div className="bg-[#1d2c15] w-20 h-20 rounded-xl" />
                  <div className="bg-[#e78e50] w-20 h-20 rounded-xl" />
                  <div className="bg-[#9ed392] w-20 h-20 rounded-xl" />
                </div>
              </div>

              {/* Works On Everything */}
              <div className="bg-gray-200 flex-1 p-5 flex flex-col justify-center items-center rounded-2xl">
                <h2 className="text-black text-7xl font-extrabold">
                  Works On Everything
                </h2>
                <img
                  src={image3}
                  alt="Phone with Panda"
                  className="w-96 h-full  rounded-xl"
                />
              </div>
            </div>

            {/* Supports Depth Effect */}
            <div className="bg-[#2c74d1] text-white p-5 rounded-2xl flex flex-col justify-center items-center mt-4">
              <h2 className="font-extrabold text-6xl mb-2">Kinetic</h2>
              <h2 className="text-2xl">Depth Effect</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftPandaAd;
