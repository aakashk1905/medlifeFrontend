import React from "react";
import { MdOutlineDone } from "react-icons/md";

const SafeDiseaseRemoval = ({content}) => {
  return (
    <div className="py-10">
      <div className="p-4 bg-[#f6fcff]">
        <h1 className="text-2xl text-start md:text-center font-semibold mb-9 text-gray-600">
          {content ? content.treatment.treatmentHeader[0] : ""} {" "}
          <span className="text-teal-600">{content.treatment.treatmentHeader[1]}</span>
        </h1>

        {/* Bullet points (Tick icons) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-5 md:px-20">
          {
            content.treatment.treatments.length > 0 ?
            content.treatment.treatments.map((treatment, idx) => 
              <div key={idx} className="flex items-center gap-2">
            <div className="bg-[#2ca9e1] p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p className="font-semibold">{treatment}</p>
          </div>
              )
              :
              "No content here"
          }
        </div>
      </div>
    </div>
  );
};

export default SafeDiseaseRemoval;
