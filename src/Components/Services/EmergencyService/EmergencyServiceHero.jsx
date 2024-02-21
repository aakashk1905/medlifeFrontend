import React from 'react';
import Form from '../../Form';
import "../../styles/Hero.css";

const EmergencyServiceHero = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 bg-[#FCF8FF] px-10 py-10'>
            <div className='col-span-2'>
                <h1 className='text-5xl font-bold text-[#2CA9E1] mb-5'>Welcome to Med Life Emergency Services</h1>
                <p className='text-3xl font-semibold text-gray-500 mb-10'>We are committed to providing prompt and quality care during medical emergencies.</p>

                <p className='text-3xl font-semibold text-gray-500 mb-6'>For immediate assistance, call our Emergency Helpline:</p>
                <button className="w-96 bg-[#00a0aa] px-4 py-2 rounded-md text-white border border-[#00a0aa]">
                Call now +98 765 432 10 
          </button>
            </div>

            <div className="p-4 rounded-xl shadow-md bg-white">
          <div className="hc-head">Book Free Consultation</div>
          <Form />
        </div>
        </div>
    );
};

export default EmergencyServiceHero;