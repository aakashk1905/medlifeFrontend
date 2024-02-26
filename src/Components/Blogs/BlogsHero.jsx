import React from 'react';
import roundShape from '../../Assests/rounded-shape.png'
import Form from '../Form';
import { Link } from 'react-router-dom';

const BlogsHero = () => {
    return (
        <div className='bg-[#fcf8ff] px-5 md:px-10 relative'>
                      {/* Breadcumber menu */}
      <div className="text-sm breadcrumbs mt-5">
        <ul>
          <li>
          <Link to={"/"}>Home</Link>
          </li>
          <li>
            Blogs
          </li>
        </ul>
      </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-5 md:gap-10">
      <div className="pt-4 pb-10 z-10 col-span-2">
        {/* Main heading */}
        <h1 className="text-3xl md:text-6xl text-gray-600 font-semibold mb-5">
        Stay Informed with MedLifeEasy's Health Blog.
        </h1>
        {/* Description */}
        <p className="text-gray-500 text-[32px] mb-5">
        Your Source for Expert Insights, Latest Medical <br /> Discoveries, and Wellness Tips.
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

<div className="bg-white p-7 rounded-3xl z-10">
          <div className="hc-head mb-5">Book Free Consultation</div>
          <Form />
        </div>
    </div>
        </div>
    );
};

export default BlogsHero;