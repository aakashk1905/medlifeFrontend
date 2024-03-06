import React from "react";

const DiseaseInfo = ({ content, disease }) => {
  return (
    <div className="py-12 w-full flex justify-center bg-[#ECF7FC]">
      <div className="w-[85%] md:w-4/5">
        <h1 className="text-2xl text-gray-600 font-semibold mb-4 font-lato">
          What is <span className="capitalize">{disease}</span>?
        </h1>
        <p className="text-justify text-gray-600 leading-7 font-lato">
          {content?.diseaseInfo.para1}
        </p>
        <p className="text-justify  text-gray-600 leading-7 mb-5 font-lato">
          {content?.diseaseInfo.para2}
        </p>
        <p className="text-justify text-gray-600 leading-7 font-lato">
          {content?.diseaseInfo.para3}
        </p>
        <p className="text-justify text-gray-600 leading-7 font-lato">
          {content?.diseaseInfo.para4}
        </p>
      </div>
    </div>
  );
};

export default DiseaseInfo;
