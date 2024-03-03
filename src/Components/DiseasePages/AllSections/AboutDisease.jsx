import React from "react";
import herniasurgery from "../../../Assests/herniasurgery.png";
import AppointmentModal from "../../AppointmentModal";

const AboutDisease = ({ content }) => {
  const appointmentModalProps = {
    fontWeight: "normal",
    fontSize: "base",
    text: "Book Your Appointment",
    minWidth: "280px",
    width: "100%",
    height: "64px",
    backgroundColor: "#00a0aa",
    color: "#fff",
    borderRadius: "8px",
  };
  return (
    <div className=" bg-[#ecf7fc] w-full flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-0 w-[95%] lg:w-4/5">
        {/* Left side details */}
        <div className="py-6  ">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            {content?.aboutDisease?.diseaseHeader}
          </h1>
          <p className="mb-4 text-gray-800">{content?.aboutDisease?.details}</p>
          <h1 className="text-xl font-semibold mb-2 text-gray-800">
            {content?.aboutDisease?.symptoms?.symptomHeader}
          </h1>
          <ul className="list-disc px-5 mb-5">
            {content?.aboutDisease?.symptoms?.symptomsList?.map(
              (symptoms, idx) => (
                <li className=" text-gray-800" key={idx}>
                  {symptoms}
                </li>
              )
            )}
          </ul>

          <h3 className="text-xl font-semibold text-gray-800">
            {content?.aboutDisease?.diagnosis?.diagnosisHeader}
          </h3>
          <p className="mb-5 text-gray-800">
            {content?.aboutDisease?.diagnosis?.details}
          </p>

          <div className="flex flex-col md:flex-row items-center gap-3 w-full">
            <button className="w-full md:w-[350px] h-[64px] border border-[#00a0aa] rounded-md text-[#00a0aa]">
              Call now +98 765 432 10
            </button>
            <AppointmentModal {...appointmentModalProps}></AppointmentModal>
          </div>
        </div>

        {/* Right side image */}
        <div className="flex justify-end">
          <img src={herniasurgery} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutDisease;
