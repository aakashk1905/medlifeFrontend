import React from "react";
import Form from "../../Form";
import "../../styles/Hero.css";
import { Link } from "react-router-dom";

const EmergencyServiceHero = () => {
  return (
    <div className="bg-[#FCF8FF] flex flex-col items-center">
      {/* Breadcrumbs menu */}
      <div className="text-sm breadcrumbs w-[95%] lg:w-[89.5%]">
        <ul>
          <li>
            <Link className="text-gray-800" to={"/"}>
              Home
            </Link>
          </li>
          <li lang="text-gray-800">Emergency services</li>
        </ul>
      </div>

      <div className="flex flex-col lg:flex-row w-[99%] lg:w-4/5 justify-center items-center">
        <div className="flex flex-col gap-4 w-[95%] lg:w-[55%] xl:w-[60%]">
          <h1 className="text-[28px] md:text-5xl lg:text-[clamp(28px, 3vw, 64px)] font-bold text-gray-600">
            Welcome to Med Life Emergency Services
          </h1>
          <p className="text-gray-500  w-[75%] lg:text-[clamp(18px,1.5vw,28px)]">
            We are committed to providing prompt and quality care during medical
            emergencies.
          </p>

          <p className="text-gray-500  w-[75%] lg:text-[clamp(18px,1.5vw,28px)]">
            For immediate assistance, call our Emergency Helpline:
          </p>
          <button className="w-full md:w-[350px] h-[64px] border border-[#00a0aa] rounded-lg text-[#00a0aa]">
            Call now +98 765 432 10
          </button>
        </div>

        {/* Right side form */}
        <div className="w-[95%] lg:w-[45%] xl:w-[40%] flex justify-center mt-6 lg:-mt-6 box-border ">
          <div className=" w-full flex justify-center max-w-[550px] ">
            <Form header={"Book Free Consultation"} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default EmergencyServiceHero;
