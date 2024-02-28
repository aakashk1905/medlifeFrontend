import React, { useState } from "react";
import CityDropdown from "./CityDropdown.js";
import "./styles/Form.css";
import { IoIosArrowDown } from "react-icons/io";
import useAxiosBaseUrl from "../hooks/useBaseUrl.jsx";
import { Toaster, toast } from "sonner";
const Form = ({header}) => {
  const [patientName, setPatientName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDisease, setSelectedDisease] = useState("");

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
    const patientName = e.target.patientName.value;
    const mobileNumber = e.target.mobileNumber.value;
    if (
      !patientName ||
      !mobileNumber ||
      !selectedCity ||
      !selectedDisease ||
      selectedCity === "Select City" ||
      selectedCity === "Select Disease"
    ) {
      toast.error("Please fill all the fields");
      
      return;
    }
    if(mobileNumber.length < 10){
      toast.error("Mobile number should be 10 digits");
      return
    }else if(mobileNumber.length > 10){
      toast.error("Mobile number should not be over 10 digits");
      return
    }
    axiosBaseUrl
      .post("/api/v1/createlead", {
        name: patientName,
        mobileNumber: mobileNumber,
        city: selectedCity,
        disease: selectedDisease,
      })
      .then((response) => {
        if (response.data.message) {
          const promise = new Promise((resolve) =>
            setTimeout(() => resolve({  }), 3000)
          );
          toast.promise(promise, {
            loading: "Loading...",
            success: () => {
              return "Your consultation has been booked and we will get back to you soon.";
            },
            error: "Error",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
   <div className="w-full shadow-lg rounded-3xl mb-3">
     <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 bg-white p-7 rounded-3xl w-full">
     <div className="hc-head mb-1">{header}</div>
      <input
        type="text"
        id="patientName"
        value={patientName}
        name="patientName"
        placeholder="Patient Name "
        className="bg-white border border-gray-300 px-4 focus:outline-none focus:border-teal-700 w-full h-12 rounded-lg"
        onChange={(e) => setPatientName(e.target.value)}
      />
      <input
        type="number"
        id="mobileNumber"
        placeholder="Mobile Number"
        name="mobileNumber"
        value={mobileNumber}
        className="bg-white border border-gray-300 px-4 focus:outline-none focus:border-teal-700 w-full h-12 rounded-lg"
        onChange={(e) => setMobileNumber(e.target.value)}
      />

      <div class="relative inline-block text-left w-full">
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="block appearance-none bg-white border border-gray-300 px-4 pr-8 focus:outline-none focus:border-teal-700 cursor-pointer w-full h-12 rounded-lg"
        >
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
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
          className="block appearance-none bg-white border border-gray-300 px-4 pr-8 focus:outline-none focus:border-teal-700 cursor-pointer w-full h-12 rounded-lg"
        >
          {disease.map((disease) => (
            <option key={disease} value={disease}>
              {disease}
            </option>
          ))}
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
          <IoIosArrowDown></IoIosArrowDown>
        </div>
      </div>

      <button className="bg-[#00a79d] px-4 w-full h-12 rounded-lg text-white" type="submit">Book Now</button>
      <Toaster position="top-center" />
    </form>
   </div>
  );
};

export default Form;
