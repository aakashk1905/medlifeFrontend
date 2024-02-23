import React from 'react';
import Navbar from '../../Navbar';
import Form from '../../Form';
import { BiMessageDetail } from 'react-icons/bi';
import { MdOutlineDone } from 'react-icons/md';
import PatientReview from './PatientReview';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import Rectangle from "../.././../Assests/Rectangle 19194.png"

const DoctorsDetails = () => {
    return (
        <div>
            <Navbar></Navbar>

             {/* Breadcumber menu */}
      <div className="text-sm breadcrumbs px-5 md:px-10 mt-5">
        <ul>
          <li>
          <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link>Laparoscopy</Link>
          </li>
          <li className="capitalize">Dr.Sahajana Prasad</li>
        </ul>
      </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-0 md:px-10 py-5 md:py-10'>
                <div className='col-span-2  rounded-lg borde'>

                <div className='shadow-lg p-5'>
                <div className="border-b border-gray-400 pb-5">
            <div className="grid grid-cols-3 gap-2 md:gap-0">
              <img
                className="w-full md:w-full lg:w-[210px] h-[250px] rounded-lg border-teal-500"
                src={Rectangle}
                alt=""
              />

              <div className="col-span-2">
                <div className="border-b border-gray-400 pb-2 mb-3">
                  <h1 className="text-[#17324A] text-xl md:text-2xl font-semibold mb-1">
                    Dr. Sahajanad Prasad
                  </h1>
                  <p className="text-[#17324A] text-sm md:text-base">
                    {" "}
                    MBBS, MS-{" "}
                    <span className="text-teal-500">General sergery</span>
                  </p>
                </div>
                
                <div className="flex gap-5 md:gap-16 items-center mb-2">
                  <h2 className="text-sm md:text-lg font-bold text-gray-800 flex items-center gap-2">
                    {" "}
                    <BiMessageDetail></BiMessageDetail> 13yr+
                  </h2>

                  <h2 className="text-sm md:text-lg font-bold text-gray-800 flex items-center gap-2">
                    {" "}
                    <BiMessageDetail></BiMessageDetail> 2K
                  </h2>

                  <h2 className="text-sm md:text-lg font-bold text-gray-800 flex items-center gap-2">
                    {" "}
                    <BiMessageDetail></BiMessageDetail> Patna
                  </h2>
                </div>

                <h3 className="text-[#17324A] text-xl font-semibold mb-2">
                  Specialization
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 items-center mb-4 w-5/6">
                  <div className="bg-teal-100 border border-teal-500 p-1 rounded-md">
                    <p className="text-xs md:text-lg">General surgeon</p>
                  </div>
                  <div className="bg-teal-100 border border-teal-500 p-1 rounded-md ">
                    <p className="text-xs md:text-lg">General surgeon</p>
                  </div>
                  <div className="bg-teal-100 border border-teal-500 p-1 rounded-md ">
                    <p className="text-xs md:text-lg">General surgeon</p>
                  </div>
                </div>

                <button className="w-full md:w-[350px] h-[50px] border border-[#00a0aa] rounded-lg text-[#00a0aa] ">
                Call now +98 765 432 10
              </button>

              </div>
            </div>
          </div>


          {/* Details */}


          {/* About doctor section */}
          <div className='border-b border-gray-400 pb-3 mb-4 mt-3'>
          <h1 className='text-2xl font-bold text-gray-600 mb-2'>About Dr.Sahajana Prasad</h1>
          <p className='text-gray-400'>Dr. Harshvardhan in Patna is one of the leading businesses in the Nephrologists. Also known for Nephrologists, Kidney Transplant Doctors and much more.</p>
          </div>

          {/* Expertise section */}
          <div className='border-b border-gray-400 pb-3 mb-4'>
          <h1 className='text-2xl font-bold text-gray-600 mb-2'>Expertise:</h1>
          {/* Bullet points using tick */}
          
          <div className="flex items-center gap-2 mb-2">
            <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p className="font-semibold">Renal Biopsy</p>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p className="font-semibold">IIV Catheterization</p>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p className="font-semibold">Various Kidney diseases – related to systemic disorders</p>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p className="font-semibold">Diabetic Nephropathy & Hypertension</p>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p className="font-semibold">Kidney disease with liver disorder & cardiac disease</p>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p className="font-semibold">Haemodialysis</p>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p className="font-semibold">Kidney Transplant</p>
          </div>
          </div>

          {/* Professional Membership section */}
          <div className=''>
          <h1 className='text-2xl font-bold text-gray-600 mb-2'>Professional Membership:</h1>
          {/* Bullet points using tick */}
          
          <div className="flex items-center gap-2 mb-2">
            <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p className="font-semibold">ISN membership</p>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p className="font-semibold">Member of API</p>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p className="font-semibold">Indian Society of Organ Transplantation</p>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p className="font-semibold">International society of nephrology</p>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p className="font-semibold">American society of Nephrology</p>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <div className="border border-green-500 p-1 w-5 h-5 rounded-full flex justify-center items-center text-green-500">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p className="font-semibold">Peritoneal Dialysis Society of India</p>
          </div>
          </div>
                </div>

                <div className='shadow-lg p-5'>
                  <h1 className='text-2xl font-bold text-gray-600 mb-2'>Patients Reviews</h1>
                  <PatientReview></PatientReview>
                  <PatientReview></PatientReview>
                  <PatientReview></PatientReview>
                  <PatientReview></PatientReview>
                  <PatientReview></PatientReview>
                  <PatientReview></PatientReview>
                </div>
                </div>

               <div className='px-5 md:px-0'>
               <Form></Form>
               </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DoctorsDetails;