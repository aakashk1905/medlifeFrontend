import React from "react";
import Form from "../../Form";
import "../../styles/Hero.css";
import { Link } from "react-router-dom";

const EmergencyServiceHero = () => {
  return (
    <div className="bg-[#FCF8FF] px-5 lg:px-9 py-2">
             {/* Breadcrumbs menu */}
             <div className="text-sm breadcrumbs mb-2">
        <ul>
          <li>
          <Link className="text-gray-800" to={"/"}>Home</Link>
          </li>
          <li lang="text-gray-800">Emergency services</li>
        </ul>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-10">
      <div className="col-span-2">
        <h1 className="text-5xl font-bold text-gray-600 mb-5">
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
      <div className="mt-7 lg:-mt-7 flex md:justify-center lg:justify-end">
          <Form header={"Book Free Consultation"} />
          </div>
    </div>
    </div>
  );
};

export default EmergencyServiceHero;
