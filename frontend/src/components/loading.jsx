import React from "react";
import { FaTasks } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="w-full min-h-screen bg-gray-950 flex flex-col justify-center items-center gap-4">
      {/* Outer spinning ring */}
      <div className="relative flex justify-center items-center">
        <div className="w-20 h-20 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin"></div>

        {/* Absolute positioned icon in the center */}
        <div className="absolute text-blue-600 animate-pulse">
          <FaTasks size={30} />
        </div>
      </div>

      {/* Text with letter-spacing animation */}
      <h1 className="text-blue-600 text-2xl font-bold tracking-widest animate-pulse uppercase">
        Loading...
      </h1>

      {/* Subtle background glow */}
      <div className="absolute w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>
    </div>
  );
};

export default Loading;
