import React from "react";
import Form from "../../Form";
import "../../styles/Hero.css";
import { Link } from "react-router-dom";

const EmergencyServiceHero = () => {
  return (
    <div className="bg-[#FCF8FF] px-10 py-5">
             {/* Breadcumber menu */}
             <div className="text-sm breadcrumbs mb-2">
        <ul>
          <li>
          <Link to={"/"}>Home</Link>
          </li>
          <li>Emergency services</li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
      <div className="col-span-2">
        <h1 className="text-5xl font-bold text-[#2CA9E1] mb-5">
          Welcome to Med Life Emergency Services
        </h1>
        <p className="text-3xl text-gray-500 mb-10">
          We are committed to providing prompt and quality care during medical
          emergencies.
        </p>

        <p className="text-3xl text-gray-500 mb-6">
          For immediate assistance, call our Emergency Helpline:
        </p>
        <button className="w-full md:w-[350px] h-[64px] border border-[#00a0aa] rounded-lg text-[#00a0aa]">
          Call now +98 765 432 10
        </button>
      </div>
      <div className="bg-white p-7 rounded-3xl">
          <div className="hc-head mb-5">Book Free Consultation</div>
          <Form />
        </div>
    </div>
    </div>
  );
};

export default EmergencyServiceHero;
