import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRightToBracket } from "react-icons/fa6";
import useAxiosBaseUrl from "./../../hooks/useBaseUrl";
import { MdError } from "react-icons/md";
import ReactStars from "react-rating-star-with-type";
import ProgressBar from "@ramonak/react-progress-bar";

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

  const totalReviews = allReviews.length;
  const fiveStarReviews = allReviews.filter((review) => review.ratings === 5);
  const numberOfFiveStarReviews = fiveStarReviews.length;
  const percentageOfFiveStarReviews = `${(
    (numberOfFiveStarReviews / totalReviews) *
    100
  ).toFixed(2)}%`;

  const fourStarReviews = allReviews.filter((review) => review.ratings === 4);
  const numberOfFourStarReviews = fourStarReviews.length;
  const percentageOfFourStarReviews =
    (numberOfFourStarReviews / totalReviews) * 100;

  const threeStarReviews = allReviews.filter((review) => review.ratings === 3);
  const numberOfThreeStarReviews = threeStarReviews.length;
  const percentageOfThreeStarReviews =
    (numberOfThreeStarReviews / totalReviews) * 100;

  const twoStarReviews = allReviews.filter((review) => review.ratings === 2);
  const numberOfTwoStarReviews = twoStarReviews.length;
  const percentageOfTwoStarReviews =
    (numberOfTwoStarReviews / totalReviews) * 100;

  const oneStarReviews = allReviews.filter((review) => review.ratings === 1);
  const numberOfOneStarReviews = oneStarReviews.length;
  const percentageOfOneStarReviews =
    (numberOfOneStarReviews / totalReviews) * 100;

  let reviews = allReviews.map((review) => review.ratings);
  let sum = 0;

  for (let i = 0; i < reviews.length; i++) {
    sum += reviews[i];
  }

  // Calculate the average
  let average = sum / reviews.length;

  const [star, setStar] = useState(5);

  const onChange = (nextValue) => {
    setStar(nextValue);
  };

  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

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
                      activeColors={["#FFCE00"]}
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
                  <div className="w-full">
                    <ProgressBar
                      barContainerClassName="progressContainer"
                      height="7px"
                      isLabelVisible={false}
                      completed={percentageOfFiveStarReviews}
                      bgColor="#00C193"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {numberOfFiveStarReviews}
                  </h3>
                </div>

                {/* 4 star  */}
                <div className="flex items-center gap-4">
                  {/* Left Round circle */}
                  <div className="w-4 h-4 rounded-full bg-[#D9D9D9]"></div>
                  <p>4</p>
                  <div className="w-full">
                    <ProgressBar completed={percentageOfFourStarReviews} />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {numberOfFourStarReviews}
                  </h3>
                </div>

                {/* 3 star  */}
                <div className="flex items-center gap-4">
                  {/* Left Round circle */}
                  <div className="w-4 h-4 rounded-full bg-[#D9D9D9]"></div>
                  <p>3</p>
                  <div className="w-full">
                    <ProgressBar completed={percentageOfThreeStarReviews} />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {numberOfThreeStarReviews}
                  </h3>
                </div>

                {/* 2 star  */}
                <div className="flex items-center gap-4">
                  {/* Left Round circle */}
                  <div className="w-4 h-4 rounded-full bg-[#D9D9D9]"></div>
                  <p>2</p>
                  <div className="w-full">
                    <ProgressBar completed={percentageOfTwoStarReviews} />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {numberOfTwoStarReviews}
                  </h3>
                </div>

                {/* 1 star  */}
                <div className="flex items-center gap-4">
                  {/* Left Round circle */}
                  <div className="w-4 h-4 rounded-full bg-[#D9D9D9]"></div>
                  <p>1</p>
                  <div className="w-full">
                    <ProgressBar completed={percentageOfOneStarReviews} />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {numberOfOneStarReviews}
                  </h3>
                </div>
              </div>
            </div>

            
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
