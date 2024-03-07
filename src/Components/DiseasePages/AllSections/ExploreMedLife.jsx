import React from "react";
import Form from "../../Form";

const ExploreMedLife = ({content}) => {
  return (
   <div className="bg-[#ecf7fc] flex flex-col items-center">
     <div className="w-[95%] lg:w-4/5 grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-7 items-center py-2">
      {/* Left side details */}
      <div className="col-span-2">
        <h1 className="text-2xl font-bold mb-3 text-gray-600">
          {content?.SurgeryForm?.surgeryHeader[0]} {" "}
          <span className="text-teal-600">{content.SurgeryForm.surgeryHeader[1]}</span>
        </h1>

        <p className="text-sm mb-5 text-gray-800 font-lato text-justify">
        {content?.SurgeryForm?.surgerydetails}: {content?.SurgeryForm?.surgerydetails}
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-1">
        {content?.SurgeryForm?.subHeader}
        </h3>
        <p className="text-sm text-gray-800"><span className="font-semibold">{content?.SurgeryForm?.typeHeader}</span> - {content?.SurgeryForm?.type} </p>

        <p className="text-sm text-gray-800"><span className="font-semibold">{content?.SurgeryForm?.surgeryNameHeader}</span> - {content?.SurgeryForm?.surgeryName} </p>

        <p className="text-sm text-gray-800"><span className="font-semibold">{content?.SurgeryForm?.timeHeader}</span> - {content?.SurgeryForm?.time} </p>

        <p className="text-sm mb-5 text-gray-800">
        <span className="font-semibold">{content?.SurgeryForm?.costHeader}</span >- {content?.SurgeryForm?.cost}
        </p>

        <h2 className="text-xl font-semibold mb-5 text-gray-800">
        {content?.SurgeryForm?.footerTitle}
        </h2>

        <button className="w-full md:w-[350px] h-[64px] border border-[#00a0aa] rounded-lg text-[#00a0aa]">
          Call now +98 765 432 10
        </button>
      </div>


     <div className="w-full flex justify-center mt-4 lg:mt-0">
          <Form header={"Book Free Consultation"} />
        </div>
    </div>
   </div>
  );
};

export default ExploreMedLife;
