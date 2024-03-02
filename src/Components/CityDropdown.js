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

const CityDropdown = ({ onCityChange, type, setCityName }) => {
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <>
      {type === "city" && (
        <div className="cities-scroll w-full">
          {cities.map(
            (city, ind) =>
              ind !== 0 && (
                <div
                  className="border rounded-md flex justify-center items-center h-10 px-2 cursor-pointer"
                  key={city}
                  onClick={() => {
                    setSelectedCity(city);
                    onCityChange(city);
                    setCityName(city);
                  }}
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
