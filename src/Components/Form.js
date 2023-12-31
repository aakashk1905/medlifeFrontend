import React, { useState } from "react";
import CityDropdown from "./CityDropdown.js";
import "./styles/Form.css";
const Form = () => {
  const [patientName, setPatientName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDisease, setSelectedDisease] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Submitted Details ",
      patientName,
      mobileNumber,
      selectedCity,
      selectedDisease
    );
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
      <CityDropdown onCityChange={setSelectedCity} type="city" />

      <CityDropdown onCityChange={setSelectedDisease} type="disease" />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default Form;
