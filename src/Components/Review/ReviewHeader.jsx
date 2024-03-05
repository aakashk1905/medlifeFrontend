import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRightToBracket } from "react-icons/fa6";
import useAxiosBaseUrl from "./../../hooks/useBaseUrl";
import { MdError } from "react-icons/md";
import ReactStars from 'react-rating-star-with-type'

const ReviewHeader = () => {
  const axiosBaseUrl = useAxiosBaseUrl();
  const [nameError, setNameError] = useState("");
  const [mobileError, setMobileError] = useState("");
  // const [doctorNameError, setDoctorNameError] = useState("");
  const [cityError, setCityError] = useState("");
  const [diseaseError, setDiseaseError] = useState("");
  const navigate = useNavigate();

  const handleSubmitDetails = (e) => {
    e.preventDefault();
    const name = e.target.patientName.value;
    const mobileNumber = e.target.mobile.value;
    const doctor = e.target.doctorName.value;
    const city = e.target.city.value;
    const disease = e.target.disease.value;

    if (name.length === 0) {
      setNameError("Patient name required!");
      return;
    } else {
      setNameError("");
    }

    if (mobileNumber.length === 0) {
      setMobileError("Mobile number required!");
      return;
    } else {
      setMobileError("");
    }

    // if (doctor.length === 0) {
    //   setDoctorNameError("Doctor's name required!");
    //   return;
    // } else{
    //   setDoctorNameError("")
    // }

    if (city === "Select City / शहर चुनें") {
      setCityError("City required!");
      return;
    } else {
      setCityError("");
    }

    if (disease === "Select Disease / रोग का चयन करें") {
      setDiseaseError("Disease name required!");
      return;
    } else {
      setDiseaseError("");
    }

    const reviewInfo = {
      name,
      mobileNumber,
      doctor,
      city,
      disease,
    };

    localStorage.setItem("reviewInfo", JSON.stringify(reviewInfo));
    if (localStorage.getItem("reviewInfo")) {
      navigate("/writeReview");
    } else {
      console.error("Failed to save info, try again");
    }
  };


  // Data fetch from API

  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    axiosBaseUrl
      .get("/api/v1/reviews")
      .then((res) => res.data)
      .then((data) => setAllReviews(data.review))
      .catch((err) => console.log(err.message));
  }, [axiosBaseUrl]);

  let reviews = allReviews.map(review => review.ratings);
let sum = 0;

for (let i = 0; i < reviews.length; i++) {
    sum += reviews[i];
}

// Calculate the average
let average = sum / reviews.length;

