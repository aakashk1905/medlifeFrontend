import React from 'react';
import piles from "../Assests/surgeries image/piles (2).png"
import analFistula from "../Assests/surgeries image/piles (2).png"
import analFissure from "../Assests/surgeries image/piles (2).png"
import gallstones from "../Assests/surgeries image/piles (2).png"
import kidneyStones from "../Assests/surgeries image/piles (2).png"
import cotaract from "../Assests/surgeries image/piles (2).png"
import lasikEye from "../Assests/surgeries image/piles (2).png"
import hernia from "../Assests/surgeries image/piles (2).png"
import { MdKeyboardArrowDown } from "react-icons/md";

const Surgeries = () => {
    return (
     <div className='px-5 md:px-10 py-10'>
        <div className='bg-white shadow-md rounded-xl px-10 py-10 border-t border-gray-100'>
        <h1 className='text-2xl md:text-4xl font-semibold text-gray-800 text-center mb-8'>Surgeries We Perform</h1>
           <div className='grid grid-cols-2 md:grid-cols-4 gap-0 md:gap-5 lg:gap-0 lg:grid-cols-8 mb-8 px-0 md:px-10 lg:px-16'>
            <div className='flex flex-col items-center'>
                <img className='border' src={piles} alt="" />
                <p className='text-gray-800'>Piles</p>
            </div>
            <div className='flex flex-col items-center'>
                <img className='border' src={analFistula} alt="" />
                <p className='text-gray-800'>Piles</p>
            </div>
            <div className='flex flex-col items-center'>
                <img className='border' src={analFissure} alt="" />
                <p className='text-gray-800'>Piles</p>
            </div>
            <div className='flex flex-col items-center'>
                <img className='border' src={gallstones} alt="" />
                <p className='text-gray-800'>Piles</p>
            </div>
            <div className='flex flex-col items-center'>
                <img className='border' src={kidneyStones} alt="" />
                <p className='text-gray-800'>Piles</p>
            </div>
            <div className='flex flex-col items-center'>
                <img className='border' src={cotaract} alt="" />
                <p className='text-gray-800'>Piles</p>
            </div>
            <div className='flex flex-col items-center'>
                <img className='border' src={lasikEye} alt="" />
                <p className='text-gray-800'>Piles</p>
            </div>
            <div className='flex flex-col items-center'>
                <img className='border' src={hernia} alt="" />
                <p className='text-gray-800'>Piles</p>
            </div>

            
           
        </div>
        <div className='flex justify-center'>
                <button className='flex items-center text-lg px-3 py-2 rounded-lg border border-[#00A79D] text-[#00A79D]'>View More  <MdKeyboardArrowDown></MdKeyboardArrowDown></button>
            </div>
     </div>
     </div>
    );
};

export default Surgeries;