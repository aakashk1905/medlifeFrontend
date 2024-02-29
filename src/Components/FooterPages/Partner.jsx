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
        {/* Breadcrumbs menu */}
        <div className="text-sm breadcrumbs px-5 md:px-10 mt-5">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Partner With Us</li>
          </ul>
        </div>

        <div className="px-10">
          <h1 className="text-4xl font-medium text-gray-700 text-center mt-5 lg:mt-0 mb-4">
            Partner With Us
          </h1>
          <div className="bg-[#E3E3E3] w-full h-0.5 mb-8"></div>

          <h1 className="text-2xl font-medium text-gray-700 text-center mb-3">
            Looking for Partnership with MEDLIFEEASY?
          </h1>
          <p className="text-gray-600 mb-6 text-center">
          MedLifeEasy private limited is a leading company as an online healthcare service provider. We enable our user to book treatments, choose doctors, hospitals & wellness centers. We also have empanelled with various hospitals, clinics, wellness center, diagnostic center & labs. To give your business a boost.
          </p>
        </div>

        <div className="flex justify-center mb-10">
        <div className="w-full lg:w-1/2">
          <Form header={"Book Free Consultation"} />
        </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Partner;
