import React, { useState } from "react";
import CityDropdown from "./CityDropdown.js";
import "./styles/Form.css";
import { IoIosArrowDown } from "react-icons/io";
import useAxiosBaseUrl from "../hooks/useBaseUrl.jsx";
const Form = () => {
  const [patientName, setPatientName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDisease, setSelectedDisease] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(
  //     "Submitted Details ",
  //     patientName,
  //     mobileNumber,
  //     selectedCity,
  //     selectedDisease
  //   );
  // };

  const cities = [
    "Select City",
    "Patna",
    "Gaya",
    "Bhagalpur",
    "Muzaffarpur",
    "Purnia",
    "Darbhanga",
    "Bihar Sharif",
  ];
  const disease = ["Select Disease", "Hernia", "Gynacology", "Fever"];

  const axiosBaseUrl = useAxiosBaseUrl();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !patientName ||
      !mobileNumber ||
      !selectedCity ||
      !selectedDisease ||
      selectedCity === "Select City" ||
      selectedCity === "Select Disease"
    ) {
      alert("Please Fill All Data");
      return;
    }
    axiosBaseUrl
      .post("/api/v1/createlead", {
        name: patientName,
        mobileNumber: mobileNumber,
        city: selectedCity,
        disease: selectedDisease,
      })
      .then((response) => {
        alert(response.data.message); ///use Toast
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="hc-form-cont">
      <input
        type="text"
        id="patientName"
        value={patientName}
        placeholder="Patient Name "
        className="inp"
        onChange={(e) => setPatientName(e.target.value)}
      />
      <input
        type="tel"
        id="mobileNumber"
        placeholder="Mobile Number"
        value={mobileNumber}
        className="inp"
        onChange={(e) => setMobileNumber(e.target.value)}
      />

      <div class="relative inline-block text-left w-full">
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          class="block appearance-none bg-white border border-gray-300 px-4 pr-8 focus:outline-none focus:border-teal-700 cursor-pointer w-full h-[78.446px] rounded-[13.074px]"
        >
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <IoIosArrowDown></IoIosArrowDown>
        </div>
      </div>

      <CityDropdown onCityChange={setSelectedCity} type="city" />

      <div class="relative inline-block text-left w-full">
        <select
          value={selectedDisease}
          onChange={(e) => {
            setSelectedDisease(e.target.value);
          }}
          class="block appearance-none bg-white border border-gray-300 px-4 pr-8 focus:outline-none focus:border-teal-700 cursor-pointer w-full h-[78.446px] rounded-[13.074px]"
        >
          {disease.map((disease) => (
            <option key={disease} value={disease}>
              {disease}
            </option>
          ))}
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <IoIosArrowDown></IoIosArrowDown>
        </div>
      </div>

      <button type="submit">Book Now</button>
    </form>
  );
};

export default Form;
