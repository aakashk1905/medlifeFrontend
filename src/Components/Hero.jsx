import React from 'react';
import heroDoc from "../Assests/heroDoc.png";
import Form from './Form';

const Hero = () => {
    return (
        <div className='mb-10'>
            <div className='px-5 lg:px-9 bg-[#fcf8ff] w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-0 lg:gap-10'>
                <div className='relative mt-3 xl:col-span-2'>
                <h1 className='text-[28px] md:text-5xl lg:text-4xl xl:text-5xl font-bold text-[#2ca9e1] mb-0 md:mb-2 text-center lg:text-start'>Welcome to Med Life Easy</h1>
                <h2 className='text-gray-500 text-xl md:text-3xl lg:text-2xl xl:text-3xl font-semibold text-center lg:text-start'>Your Path to Health and Happiness</h2>
                <div className='flex lg:justify-start justify-center'>
                <img className='w-full md:w-96 lg:w-[464px]' src={heroDoc} alt="" />
                </div>

                {/* Bottom card */}
<div className="absolute bottom-7 w-full lg:w-[480px]">
          <div className="bg-[#FCFCFF] shadow py-3 px-6 flex justify-between items-center rounded-xl">
            <div className="border-r-2 pr-12">
              <h1 className="text-xl md:text-2xl font-bold text-[#5854a8]">
                1000+
              </h1>
              <p className="text-xs md:text-base">DOCTORS</p>
            </div>
            <div className="border-r-2 pr-12 pl-2 md:pl-0">
              <h1 className="text-xl md:text-2xl font-bold text-[#5854a8]">
                2000+
              </h1>
              <p className="text-xs md:text-base">HOSPITALS</p>
            </div>
            <div className='pl-2 md:pl-0'>
              <h1 className="text-xl md:text-2xl font-bold text-[#5854a8]">
                500+
              </h1>
              <p className="text-xs md:text-base">TREATMENTS</p>
            </div>
          </div>
        </div>
                </div>

                <div className="w-full mt-5">
          <Form header={"Book Free Consultation"} />
        </div>
            </div>
        </div>
    );
};

export default Hero;