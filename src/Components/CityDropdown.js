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

const CityDropdown = ({ onCityChange, type }) => {
  const [selectedCity, setSelectedCity] = useState("");

  

  return (
    <>
    
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
