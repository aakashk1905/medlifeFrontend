import React from "react";
import Navbar from "../../Navbar";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Getintouch from "../../Getintouch";
import Officeaddress from "../../Officeaddress";
import Footer from "../../Footer";
import useAxiosBaseUrl from "../../../hooks/useBaseUrl";

const WriteReview = () => {

  const axiosBaseUrl = useAxiosBaseUrl();

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const review = e.target.review.value;
    const date = new Date().toISOString();

    const reviewInfo = { review, date };

    axiosBaseUrl
      .post("/api/v1/reviews", reviewInfo)
      .then((response) => {
        console.log(response.data);

        if (response.data.insertedId) {
          console.log("Review submitted successfully");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
        <Navbar></Navbar>
        {/* Breadcumber menu */}
      <div className="text-sm breadcrumbs px-5 md:px-10 mt-5">
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>Write Reviews</li>
        </ul>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 px-5 md:px-10 py-12">
      <div className="shadow-xl p-3 rounded-md">
        <div className="border-b pb-2 border-gray-700 mb-5 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold text-center mb-4">
          Patient information
          </h2>
          <div>
          <p className='text-md mb-2 text-[#17324A]'>Name: Sujata Singh</p>
                <p className='text-md mb-2 text-[#17324A]'>City: PATNA</p>
                <p className='text-md mb-2 text-[#17324A]'>Disease: HERNIA</p>
          </div>
        </div>


        <div className="border-b pb-2 border-gray-300 mb-5">
          <h2 className="text-lg font-semibold mb-2 ">Enhancing Healthcare Accessibility</h2>
          <p className='text-md mb-2 text-[#17324A]'>Your ratings help us understand how effectively we are making healthcare accessible to you.</p>
        </div>


        <div className="border-b pb-2 border-gray-300 mb-5">
          <h2 className="text-lg font-semibold mb-2 ">Improving the Patient Experience</h2>
          <p className='text-md mb-2 text-[#17324A]'>We value the details of your journey with MedLifeEasy. Your feedback guides us in enhancing the patient experience.</p>
        </div>


        <div className="border-b pb-2 border-gray-300 mb-5">
          <h2 className="text-lg font-semibold mb-2 ">Quality Assurance</h2>
          <p className='text-md mb-2 text-[#17324A]'>Your ratings serve as a quality check for us. They let us know when we're on the right track and when there's room for improvement.</p>
        </div>


        <div className="border-b pb-2 border-gray-300 mb-5">
          <h2 className="text-lg font-semibold mb-2 ">Trust and Transparency</h2>
          <p className='text-md mb-2 text-[#17324A]'>MedLifeEasy is built on trust and transparency. Your honest ratings contribute to a transparent relationship between us.</p>
        </div>
      </div>

      {/* Right side review form */}
      <div className="md:col-span-2 shadow-xl px-10 py-5">
      <div className="border-b border-gray-300 pb-2 mb-5">
          <h2 className="text-2xl font-semibold mb-3">
          Rate your experience with us
          </h2>
          <div className="flex items-center gap-3">
          <FaStar className="text-[#B1B3B3] text-3xl"></FaStar>
          <FaStar className="text-[#B1B3B3] text-3xl"></FaStar>
          <FaStar className="text-[#B1B3B3] text-3xl"></FaStar>
          <FaStar className="text-[#B1B3B3] text-3xl"></FaStar>
          <FaStar className="text-[#B1B3B3] text-3xl"></FaStar>
          </div>
        </div>


      <form onSubmit={handleSubmitReview} className="">
          <h2 className="text-2xl font-semibold mb-5">
          Write your experience with us
          </h2>
          <div className="flex flex-col justify-center items-center gap-5">
            <textarea className="border border-gray-400 rounded-md w-full outline-none p-3 focus:border-teal-700" name="review" id="" cols="30" rows="10"></textarea>
            <button className="w-80 bg-[#00A0AA] px-4 py-2 rounded-md text-white mb-20">
            Submit
          </button>
          </div>
        </form>
      </div>
      </div>

      <Getintouch></Getintouch>
      <Officeaddress></Officeaddress>
      <Footer></Footer>
    </div>
  );
};

export default WriteReview;
