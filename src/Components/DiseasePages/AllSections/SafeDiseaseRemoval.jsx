import React from "react";
import { MdOutlineDone } from "react-icons/md";

const SafeDiseaseRemoval = ({ content }) => {
  return (
    <div className="py-10">
    <div className="py-10 bg-[#f6fcff] w-full flex justify-center mb-5">
      <div className="w-[85%] md:w-4/5">
        <h1 className="text-2xl text-start md:text-center font-semibold mb-9 text-gray-600 font-lato">
          {content ? content?.treatment.treatmentHeader[0] : ""}{" "}
          <span className="text-teal-600">
            {content?.treatment.treatmentHeader[1]}
          </span>
        </h1>

        {/* Bullet points (Tick icons) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {content?.treatment.treatments.length > 0
            ? content?.treatment.treatments.map((treatment, idx) => (
                <div key={idx} className="flex gap-2 ">
                  <div className="bg-[#2ca9e1] p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
                    <MdOutlineDone></MdOutlineDone>
                  </div>
                  <p className="font-semibold text-gray-800 font-lato">{treatment}</p>
                </div>
              ))
            : "No content here"}
        </div>
      </div>
    </div>
    </div>
  );
};

export default SafeDiseaseRemoval;
