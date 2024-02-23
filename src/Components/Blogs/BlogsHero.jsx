import React from 'react';
import roundShape from '../../Assests/rounded-shape.png'

const BlogsHero = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 bg-[#fcf8ff] px-5 md:px-10 relative">
      <div className="pt-4 pb-10 z-10">
        {/* Main heading */}
        <h1 className="text-3xl md:text-5xl text-gray-600 font-semibold mb-5">
        Stay Informed with MedLifeEasy's Health Blog.
        </h1>
        {/* Description */}
        <p className="text-gray-500 text-xl mb-5">
        Your Source for Expert Insights, Latest Medical Discoveries, and Wellness Tips.
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

      {/* Right side image and bottom card */}
      <div className="relative">
        {/* hero image */}
        
      </div>
    </div>
    );
};

export default BlogsHero;