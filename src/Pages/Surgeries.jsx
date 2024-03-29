import React from "react";
import piles from "../Assests/surgeries image/piles (2).png";
import analFistula from "../Assests/surgeries image/anal fistula.png";
import analFissure from "../Assests/surgeries image/anal fissure.png";
import gallstones from "../Assests/surgeries image/gallstones.png";
import kidneyStones from "../Assests/surgeries image/kidney stone.png";
import cotaract from "../Assests/surgeries image/catract.png";
import lasikEye from "../Assests/surgeries image/lasik eye.png";
import hernia from "../Assests/surgeries image/hernia (2).png";
import { MdKeyboardArrowDown } from "react-icons/md";

const Surgeries = () => {
  return (
    <div className=" py-10 flex justify-center">
      <div className="bg-white shadow-md w-[95%] md:w-[90%] rounded-xl p-5 md:p-10 border-t border-gray-100 flex flex-col gap-[50px] items-center">
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-800  text-center ">
          Surgeries We Perform
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8  w-full max-w-[90%]">
          <div className="flex flex-col items-center">
            <img className="border" src={piles} alt="" />
            <p className="text-gray-800 text-center">Piles</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="border" src={analFistula} alt="" />
            <p className="text-gray-800 text-center">Anal Fistula</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="border mb-0.5" src={analFissure} alt="" />
            <p className="text-gray-800 text-center">Anal Fissure</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="border mb-0.5" src={gallstones} alt="" />
            <p className="text-gray-800 text-center">Gallstones</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="border mb-0.5" src={kidneyStones} alt="" />
            <p className="text-gray-800 text-center">Kidney Stones</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="border mb-0.5" src={cotaract} alt="" />
            <p className="text-gray-800 text-center">Cataract</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="border mb-0.5" src={lasikEye} alt="" />
            <p className="text-gray-800 text-center">Lasik Eye Surgery</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="border mb-0.5" src={hernia} alt="" />
            <p className="text-gray-800 text-center">Hernia</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="flex items-center text-lg px-3 py-2 rounded-lg border border-[#00A79D] text-[#00A79D]">
            View More <MdKeyboardArrowDown></MdKeyboardArrowDown>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Surgeries;
