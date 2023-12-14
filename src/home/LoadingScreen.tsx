/* eslint-disable @typescript-eslint/no-unused-vars */
import LogoBmouse from "../assets/Logo-Bmose.png";
import React from "react";

const LoadingScreen: React.FC = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-blue-800 text-white">
      <div className="relative">
        <img src={LogoBmouse} alt="Logo" className="" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-white border-opacity-25 rounded-full w-16 h-16 animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
