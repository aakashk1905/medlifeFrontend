import React from "react";
import kidney from "../../Assests/kidney.png";

const OurBlogs = () => {
  return (
    <div className="py-10 px-5">
      <div>
        {/* Headline */}
        <h1 className="text-gray-700 text-4xl font-semibold text-center mb-10">
          Our Recent Blogs
        </h1>

        {/* Blogs card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <div className="shadow-lg rounded-lg">
            <img className="w-full mb-3 rounded-t-lg" src={kidney} alt="" />
            <div className="px-4 pb-4">
            <h1 className="text-[#17324A] text-2xl font-semibold mb-1">
              Understanding Hernia and Finding Top Doctors in Bihar for
              Effective Treatment
            </h1>
            <p className="text-gray-500 mb-2">
              Your dedication to providing healthcare services in Bihar is
              commendable. Your tireless efforts play a crucial role in
              enhancing the well-being of the community. Amidst diverse
              healthcare challenges, your commitment to delivering quality
              medical care is{" "}
            </p>
            <button className="bg-gray-300 rounded-lg p-3 font-semibold text-purple-800">
              Read More
            </button>
            </div>
          </div>
          <div className="shadow-lg rounded-lg">
            <img className="w-full mb-3 rounded-t-lg" src={kidney} alt="" />
            <div className="px-4 pb-4">
            <h1 className="text-[#17324A] text-2xl font-semibold mb-1">
              Understanding Hernia and Finding Top Doctors in Bihar for
              Effective Treatment
            </h1>
            <p className="text-gray-500 mb-2">
              Your dedication to providing healthcare services in Bihar is
              commendable. Your tireless efforts play a crucial role in
              enhancing the well-being of the community. Amidst diverse
              healthcare challenges, your commitment to delivering quality
              medical care is{" "}
            </p>
            <button className="bg-gray-300 rounded-lg p-3 font-semibold text-purple-800">
              Read More
            </button>
            </div>
          </div>
          <div className="shadow-lg rounded-lg">
            <img className="w-full mb-3 rounded-t-lg" src={kidney} alt="" />
            <div className="px-4 pb-4">
            <h1 className="text-[#17324A] text-2xl font-semibold mb-1">
              Understanding Hernia and Finding Top Doctors in Bihar for
              Effective Treatment
            </h1>
            <p className="text-gray-500 mb-2">
              Your dedication to providing healthcare services in Bihar is
              commendable. Your tireless efforts play a crucial role in
              enhancing the well-being of the community. Amidst diverse
              healthcare challenges, your commitment to delivering quality
              medical care is{" "}
            </p>
            <button className="bg-gray-300 rounded-lg p-3 font-semibold text-purple-800">
              Read More
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;
