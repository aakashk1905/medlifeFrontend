import React, { useState } from "react";
import "./styles/Getintouch.css";
import { IoIosArrowDown } from "react-icons/io";

const cities = [
  "Select City / शहर चुनें",
  "Patna",
  "Gaya",
  "Bhagalpur",
  "Muzaffarpur",
  "Purnia",
  "Darbhanga",
  "Bihar Sharif",
];
const disease = [
  "Select Disease / रोग का चयन करें",
  "Hernia",
  "Gynacology",
  "Fever",
];

const Getintouch = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDisease, setSelectedDisease] = useState("");

  const handleChange = (e) => {
    setSelectedCity(e.target.value);
  };
  const handleChange1 = (e) => {
    setSelectedDisease(e.target.value);
  };
  return (
    <div className="git-cont">
      <div className="git-inner-cont">
        <div className="wu-btm-head">Get in touch</div>
        <div className="git-text">
          चिकित्सा उपचार परामर्श के लिए, फॉर्म भरें
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              className="bg-white p-4 border border-gray-300 rounded-lg focus:outline-none w-full mb-6"
              placeholder="Patient Name / रोगी का नाम"
            />

            <input
              type="number"
              className="bg-white p-4 border border-gray-300 rounded-lg focus:outline-none w-full mb-6"
              placeholder="Mobile No. / मोबाइल नंबर"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="relative inline-block text-left w-full mb-6">
              <select
                id="city"
                value={selectedCity}
                onChange={handleChange}
                className="block appearance-none cursor-pointer bg-white p-4 border border-gray-300 rounded-lg focus:outline-none w-full"
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

            <div class="relative inline-block text-left w-full mb-6">
              <select
                id="city"
                value={selectedDisease}
                onChange={handleChange1}
                className="block appearance-none cursor-pointer bg-white p-4 border border-gray-300 rounded-lg focus:outline-none w-full"
              >
                {disease.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                <IoIosArrowDown></IoIosArrowDown>
              </div>
            </div>
          </div>

          <input
            type="text"
            className="bg-white p-4 border border-gray-300 rounded-lg focus:outline-none w-full mb-6"
            placeholder="Type your Message here / यहाँ आपके संदेश लिखे"
          />

          <div className="flex justify-center items-center">
            <div className="git-cta">Book Free Appointment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getintouch;
