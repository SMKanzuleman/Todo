import React from 'react'
import { useState } from 'react';
import { FaTasks } from "react-icons/fa";
import { ImRadioUnchecked } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import { FiDelete } from "react-icons/fi";

const App = () => {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen w-full bg-gray-950 py-10 gap-5">
      {/* Header */}
      <div className="lg:w-[70%] w-[85%] h-25 bg-gray-900/60 flex justify-between px-10 items-center rounded-xl">
        <div className="flex flex-col justify-start gap-0.5">
          <h1 className="text-4xl font-extrabold text-white">
            Todo <span className="text-blue-600">App</span>
          </h1>
          <h2 className="text-white/50 text-xs">
            Remind all your Important tasks
          </h2>
        </div>
        <div className="text-blue-600">
          <FaTasks size={28} />
        </div>
      </div>
      {/* Form */}
      <div className="lg:w-[70%] w-[85%] bg-gray-900/60 rounded-2xl px-10 min-h-22 flex items-center gap-3 lg:py-7 py-10  ">
        <form
          action=""
          className="w-full flex lg:gap-0 gap-5 lg:flex-row flex-col  "
        >
          <input
            type="text"
            className="bg-blue-950/30 w-full lg:w-[80%] py-3 border border-blue-950 rounded focus:outline-0 px-5 text-white text-sm lg:rounded-l-2xl"
            placeholder="Enter what you want to remember..."
          />
          <select
            name="Seclect"
            id=""
            className="bg-white w-full lg:w-[20%] px-2 py-3  lg:rounded-r-2xl not-lg:rounded-xl focus:outline-0"
          >
            <option value="">Category</option>
            <option value="red">Red</option>
            <option value="gr">Green</option>
            <option value="bl">blue</option>
          </select>
          <button className="bg-blue-600 px-7 py-3 font-semibold transition-all ease-in-out hover:scale-105 active:scale-95 rounded-xl lg:ml-5">
            Submit
          </button>
        </form>
      </div>

      {/* Seprator */}
      <div className="lg:w-[70%] w-[85%] flex justify-between px-5">
        <p className="text-blue-600">All tasks</p>
        <div className="flex gap-2 text-red-600 transition-all ease-in-out hover:scale-110 active:scale-95">
          <p>Clear All</p>
          <button className="text-red-600 text-medium ">
            <FiDelete />
          </button>
        </div>
      </div>
      {/* TaskList */}
      <ul className="flex flex-col gap-5 justify-center lg:w-[70%] w-[85%]">
        {/* Task */}
        <div className="w-full bg-gray-900/60 min-h-20 rounded-xl flex justify-between items-center px-10 py-5 gap-1">
          <div className=" w-full flex flex-col justify-between gap-2 bg-amber-00">
            <h1 className="text-white text-xs py-1 bg-green-950/70 w-15 text-center rounded-full">
              Task
            </h1>
            <p className="text-white text-justify font-mono text-[16px] tracking-tighter pr-5 ">
              I have to Go to Gym before 11 am The reason your header is getting
              "fucked up" and pushed to the left is becaus
            </p>
            <p className="text-xs text-blue-600">25 May 2006</p>
          </div>
          <div className=" h-full flex justify-center items-center gap-3">
            <button className="text-red-600 transition-all ease-in-out hover:scale-125 active:scale-90">
              <MdDelete size={20} />
            </button>
            <button className="text-blue-600 transition-all ease-in-out hover:scale-125 active:scale-90">
              <ImRadioUnchecked size={15} />
            </button>
          </div>
        </div>
        <div className="w-full bg-gray-900/60 min-h-20 rounded-xl flex justify-between items-center px-10 py-5 gap-1">
          <div className=" w-full flex flex-col justify-between gap-2 bg-amber-00">
            <h1 className="text-white text-xs py-1 bg-green-950/70 w-15 text-center rounded-full">
              Task
            </h1>
            <p className="text-white text-justify font-mono text-[16px] tracking-tighter pr-5 ">
              I have to Go to Gym before 11 am The reason your header is getting
              "fucked up" and pushed to the left is becaus
            </p>
            <p className="text-xs text-blue-600">25 May 2006</p>
          </div>
          <div className=" h-full flex justify-center items-center gap-3">
            <button className="text-red-600 transition-all ease-in-out hover:scale-125 active:scale-90">
              <MdDelete size={20} />
            </button>
            <button className="text-blue-600 transition-all ease-in-out hover:scale-125 active:scale-90">
              <ImRadioUnchecked size={15} />
            </button>
          </div>
        </div>
        <div className="w-full bg-gray-900/60 min-h-20 rounded-xl flex justify-between items-center px-10 py-5 gap-1">
          <div className=" w-full flex flex-col justify-between gap-2 bg-amber-00">
            <h1 className="text-white text-xs py-1 bg-green-950/70 w-15 text-center rounded-full">
              Task
            </h1>
            <p className="text-white text-justify font-mono text-[16px] tracking-tighter pr-5 ">
              I have to Go to Gym before 11 am The reason your header is getting
              "fucked up
            </p>
            <p className="text-xs text-blue-600">25 May 2006</p>
          </div>
          <div className=" h-full flex justify-center items-center gap-3">
            <button className="text-red-600 transition-all ease-in-out hover:scale-125 active:scale-90">
              <MdDelete size={20} />
            </button>
            <button className="text-blue-600 transition-all ease-in-out hover:scale-125 active:scale-90">
              <ImRadioUnchecked size={15} />
            </button>
          </div>
        </div>
      </ul>
    </div>
  );
}
export default App
