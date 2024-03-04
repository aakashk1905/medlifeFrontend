import React from 'react';
import hospital from "../../../Assests/timeline/hospital 1.png";
import healthInsurance from "../../../Assests/timeline/health-insurance (1) 1.png";
import healthInsurance1 from "../../../Assests/timeline/health-insurance 1.png";
import ambulance from "../../../Assests/timeline/ambulance 1.png";
import healthCare from "../../../Assests/timeline/healthcare 1.png";

const Experience = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='w-[95%] lg:w-4/5'>
                <h1 className='text-[32px] text-gray-800 text-center mb-6 font-semibold'>Your experience with us</h1>


                <div className='grid grid-cols-3 lg:grid-cols-5 gap-y-0 gap-5 lg:gap-20'>
                <div className='mt-[80px]'>
                    <div className='bg-[#DFFFFD] w-[100px] h-[100px] md:w-44 md:h-44 rounded-full flex justify-end items-center'>
                        <div className='bg-[#b3fcf6] w-[90px] h-20 md:w-40 md:h-40 rounded-full flex justify-center items-center p-2'>
                            <img className='w-2/3 md:w-auto' src={hospital} alt="" />
                        </div>
                    </div>
                    <p className='text-gray-700 text-xs md:text-2xl text-center'>Smooth Hospital <br /> Admission</p>
                </div>


                <div className='mt-12 md:mt-[30px] lg:mt-[115px]'>
                    <div className='bg-[#DFFFFD] w-[100px] h-[100px] md:w-44 md:h-44 rounded-full flex justify-end items-center'>
                        <div className='bg-[#b3fcf6] w-[90px] h-20 md:w-40 md:h-40 rounded-full flex justify-center items-center p-2'>
                            <img className='w-2/3 md:w-auto' src={healthInsurance} alt="" />
                        </div>
                    </div>
                    <p className='text-gray-700 text-xs md:text-2xl text-center'>Smooth Hospital <br /> Admission</p>
                </div>

                <div className='mt-24 md:mt-24 lg:mt-0'>
                    <div className='bg-[#DFFFFD] w-[100px] h-[100px] md:w-44 md:h-44 rounded-full flex justify-end items-center'>
                        <div className='bg-[#b3fcf6] w-[90px] h-20 md:w-40 md:h-40 rounded-full flex justify-center items-center p-2'>
                            <img className='w-2/3 md:w-auto' src={healthInsurance1} alt="" />
                        </div>
                    </div>
                    <p className='text-gray-700 text-xs md:text-2xl text-center'>Smooth Hospital <br /> Admission</p>
                </div>

                <div className='mt-2 md:mt-10 lg:mt-36 pl-0 md:pl-24 lg:pl-0 justify-start'>
                    <div className='bg-[#DFFFFD] w-[100px] h-[100px] md:w-44 md:h-44 rounded-full flex justify-end items-center'>
                        <div className='bg-[#b3fcf6] w-[90px] h-20 md:w-40 md:h-40 rounded-full flex justify-center items-center p-2'>
                            <img className='w-2/3 md:w-auto' src={ambulance} alt="" />
                        </div>
                    </div>
                    <p className='text-gray-700 text-xs md:text-2xl text-center ml-0 md:ml-8 lg:ml-0'>Smooth Hospital <br /> Admission</p>
                </div>

                <div className='pl-16 md:pl-32 lg:pl-7 mt-0 md:mt-6 lg::mt-[100px]'>
                    <div className='bg-[#DFFFFD] w-[100px] h-[100px] md:w-44 md:h-44 rounded-full flex justify-end items-center'>
                        <div className='bg-[#b3fcf6] w-[90px] h-20 md:w-40 md:h-40 rounded-full flex justify-center items-center p-2'>
                            <img className='w-2/3 md:w-auto' src={healthCare} alt="" />
                        </div>
                    </div>
                    <p className='text-gray-700 pl-[30px] md:pl-9 lg:pl-0 text-xs md:text-2xl text-center'>Smooth Hospital <br /> Admission</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;