import React from "react";
import Form from "../../Form";

const ExploreMedLife = ({content}) => {
  return (
    <div className="bg-[#ecf7fc] px-5 md:px-10 py-10 grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-5 items-center">
      {/* Left side details */}
      <div className="col-span-2">
        <h1 className="text-2xl font-bold mb-8 text-gray-600">
          {content?.SurgeryForm?.surgeryHeader[0]} {" "}
          <span className="text-teal-600">{content.SurgeryForm.surgeryHeader[1]}</span>
        </h1>

        <h3 className="text-2xl font-semibold text-gray-800">
        {content?.SurgeryForm?.subHeader}
        </h3>
        <p className="text-sm">{content?.SurgeryForm?.typeHeader}: {content?.SurgeryForm?.type} </p>
        <p className="text-sm">{content?.SurgeryForm?.timeHeader}: {content?.SurgeryForm?.time} </p>
        <p className="text-sm mb-5">
        {content?.SurgeryForm?.costHeader}: {content?.SurgeryForm?.cost}
        </p>

        <h2 className="text-xl font-semibold mb-5">
        {content?.SurgeryForm?.footerTitle}
        </h2>

        <button className="w-full md:w-[350px] h-[64px] border border-[#00a0aa] rounded-lg text-[#00a0aa]">
          Call now +98 765 432 10
        </button>
      </div>

      {/* Right side form */}
      {/* <div className="bg-white p-3 rounded flex flex-col gap-3">
        <h1 className="text-xl mb-3 text-center font-semibold">
        {content?.SurgeryForm?.formTitle}
        </h1>
        <input
          className="p-3 rounded-md border border-gray-400 outline-none bg-white"
          placeholder="Patient Name"
          type="text"
        />
        <input
          className="p-3 rounded-md border border-gray-400 outline-none bg-white"
          placeholder="Mobile Number"
          type="text"
        />
        <select
          name="priority"
          className="p-3 rounded-md border border-gray-400 outline-none bg-white"
        >
          <option disabled selected>
            Select
          </option>
          <option value="low">Mumbai</option>
          <option value="moderate">Patna</option>
          <option value="high">Chennai</option>
          <option value="most important"> Kolkata </option>
        </select>
        <button className="w-full bg-[#00a0aa] px-4 py-3 rounded-lg text-white border border-[#00a0aa]">
          Get Cost Estimate
        </button>
      </div> */}
     <div className="w-full mt-8 lg:mt-0">
          <Form header={"Book Free Consultation"} />
        </div>
    </div>
  );
};

export default ExploreMedLife;
