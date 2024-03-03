import React from "react";
import roundShape from "../../Assests/rounded-shape.png";
import Form from "../Form";
import { Link } from "react-router-dom";

const BlogsHero = () => {
  return (
    <div className="bg-[#fcf8ff] px-5 lg:px-9 py-2 relative flex justify-center items-center flex-col">
      {/* Breadcrumbs menu */}
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>Blogs</li>
        </ul>
      </div>
      {/* <div className="grid grid-cols-1 lg:grid-cols-5 max-w-[83vw] mx-auto lg:gap-10"> */}
      <div className="flex w-[83vw] justify-center items-center">
        <div className="pt-4 pb-10 z-10 w-[60%]">
          {/* Main heading */}
          <h1
            className=" col-span-3 text-gray-600 font-semibold mb-[36px]"
            style={{ fontSize: "clamp(48px,4vw ,72px)" }}
          >
            Stay Informed with
            <br /> MedLifeEasy's Health Blog.
          </h1>
          {/* Description */}
          <p
            className="text-gray-500 mb-[54px]"
            style={{ fontSize: "clamp(24px,2vw ,32px)" }}
          >
            Your Source for Expert Insights, Latest Medical <br /> Discoveries,
            and Wellness Tips.
          </p>

          <button className="w-full md:w-[350px] h-[64px] border border-[#00a0aa] rounded-lg text-[#00a0aa]">
            Call now +98 765 432 10
          </button>
        </div>

        <img
          className="hidden lg:flex absolute bottom-0 left-[600px] w-[350px]"
          src={roundShape}
          alt=""
        />

        <div className="z-10 -mt-6 w-[40%] flex md:justify-center lg:justify-center">
          <Form header={"Book Free Consultation"} />
        </div>
      </div>
    </div>
  );
};

export default BlogsHero;