const [star, setStar] = useState(5);

    const onChange=(nextValue)=>{
        setStar(nextValue)
    }

    const roundedAverage = parseFloat(average).toFixed(2);

  return (
    <div className="flex flex-col items-center">
                  {/* Breadcrumbs menu */}
                  <div className="text-sm breadcrumbs w-[95%] lg:w-[90%]">
        <ul>
          <li>
          <Link to={"/"}>Home</Link>
          </li>
          <li>All Reviews</li>
        </ul>
      </div>


      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-10">
          <div className="col-span-2 flex items-center">

            {/* Left side reviews section */}
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-3 col-span-2 mb-8">
              <div className="border-b md:border-b-0 md:border-r pb-2 md:pb-0 border-gray-700">
                <h2 className="text-xl font-semibold text-center mb-4">
                  Total Reviews
                </h2>
                <h2 className="text-2xl font-semibold text-center mb-4">
                  {allReviews.length}
                </h2>
                <p className="text-center">
                  Yearly Progress in Patient Feedback
                </p>
              </div>

              {/* Reviews Card with star icon */}
              <div className="border-b md:border-b-0 md:border-r pb-2 md:pb-0 border-gray-700 flex flex-col gap-4">
                <h2 className="text-xl font-semibold text-center">
                  Average Rating
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-5">
                        <h2 className="text-xl font-semibold">
                          {average.toFixed(2)}
                        </h2>
                  {/* <h2 className="text-xl font-semibold">4.7</h2> */}
                  <div className="">
                  <ReactStars 
    onChange={onChange}
    value={average}  
    edit={true}  
    activeColors={[ "#FFCE00",]} 
    />
                  </div>
                </div>
                <p className="text-center">Average rating this year</p>
              </div>

              {/* Rating counter section */}

              <div className="md:col-span-2">
                {/* 5 star  */}
                <div className="flex items-center gap-4">
                  {/* Left Round circle */}
                  <div className="w-4 h-4 rounded-full bg-[#D9D9D9]"></div>
                  <p>5</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="324"
                    height="8"
                    viewBox="0 0 324 8"
                    fill="none"
                  >
                    <path
                      d="M3 3.72949L321 4.27031"
                      stroke="#00C193"
                      stroke-width="6"
                      stroke-linecap="round"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold">2.0K</h3>
                </div>

                {/* 4 star  */}
                <div className="flex items-center gap-4">
                  {/* Left Round circle */}
                  <div className="w-4 h-4 rounded-full bg-[#D9D9D9]"></div>
                  <p>4</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="260"
                    height="8"
                    viewBox="0 0 260 8"
                    fill="none"
                  >
                    <path
                      d="M3 3.78394L257 4.21591"
                      stroke="#FFB4AA"
                      stroke-width="6"
                      stroke-linecap="round"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold">2.0K</h3>
                </div>

                {/* 3 star  */}
                <div className="flex items-center gap-4">
                  {/* Left Round circle */}
                  <div className="w-4 h-4 rounded-full bg-[#D9D9D9]"></div>
                  <p>3</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="216"
                    height="8"
                    viewBox="0 0 216 8"
                    fill="none"
                  >
                    <path
                      d="M3 3.82153L213 4.17868"
                      stroke="#A6A1FC"
                      stroke-width="6"
                      stroke-linecap="round"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold">2.0K</h3>
                </div>

                {/* 2 star  */}
                <div className="flex items-center gap-4">
                  {/* Left Round circle */}
                  <div className="w-4 h-4 rounded-full bg-[#D9D9D9]"></div>
                  <p>2</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="99"
                    height="8"
                    viewBox="0 0 99 8"
                    fill="none"
                  >
                    <path
                      d="M3 3.86621L96 4.13384"
                      stroke="#2CA9E1"
                      stroke-width="6"
                      stroke-linecap="round"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold">2.0K</h3>
                </div>

                {/* 1 star  */}
                <div className="flex items-center gap-4">
                  {/* Left Round circle */}
                  <div className="w-4 h-4 rounded-full bg-[#D9D9D9]"></div>
                  <p>1</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="8"
                    viewBox="0 0 13 8"
                    fill="none"
                  >
                    <path
                      d="M3 3.86475L10 4.13525"
                      stroke="#C0000C"
                      stroke-width="6"
                      stroke-linecap="round"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold">2.0K</h3>
                </div>
              </div>
            </div>

            {/* <div className="p-3 rounded-md shadow-md grid grid-cols-2 md:grid-cols-4 gap-3 items-center">
              Filter by city dropdown
              <div class="relative inline-block text-left w-full">
                <select class="block appearance-none bg-white border border-gray-300 px-4 py-2 pr-8 focus:outline-none focus:border-teal-700 cursor-pointer w-full rounded-md">
                  <option disabled selected>
                    By City
                  </option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Patna">Patna</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Kolkata"> Kolkata </option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <IoIosArrowDown></IoIosArrowDown>
                </div>
              </div>

              Filter by disease dropdown
              <div class="relative inline-block text-left w-full">
                <select class="block appearance-none bg-white border border-gray-300 px-4 py-2 pr-8 focus:outline-none focus:border-teal-700 cursor-pointer w-full rounded-md">
                  <option disabled selected>
                    By Disease
                  </option>
                  <option value="Mumbai">Hernia</option>
                  <option value="Patna">BAck Pain</option>
                  <option value="Chennai">Weight Loss</option>
                  <option value="Kolkata"> Spine Surgery </option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <IoIosArrowDown></IoIosArrowDown>
                </div>
              </div>

              Filter by rating dropdown
              <div class="relative inline-block text-left w-full">
                <select class="block appearance-none bg-white border border-gray-300 px-4 py-2 pr-8 focus:outline-none focus:border-teal-700 cursor-pointer w-full rounded-md">
                  <option disabled selected>
                    By Rating
                  </option>
                  <option value="Mumbai">5</option>
                  <option value="Patna">4</option>
                  <option value="Chennai">3</option>
                  <option value="Kolkata"> 2 </option>
                  <option value="Kolkata"> 1 </option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <IoIosArrowDown></IoIosArrowDown>
                </div>
              </div>

              <button className="w-full bg-[#00A0AA] px-4 py-2 rounded-md text-white">
                Apply filter
              </button>
            </div> */}
          </div>

          {/* Right side form */}
          <div className="w-full -mt-0 lg:-mt-10 mb-2 md:mb-10 lg:mb-0">
          <form
            onSubmit={handleSubmitDetails}
            className="bg-white shadow-xl mb-7 md:mb-0 border p-6 rounded-3xl flex flex-col items-center gap-3 "
          >
            <h1 className="text-3xl text-center font-semibold">
              Write A Review
            </h1>
            <h2 className="text-[#5854A8] text-xl font-semibold text-center mb-3">
              चिकित्सा उपचार परामर्श के लिए, फॉर्म भरें
            </h2>
            <input
              name="patientName"
              className="bg-white border border-gray-300 px-4 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out w-full h-12 rounded-lg"
              placeholder="Patient Name / रोगी का नाम"
              type="text"
            />
            <input
              name="mobile"
              className="bg-white border border-gray-300 px-4 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out w-full h-12 rounded-lg"
              placeholder="Mobile No. / मोबाइल नंबर"
              type="number"
            />
            <input
              name="doctorName"
              className="bg-white border border-gray-300 px-4 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out w-full h-12 rounded-lg"
              placeholder="Doctor's Name"
              type="text"
            />

            <div class="relative inline-block text-left w-full">
              <select
                name="city"
                className="bg-white border border-gray-300 px-4 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out w-full h-12 rounded-lg appearance-none"
              >
                <option disabled selected>
                  Select City / शहर चुनें
                </option>
                <option value="Mumbai">Mumbai</option>
                <option value="Patna">Patna</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata"> Kolkata </option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <IoIosArrowDown></IoIosArrowDown>
              </div>
            </div>

            <div class="relative inline-block text-left w-full">
              <select
                name="disease"
                className="bg-white border border-gray-300 px-4 focus:outline-none focus:border-teal-700 transition duration-300 ease-in-out w-full h-12 rounded-lg appearance-none"
              >
                <option disabled selected>
                  Select Disease / रोग का चयन करें
                </option>
                <option value="Hernia">Hernia</option>
                <option value="Cancer">Cancer</option>
                <option value="Blood Pressure">Blood Pressure</option>
                <option value="Diphtheria"> Diphtheria </option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <IoIosArrowDown></IoIosArrowDown>
              </div>
            </div>

            <div className="w-full">
              {nameError ? (
                <p className="bg-rose-600 p-2 rounded-lg text-white flex items-center gap-2">
                  <MdError></MdError> {nameError}
                </p>
              ) : (
                ""
              )}

              {mobileError ? (
                <p className="bg-rose-600 p-2 rounded-lg text-white flex items-center gap-2">
                  <MdError></MdError> {mobileError}
                </p>
              ) : (
                ""
              )}

              {/* {doctorNameError ? (
                <p className="bg-rose-600 p-2 rounded-lg text-white flex items-center gap-2">
                  <MdError></MdError> {doctorNameError}
                </p>
              ) : (
                ""
              )} */}

              {cityError ? (
                <p className="bg-rose-600 p-2 rounded-lg text-white flex items-center gap-2">
                  <MdError></MdError> {cityError}
                </p>
              ) : (
                ""
              )}

              {diseaseError ? (
                <p className="bg-rose-600 p-2 rounded-lg text-white flex items-center gap-2">
                  <MdError></MdError> {diseaseError}
                </p>
              ) : (
                ""
              )}
            </div>
            <button className=" w-full bg-[#00a0aa] px-4 py-5 rounded-xl text-white border border-[#00a0aa] flex items-center gap-2 justify-center">
              Continue
              <FaArrowRightToBracket></FaArrowRightToBracket>
            </button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewHeader;
