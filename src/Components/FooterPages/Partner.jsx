import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import handshake from "../../Assests/handshake-businessmen 1.png";
import { IoIosArrowDown } from "react-icons/io";
import Form from "../Form";
import { Helmet } from "react-helmet-async";

const Partner = () => {
  return (
    <div>
      <Helmet>
        <title>Medlife Easy | Our Partner</title>
      </Helmet>
      <div>
        <Navbar></Navbar>
        {/* Breadcumber menu */}
        <div className="text-sm breadcrumbs px-5 md:px-10 mt-5">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Partner With Us</li>
          </ul>
        </div>

        <div className="px-10">
          <h1 className="text-4xl font-medium text-gray-700 text-center mb-3">
            Partner With Us
          </h1>
          <div className="bg-[#E3E3E3] w-full h-0.5 mb-8"></div>

          <h1 className="text-2xl font-medium text-gray-700 text-center mb-3">
            Looking for Partnership with MEDLIFEEASY?
          </h1>
          <p className="text-gray-600 mb-6 text-justify">
            MedLifeEasy private limited is a leading company as an online
            healthcare service provider. We enable our user to book treatments,
            choose doctors, hospitals & wellness centers. We also have
            empanelled with various hospitals, clinics, wellness center,
            diagnostic center & labs. To give your business a boost.
          </p>
        </div>

        <div className="px-10 py-10">
          <div className="shadow-lg rounded-l-none md:rounded-l-lg grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <img
              className="h-full rounded-tr-lg lg:rounded-tr-none"
              src={handshake}
              alt=""
            />

            {/* Form */}
            {/* <div className="bg-[#00A79D] px-5 md:px-16 py-5 flex justify-center items-center rounded-b-lg lg:rounded-b-none lg:rounded-r-lg">
                <div className="w-full">
                <h2 className="text-2xl font-bold mb-4 text-white">Join our partner program now!</h2>

    <div className="mb-3">
        <p className="text-white font-semibold mb-2">Name</p>
        <input
  type="text"
  className="bg-white p-3 rounded-lg focus:outline-none w-full"
  placeholder="Enter Name"
/>
    </div>
    <div className="mb-3">
        <p className="text-white font-semibold mb-2">Email</p>
        <input
  type="email"
  className="bg-white p-3 rounded-lg focus:outline-none w-full"
  placeholder="Enter Your Email"
/>
    </div>

    <div className="mb-3">
        <p className="text-white font-semibold mb-2">Phone</p>
        <input
  type="number"
  className="bg-white p-2 rounded-lg focus:outline-none w-full"
  placeholder="Enter Your Phone Number"
/>
    </div>



    <div className="mb-3">
        <p className="text-white font-semibold mb-2">Organization Name</p>
        <input
  type="number"
  className="bg-white p-3 rounded-lg focus:outline-none w-full"
  placeholder="Write  Your Organization Name Here"
/>
    </div>


    <div className="mb-3">
        <p className="text-white font-semibold mb-2">Organization Type</p>
        <div class="relative inline-block text-left w-full">
  <select class="block appearance-none bg-white border border-gray-300 px-4 py-2 pr-8 focus:outline-none focus:border-teal-700 cursor-pointer w-full rounded-md">
  <option disabled selected>Seclct Your Organization Type</option>
  <option value="Mumbai">Type 1</option>
  <option value="Patna">Type 2</option>
  <option value="Chennai">Type 3</option>
  <option value="Kolkata"> Type 4 </option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <IoIosArrowDown></IoIosArrowDown>
  </div>
</div>
    </div>


    <div className="mb-5">
        <p className="text-white font-semibold mb-2">Organization Profession</p>
        <div class="relative inline-block text-left w-full">
  <select class="block appearance-none bg-white border border-gray-300 px-4 py-2 pr-8 focus:outline-none focus:border-teal-700 cursor-pointer w-full rounded-md">
  <option disabled selected>Seclct Your Organization Profession</option>
  <option value="Mumbai">Type 1</option>
  <option value="Patna">Type 2</option>
  <option value="Chennai">Type 3</option>
  <option value="Kolkata"> Type 4 </option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <IoIosArrowDown></IoIosArrowDown>
  </div>
</div>
    </div>
   

    <div className='flex justify-center'>
    <button className="bg-gray-800 text-white p-3 rounded-3xl w-80">Submit</button>
    </div>
                </div>
            
            </div> */}
            <div className="flex justify-end">
            <div className="bg-white shadow-lg p-5 rounded-b-lg lg:rounded-r-lg lg:rounded-b-none w-11/12">
              <div className="hc-head mb-5">Book Free Consultation</div>
              <Form />
            </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Partner;
