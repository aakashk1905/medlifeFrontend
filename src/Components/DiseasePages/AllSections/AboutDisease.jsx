import React from "react";
import herniasurgery from "../../../Assests/herniasurgery.png";
import AppointmentModal from "../../AppointmentModal";

const AboutDisease = ({ content }) => {

  return (
    <div className=" bg-[#ecf7fc] w-full flex justify-center my-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-0 w-[95%] lg:w-4/5">
        {/* Left side details */}
        <div className="py-6  ">
         

        {content?.aboutDisease?.diagnosis?.diagnosisHeader && (
  <h3 className="text-2xl font-bold mb-3 text-gray-600">
    {content.aboutDisease.diagnosis.diagnosisHeader}
  </h3>
)}



{/* {content?.aboutDisease?.diagnosis?.details && content.aboutDisease.diagnosis.details.map((detail, index) => {
  const [title, description] = detail.split(':');
  return (
    <p className="text-sm text-justify mb-2 font-lato font-normal" key={index}>
      <strong>{title}</strong>: {description}
    </p>
  );
})} */}


{content?.aboutDisease?.diagnosis?.diagnosisLists && content.aboutDisease.diagnosis.diagnosisLists.map((diagnosis, index) => {
  const [title, description] = diagnosis.split(':');
  return (
    <p className="text-sm text-justify mb-2 font-lato font-normal" key={index}>
      <strong>{title}</strong>: {description}
    </p>
  );
})}



      {
        content?.aboutDisease?.diagnosis?.diagnosisFooterDetails &&
        <p className="text-sm text-justify mb-2 font-lato font-normal">
            {content?.aboutDisease?.diagnosis?.diagnosisFooterDetails}
          </p>
      }

          <div className="flex flex-col md:flex-row gap-3 w-full mt-4">
          <button className="w-full md:w-1/2 lg:w-full xl:w-[65%] h-12 2xl:h-16 border border-[#00a0aa] rounded-lg text-[#00a0aa]">
            Call now +98 765 432 10
          </button>
         <div className='w-full'>
         <AppointmentModal className="w-full md:w-1/2 lg:w-full xl:w-[65%] h-12 2xl:h-16" text={"Book Your Appointment"}></AppointmentModal>
         </div>
        </div>
        </div>

        {/* Right side image */}
        <div className="flex md:justify-center items-center lg:justify-end">
          <img className="h-1/2" src={herniasurgery} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutDisease;
