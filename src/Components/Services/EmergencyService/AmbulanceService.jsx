import React from "react";
import ambulance from "../../../Assests/ambulance-1.png";
import AppointmentModal from "../../AppointmentModal";

const AmbulanceService = () => {

  return (
    <div className='bg-[#FFF] flex flex-col items-center py-9'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-4 border-b w-[90%] md:w-[88%] lg:w-4/5'>
                <img className='' src={ambulance} alt="" />
            <div>
                <h1 className='text-2xl font-semibold text-[#17324A] mb-6'>Ambulance Services</h1>
                <ul className=' mb-10'>
                <p className='text-[#17324A] text-lg mb-3'>Our fleet of ambulances is equipped with advanced life support to ensure comprehensive care during emergencies.</p>
                    <li className='mb-3 text-[#17324A] text-lg'>Our highly trained emergency medical staff is ready to provide immediate and expert care en route to the hospital.</li>
                    <li className='mb-3 text-[#17324A] text-lg'>To request our advanced life support ambulance services, simply</li>
                </ul>

                <div className="flex flex-col xl:flex-row gap-3 w-full">
          <button className="w-full md:w-full lg:w-full xl:w-[350px] h-[64px] border border-[#00a0aa] rounded-lg text-[#00a0aa]">
            Call now +98 765 432 10
          </button>
          <AppointmentModal className="w-full md:w-full lg:w-full xl:w-[260px] 2xl:w-[350px] h-[64px]" text={"Book Your Appointment"}></AppointmentModal>
        </div>
            </div>
        </div>
        </div>
  );
};

export default AmbulanceService;
