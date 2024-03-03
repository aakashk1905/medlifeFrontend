import React from "react";
import heroDoc from "../Assests/heroDoc.png";
import Form from "./Form";

const Hero = () => {
  return (
    <div className="mb-10 pt-5 bg-[#fcf8ff] w-full flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-0 lg:gap-5 w-[95%] md:w-[80vw]">
        <div className="relative mt-3 flex justify-center flex-col items-center  gap-[20px]">
          <h1 className="text-[28px] md:text-5xl lg:text-[clamp(28px,3vw,64px)] font-bold text-[#2ca9e1]  text-center lg:text-start">
            Welcome to Med Life Easy
          </h1>
          <h2 className="text-gray-500 text-xl md:text-3xl lg:text-[clamp(18px,1.8vw,36px)] font-semibold text-center lg:text-start">
            Your Path to Health and Happiness
          </h2>
          <div className="flex lg:justify-start w-[100%] justify-center">
            <img className="w-[95%]" src={heroDoc} alt="" />
            <div className="w-[95%] absolute bottom-0">
              <div className="bg-[#FCFCFF] shadow py-3 px-6 flex justify-evenly items-center rounded-xl w-full">
                <div className="">
                  <h1 className="text-xl md:text-2xl font-bold text-[#5854a8]">
                    1000+
                  </h1>
                  <p className="text-xs md:text-base">DOCTORS</p>
                </div>
                <div className="w-[1px] h-[35px] bg-[rgb(166,173,187)]"></div>
                <div className=" pl-2 md:pl-0">
                  <h1 className="text-xl md:text-2xl font-bold text-[#5854a8]">
                    2000+
                  </h1>
                  <p className="text-xs md:text-base">HOSPITALS</p>
                </div>
                <div className="w-[1px] h-[35px] bg-[rgb(166,173,187)]"></div>
                <div className="pl-2 md:pl-0">
                  <h1 className="text-xl md:text-2xl font-bold text-[#5854a8]">
                    500+
                  </h1>
                  <p className="text-xs md:text-base">TREATMENTS</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-5 flex justify-center">
          <Form header={"Book Free Consultation"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
