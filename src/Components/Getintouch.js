import React, { useState } from "react";
import "./styles/Getintouch.css";

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
        <div className="git-form-cont">
          <input
            type="text"
            placeholder="Patient Name / रोगी का नाम"
            className="git-inp"
          />
          <input
            type="text"
            placeholder="Mobile No. / मोबाइल नंबर"
            className="git-inp"
          />
          <select
            id="city"
            value={selectedCity}
            className="git-inp"
            onChange={handleChange}
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <select
            id="city"
            value={selectedDisease}
            className="git-inp"
            onChange={handleChange1}
          >
            {disease.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Type your Message here / यहाँ आपके संदेश लिखे"
            className="git-inp git-long-inp"
          />
          <div className="git-cta">Book Free Appointment</div>
        </div>
      </div>
    </div>
  );
};

export default Getintouch;
