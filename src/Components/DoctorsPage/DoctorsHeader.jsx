import React from "react";
import Form from "../Form";
import { Link } from "react-router-dom";

const DoctorsHeader = () => {
  return (
    <div className="bg-[#fcf8ff] px-5 lg:px-10 mt-2 mb-10">
      {/* Breadcumber menu */}
      <div className="text-sm breadcrumbs ">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link>Doctors</Link>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-5 items-center">
        <div className="col-span-2">
          <h1 className="text-3xl md:text-6xl font-bold text-blue-500 mb-8">
            Consult with Top Rated <br /> Experienced Doctors Online!
          </h1>

          <h3 className="text-[#17324A] text-2xl md:text-4xl font-semibold mb-8">
            Get Free Quotation on Your <br /> Planned Surgery
          </h3>

          <button className="w-full md:w-[350px] h-[64px] border border-[#00a0aa] rounded-lg text-[#00a0aa]">
            Call now +98 765 432 10
          </button>
        </div>

          <div className="mt-5 lg:-mt-6">
          <Form header={"Book Free Consultation"} />
          </div>
      </div>
    </div>
  );
};

export default DoctorsHeader;
