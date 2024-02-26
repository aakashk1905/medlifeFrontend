import React from 'react';
import hospital from "../../Assests/hospital.png"
import logo from "../../Assests/logo.png"


const OurHospitals = () => {
    return (
        <div className="py-10 px-10">
      <div>
        {/* Headline */}
        <h1 className="text-gray-700 text-4xl font-semibold text-center mb-10">
        Our Hospital Partners 
        </h1>

        {/* Blogs card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="shadow-lg rounded-lg">
            <div className='relative'>
              <div className='bg-white absolute top-0 left-0 px-4 py-1 rounded-r-lg'>
                <img className='w-32' src={logo} alt="" />
              </div>
            <img className="w-full mb-3 rounded-t-lg" src={hospital} alt="" />
            </div>
            <div className="px-4 pb-4">
            <h1 className="text-[#17324A] text-2xl font-semibold mb-1">
            Orchid Hospital
            </h1>
            <p className="text-gray-500 mb-2">
            The Orchid Hospital is the first multi super specialty hospital in Patna, Bihar, India, which has taken an initiative to amalgamate and integrate the best in healthcare be it manpower or technology. this hospital has been set up with the vision of providing quality healthcare at affordable cost and within the reach of every individual. Equipped with 'futuristic technology' and truly 'brilliant and dedicated professionals' with the infrastructure, The Orchid Hospital team believes in working as a team and offers high quality, value and evidence based integrated healthcare...
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
            <h1 className="text-[#17324A] text-2xl font-semibold mb-1">
            Orchid Hospital
            </h1>
            <p className="text-gray-500 mb-2">
            The Orchid Hospital is the first multi super specialty hospital in Patna, Bihar, India, which has taken an initiative to amalgamate and integrate the best in healthcare be it manpower or technology. this hospital has been set up with the vision of providing quality healthcare at affordable cost and within the reach of every individual. Equipped with 'futuristic technology' and truly 'brilliant and dedicated professionals' with the infrastructure, The Orchid Hospital team believes in working as a team and offers high quality, value and evidence based integrated healthcare...
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