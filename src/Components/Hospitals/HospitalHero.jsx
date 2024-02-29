import React from 'react';
import { Link } from 'react-router-dom';
import ellipse from "../../Assests/Ellipse 21.png"

const HospitalHero = () => {
    return (
        <div className='bg-[#fcf8ff] px-10 mt-2 mb-10'>
               {/* Breadcrumbs menu */}
      <div className="text-sm breadcrumbs py-5">
        <ul>
          <li>
          <Link to={"/"}>Home</Link>
          </li>
          <li>
            Hospitals
          </li>
        </ul>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 items-center'>

                <div className='col-span-2'>
                <h1 className='text-3xl md:text-5xl font-semibold text-[#344E5F] mb-4 text-center md:text-center lg:text-start'>Explore Our Partner Hospitals</h1>

<h3 className='text-[#17324A] text-2xl md:text-2xl mb-10 text-center md:text-center lg:text-start'>Experience the expertise of our accomplished doctors, facilitating over 200,000 successful appointments within our extensive network.</h3>


{/* Card */}
<div className="w-full lg:w-2/3 hidden lg:block">
          <div className="bg-[#FCFCFF] py-3 pl-3 flex gap-0 lg:gap-20 2xl:gap-40 items-center rounded-md shadow-lg">
            <div className="border-r-2 pr-12">
              <h1 className="text-2xl md:text-3xl font-bold text-[#5854a8]">
                1000+
              </h1>
              <p className="text-sm md:text-base">DOCTORS</p>
            </div>
            <div className="border-r-2 pr-12">
              <h1 className="text-2xl md:text-3xl font-bold text-[#5854a8]">
                2000+
              </h1>
              <p className="text-sm md:text-base">HOSPITALS</p>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#5854a8]">
                500+
              </h1>
              <p className="text-sm md:text-base">TREATMENTS</p>
            </div>
          </div>
        </div>
                </div>

          <div className=''>
            <div className='flex justify-center -mt-6 lg:-mt-4 ml-6 lg:ml-0'>
            <img className='w-2/3 lg:w-full' src={ellipse} alt="" />
            </div>

                      {/* Card for small and medium screens */}
<div className="w-full flex justify-center lg:hidden">
          <div className="bg-[#FCFCFF] py-3 px-2 md:px-8 flex gap-0 items-center justify-between rounded-md shadow-lg">
            <div className="border-r-2 pr-12">
              <h1 className="text-md md:text-3xl font-bold text-[#5854a8]">
                1000+
              </h1>
              <p className="text-sm md:text-base">DOCTORS</p>
            </div>
            <div className="border-r-2 pr-12">
              <h1 className="text-md md:text-3xl font-bold text-[#5854a8]">
                2000+
              </h1>
              <p className="text-sm md:text-base">HOSPITALS</p>
            </div>
            <div>
              <h1 className="text-md md:text-3xl font-bold text-[#5854a8]">
                500+
              </h1>
              <p className="text-sm md:text-base">TREATMENTS</p>
            </div>
          </div>
        </div>
          </div>




            </div>
        </div>
    );
};

export default HospitalHero;