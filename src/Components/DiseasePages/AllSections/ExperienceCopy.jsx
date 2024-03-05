import React from 'react';
import hospital from "../../../Assests/timeline/hospital 1.png";
import healthInsurance from "../../../Assests/timeline/health-insurance (1) 1.png";
import healthInsurance1 from "../../../Assests/timeline/health-insurance 1.png";
import ambulance from "../../../Assests/timeline/ambulance 1.png";
import healthCare from "../../../Assests/timeline/healthcare 1.png";

const ExperienceCopy = () => {
    return (
        <div className='flex flex-col items-center py-10'>
            <div className='w-[95%] lg:w-4/5'>
                <h1 className='text-[32px] text-gray-800 text-center mb-6 font-semibold'>Your experience with us</h1>


                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-0 gap-5 lg:gap-20'>
                <div className=''>
                    <div className='bg-[#DFFFFD] w-[100px] h-[100px] md:w-44 md:h-44 rounded-full flex justify-end items-center'>
                        <div className='bg-[#b3fcf6] w-[90px] h-20 md:w-40 md:h-40 rounded-full flex justify-center items-center p-2'>
                            <img className='w-2/3 md:w-auto' src={hospital} alt="" />
                        </div>
                    </div>
                    <p className='text-gray-700 text-xs md:text-xl xl:text-lg 2xl:text-2xl text-center'>Smooth Hospital <br /> Admission</p>
                </div>


                <div className=''>
                    <div className='bg-[#DFFFFD] w-[100px] h-[100px] md:w-44 md:h-44 rounded-full flex justify-end items-center'>
                        <div className='bg-[#b3fcf6] w-[90px] h-20 md:w-40 md:h-40 rounded-full flex justify-center items-center p-2'>
                            <img className='w-2/3 md:w-auto' src={healthInsurance} alt="" />
                        </div>
                    </div>
                    <p className='text-gray-700 text-xs md:text-xl xl:text-lg 2xl:text-2xl text-center'>Smooth Hospital <br /> Admission</p>
                </div>

                <div className=''>
                    <div className='bg-[#DFFFFD] w-[100px] h-[100px] md:w-44 md:h-44 rounded-full flex justify-end items-center'>
                        <div className='bg-[#b3fcf6] w-[90px] h-20 md:w-40 md:h-40 rounded-full flex justify-center items-center p-2'>
                            <img className='w-2/3 md:w-auto' src={healthInsurance1} alt="" />
                        </div>
                    </div>
                    <p className='text-gray-700 text-xs md:text-xl xl:text-lg 2xl:text-2xl text-center'>Smooth Hospital <br /> Admission</p>
                </div>

                <div className=''>
                    <div className='bg-[#DFFFFD] w-[100px] h-[100px] md:w-44 md:h-44 rounded-full flex justify-end items-center'>
                        <div className='bg-[#b3fcf6] w-[90px] h-20 md:w-40 md:h-40 rounded-full flex justify-center items-center p-2'>
                            <img className='w-2/3 md:w-auto' src={ambulance} alt="" />
                        </div>
                    </div>
                    <p className='text-gray-700 text-xs md:text-xl xl:text-lg 2xl:text-2xl text-center ml-0 md:ml-8 lg:ml-0'>Smooth Hospital <br /> Admission</p>
                </div>

                <div className=''>
                    <div className='bg-[#DFFFFD] w-[100px] h-[100px] md:w-44 md:h-44 rounded-full flex justify-end items-center'>
                        <div className='bg-[#b3fcf6] w-[90px] h-20 md:w-40 md:h-40 rounded-full flex justify-center items-center p-2'>
                            <img className='w-2/3 md:w-auto' src={healthCare} alt="" />
                        </div>
                    </div>
                    <p className='text-gray-700 text-xs md:text-xl xl:text-lg 2xl:text-2xl text-center ml-0 md:ml-8 lg:ml-0'>Smooth Hospital <br /> Admission</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCopy;