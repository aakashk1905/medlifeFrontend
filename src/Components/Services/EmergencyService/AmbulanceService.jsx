import React from 'react';
import ambulance from "../../../Assests/Ambulance-in-HYderabad 1.png"

const AmbulanceService = () => {
    return (
        <div className='mt-20'>
            <div className='bg-[#FFF8F8] px-5 md:px-10 py-5'>
                <h1 className='text-2xl font-semibold text-[#17324A] mb-6 text-center'>Ambulance Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
            <div>
                <p className='mb-3 text-[#17324A] text-lg'>Our fleet of ambulances is equipped with advanced life support to ensure comprehensive care during emergencies.</p>

                <p className='mb-7 text-[#17324A] text-lg'>Our highly trained emergency medical staff is ready to provide immediate and expert care en route to the hospital.</p>

                <p className='mb-10 text-[#17324A] text-lg'>To request our advanced life support ambulance services, simply.</p>

                <div className="flex flex-col md:flex-row items-center gap-3 w-full">
          <button className="w-full border border-[#00a0aa] px-4 py-2 rounded-md text-[#00a0aa]">
            Call now +98 765 432 10
          </button>
          <button className="w-full bg-[#00a0aa] px-4 py-2 rounded-md text-white border border-[#00a0aa]">
            Book Your Appoinment
          </button>
        </div>
            </div>

                <img className='' src={ambulance} alt="" />
        </div>
        </div>
        </div>
    );
};

export default AmbulanceService;