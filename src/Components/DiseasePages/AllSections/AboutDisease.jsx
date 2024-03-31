import React from "react";
import herniasurgery from "../../../Assests/herniasurgery.png";
import AppointmentModal from "../../AppointmentModal";

const AboutDisease = ({ content }) => {
  return (
    <div className=" bg-[#ecf7fc] w-full flex justify-center my-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-0 w-[95%] lg:w-[90%]">
        {/* Left side details */}
        <div className="py-6  ">
          {content?.aboutDisease?.diagnosis?.diagnosisHeader && (
            <h3 className="text-[32px] font-bold font-lato mb-3 text-[#17324A]">
              {content.aboutDisease.diagnosis.diagnosisHeader}
            </h3>
          )}

          {content?.aboutDisease?.diagnosis?.diagnosisLists &&
            content.aboutDisease.diagnosis.diagnosisLists.map(
              (diagnosis, index) => {
                const [title, description] = diagnosis.split(":");
                return (
                  <p
                    className="text-sm text-justify mb-2 font-lato font-normal"
                    key={index}
                  >
                    <strong>{title}</strong>: {description}
                  </p>
                );
              }
            )}

          {content?.aboutDisease?.diagnosis?.diagnosisFooterDetails && (
            <p className="text-sm text-justify mb-2 font-lato font-normal">
              {content?.aboutDisease?.diagnosis?.diagnosisFooterDetails}
            </p>
          )}

          <div className="flex flex-col md:flex-row gap-3 w-full mt-4">

            <a href="tel:+9876543210" className="w-full md:w-1/2 lg:w-full xl:w-[65%] h-12 2xl:h-16 border border-[#00a0aa] rounded-lg text-[#00a0aa] flex justify-center items-center">
            Call now +98 765 432 10
          </a>


            <div className="w-full">
              <AppointmentModal
                className="w-full md:w-1/2 lg:w-full xl:w-[65%] h-12 2xl:h-16"
                text={"Book Your Appointment"}
              ></AppointmentModal>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="flex justify-center items-center lg:justify-end">
          <img className="h-1/2" src={herniasurgery} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutDisease;
