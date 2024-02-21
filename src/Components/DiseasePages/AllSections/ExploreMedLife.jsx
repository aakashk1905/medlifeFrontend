import React from "react";

const ExploreMedLife = ({content}) => {
  return (
    <div className="bg-[#ecf7fc] px-5 md:px-10 py-10 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-0">
      {/* Left side details */}
      <div className="col-span-2">
        <h1 className="text-2xl font-bold mb-8 text-gray-600">
          {content.SurgeryForm.surgeryHeader[0]} {" "}
          <span className="text-teal-600">{content.SurgeryForm.surgeryHeader[1]}</span>
        </h1>

        <h3 className="text-2xl font-semibold">
        {content.SurgeryForm.subHeader}
        </h3>
        <p className="text-sm">{content.SurgeryForm.typeHeader}: {content.SurgeryForm.type} </p>
        <p className="text-sm">{content.SurgeryForm.timeHeader}: {content.SurgeryForm.time} </p>
        <p className="text-sm mb-5">
        {content.SurgeryForm.costHeader}: {content.SurgeryForm.cost}
        </p>

        <h2 className="text-xl font-semibold mb-5">
        {content.SurgeryForm.footerTitle}
        </h2>

        <button className="w-full lg:w-2/3 border border-[#00a0aa] px-4 py-3 rounded-md text-[#00a0aa]">
          Call now +98 765 432 10
        </button>
      </div>

      {/* Right side form */}
      <div className="bg-white p-3 rounded flex flex-col gap-3">
        <h1 className="text-xl mb-3 text-center font-semibold">
        {content.SurgeryForm.formTitle}
        </h1>
        <input
          className="p-3 rounded-md border border-gray-400 outline-none"
          placeholder="Patient Name"
          type="text"
        />
        <input
          className="p-3 rounded-md border border-gray-400 outline-none"
          placeholder="Mobile Number"
          type="text"
        />
        <select
          name="priority"
          className="p-3 rounded-md border border-gray-400 outline-none"
        >
          <option disabled selected>
            Select
          </option>
          <option value="low">Mumbai</option>
          <option value="moderate">Patna</option>
          <option value="high">Chennai</option>
          <option value="most important"> Kolkata </option>
        </select>
        <button className="w-full bg-[#00a0aa] px-4 py-3 rounded-md text-white border border-[#00a0aa]">
          Get Cost Estimate
        </button>
      </div>
    </div>
  );
};

export default ExploreMedLife;
