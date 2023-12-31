import React, { useState } from "react";

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

const CityDropdown = ({ onCityChange, type }) => {
  const [selectedCity, setSelectedCity] = useState("");

  const handleChange = (e) => {
    setSelectedCity(e.target.value);
    onCityChange(e.target.value);
  };

  return (
    <>
      <select
        id="city"
        value={selectedCity}
        className="inp"
        onChange={handleChange}
      >
        {type === "city" &&
          cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        {type === "disease" &&
          disease.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
      </select>
      {type === "city" && (
        <div className="cities-scroll">
          {cities.map(
            (city, ind) =>
              ind !== 0 && (
                <div
                  className="city-chip"
                  key={city}
                  onClick={() => setSelectedCity(city)}
                >
                  {city}
                </div>
              )
          )}
        </div>
      )}
    </>
  );
};

export default CityDropdown;
