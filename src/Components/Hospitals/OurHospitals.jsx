import React from 'react';
import hospital from "../../Assests/hospital.png"
import logo from "../../Assests/logo.png"
import { FaLocationDot } from "react-icons/fa6";


const OurHospitals = () => {
    return (
        <div className="py-7 w-full flex flex-col items-center">
      <div className='w-[95%] md:w-4/5'>
        {/* Headline */}
        <h1 className="text-gray-700 text-4xl font-semibold text-center mb-10">
        Our Hospital Partners 
        </h1>

        {/* Blogs card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">


          <div className="shadow-lg rounded-lg">
            <div className='relative'>
              <div className='bg-white absolute top-0 left-0 px-4 py-1 rounded-r-lg'>
                <img className='w-32' src={logo} alt="" />
              </div>
            <img className="w-full mb-3 rounded-t-lg" src={hospital} alt="" />
            </div>
            <div className="px-4 pb-4">
            <h1 className="text-gray-600 text-2xl font-semibold mb-1 flex justify-between items-center">
            Orchid Hospital
            <span className='text-gray-500 text-xl'>Since 2004</span>
            </h1>
            
            <p className="text-gray-500 mb-3 text-justify flex gap-2">
              <FaLocationDot className='text-3xl'></FaLocationDot>
            4th Cross Rd, opposite bank of India atm, Srinivasanagara, Hanumanthnagar, Banashankari 1st Stage, Banashankari, Bengaluru, Karnataka 560019, India
            </p>
            <button className="bg-gray-200 rounded-lg p-3 font-semibold text-purple-800">
              View Hospital
            </button>
            </div>
          </div>

          <div className="shadow-lg rounded-lg">
            <div className='relative'>
              <div className='bg-white absolute top-0 left-0 px-4 py-1 rounded-r-lg'>
                <img className='w-32' src={logo} alt="" />
              </div>
            <img className="w-full mb-3 rounded-t-lg" src={hospital} alt="" />
            </div>
            <div className="px-4 pb-4">
            <h1 className="text-gray-600 text-2xl font-semibold mb-1 flex justify-between items-center">
            Orchid Hospital
            <span className='text-gray-500 text-xl'>Since 2004</span>
            </h1>
            
            <p className="text-gray-500 mb-3 text-justify flex gap-2">
              <FaLocationDot className='text-3xl'></FaLocationDot>
            4th Cross Rd, opposite bank of India atm, Srinivasanagara, Hanumanthnagar, Banashankari 1st Stage, Banashankari, Bengaluru, Karnataka 560019, India
            </p>
            <button className="bg-gray-200 rounded-lg p-3 font-semibold text-purple-800">
              View Hospital
            </button>
            </div>
          </div>

          <div className="shadow-lg rounded-lg">
            <div className='relative'>
              <div className='bg-white absolute top-0 left-0 px-4 py-1 rounded-r-lg'>
                <img className='w-32' src={logo} alt="" />
              </div>
            <img className="w-full mb-3 rounded-t-lg" src={hospital} alt="" />
            </div>
            <div className="px-4 pb-4">
            <h1 className="text-gray-600 text-2xl font-semibold mb-1 flex justify-between items-center">
            Orchid Hospital
            <span className='text-gray-500 text-xl'>Since 2004</span>
            </h1>
            
            <p className="text-gray-500 mb-3 text-justify flex gap-2">
              <FaLocationDot className='text-3xl'></FaLocationDot>
            4th Cross Rd, opposite bank of India atm, Srinivasanagara, Hanumanthnagar, Banashankari 1st Stage, Banashankari, Bengaluru, Karnataka 560019, India
            </p>
            <button className="bg-gray-200 rounded-lg p-3 font-semibold text-purple-800">
              View Hospital
            </button>
            </div>
          </div>


        </div>
      </div>
    </div>
    );
};

export default OurHospitals;