import React, { useEffect } from 'react';
import phone from "../Assests/Modal images and icons/phone.png";
import doctor from "../Assests/Modal images and icons/doctor.png";
import customer from "../Assests/Modal images and icons/customer-care 1.png";
import doctor1 from "../Assests/Modal images and icons/doctor 1.png";
import Form from './Form';

const Modal = () => {
  useEffect(() => {
    // Set a timeout for 5 seconds before opening the modal
    const modalTimeout = setTimeout(() => {
      document.getElementById('my_modal_3').showModal();
    }, 5000);

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(modalTimeout);
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box w-5/6 max-w-6xl p-0">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-4 text-white">✕</button>
        </form>
        <div className='bg-[#00a79d] p-3 mb-3'>
          <h1 className='text-2xl font-semibold text-white text-center'>Book Your Complimentary Consultation Now</h1>
        </div>


        <div>
          <div className='mb-5 px-7'>
            <h1 className='text-gray-700 font-semibold text-xl mb-1'>Elevating Your Surgical Experience</h1>
            <p className='text-gray-700'>Connect with our expert surgeon to discuss over 50+ medical conditions.</p>
          </div>

          <div className='grid grid-cols-3 gap-5 pr-10'>
          <div className='grid grid-cols-2 gap-5 col-span-2 relative'>
          <div className=''>
            <div className='bg-[#50dbcf] pt-5 pr-5 h-[395px]'>
            <div className='bg-[#cfe5ff] h-[395px]'>
            <img className='h-[395px]' src={doctor1} alt="" />
            </div>
            </div>
{/* Bottom card */}
<div className="w-full absolute bottom-36">
          <div className="bg-[#FCFCFF] shadow py-3 px-6 flex justify-between items-center">
            <div className="border-r-2 pr-12">
              <h1 className="text-xl md:text-2xl font-bold text-[#5854a8]">
                1000+
              </h1>
              <p className="text-sm md:text-base">DOCTORS</p>
            </div>
            <div className="border-r-2 pr-12">
              <h1 className="text-xl md:text-2xl font-bold text-[#5854a8]">
                2000+
              </h1>
              <p className="text-sm md:text-base">HOSPITALS</p>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#5854a8]">
                500+
              </h1>
              <p className="text-sm md:text-base">TREATMENTS</p>
            </div>
          </div>
        </div>

          </div>

          <div className='space-y-6'>
            <div className='flex items-center gap-3'>
            <div className="timeline-middle shadow bg-white w-10 h-10 rounded-full p-2">
      <img src={phone} alt="" />
    </div>
    <div className="timeline-end">Share details for prompt contact.</div>
            </div>
            <div className='flex items-center gap-3'>
            <div className="timeline-middle shadow bg-white w-10 h-10 rounded-full p-2">
      <img src={customer} alt="" />
    </div>
    <div className="timeline-end">Understand your symptoms thoroughly</div>
            </div>
            <div className='flex items-center gap-3'>
            <div className="timeline-middle shadow bg-white w-10 h-10 rounded-full p-2">
      <img src={doctor} alt="" />
    </div>
    <div className="timeline-end">Swiftly schedule your consultation.</div>
            </div>
          </div>

          </div>

          <div className='flex justify-end border-dotted border-l-2 pl-6'>
          <div className='w-11/12'>
          <Form></Form>
          </div>
          </div>

          </div>





        </div>
      </div>
    </dialog>
  );
};

export default Modal;