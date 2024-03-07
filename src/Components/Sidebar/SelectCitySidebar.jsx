import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Form from "../Form";
import { FaAngleDown } from "react-icons/fa6";
import logo from "../../Assests/logo.svg";
import { Link } from "react-router-dom";

const SelectCitySidebar = () => {
  const biharCities = [
    "Patna",
    "Gaya",
    "Bhagalpur",
    "Muzaffarpur",
    "Purnia",
    "Darbhanga",
    "Arrah",
    "Begusarai",
    "Katihar",
    "Munger",
    "Chhapra",
    "Danapur",
    "Bettiah",
    "Saharsa",
    "Sasaram",
    "Hajipur",
    "Dehri",
    "Siwan",
    "Motihari",
    "Nawada",
    "Bagaha",
    "Buxar",
    "Kishanganj",
    "Sitamarhi",
    "Jamalpur",
    "Jehanabad",
    "Aurangabad",
    "Lakhisarai",
    "Sheikhpura",
    "Madhubani",
    "Samastipur",
    "Buxar",
    "Supaul",
    "Bhabua",
    "Barh",
    "Mokama",
    "Forbesganj",
    "Araria",
    "Sherghati",
    "Raxaul",
    "Nokha",
  ];
  // Dropdown functionality
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [filteredCities, setFilteredCities] = useState(biharCities);
  const [selectedCity, setSelectedCity] = useState("");


  useEffect(() => {
    const storedCity = localStorage.getItem("selectedCity");
    if (storedCity) {
      setSelectedCity(storedCity);
    }
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  const closeDrawer = () => {
    const isSidebarOpen = document.getElementById("my-drawer-3");
    if (isSidebarOpen) {
      isSidebarOpen.checked = false;
    }
  };

  const handleInputChange = (value) => {
    setSearchInput(value);
    const filtered = biharCities.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCities(filtered);
  };

  const handleCityClick = (city) => {
    setSearchInput(city);
    setSelectedCity(city);
    setFilteredCities(filteredCities);
    localStorage.setItem("selectedCity", city);
  };

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-3" className="drawer-button cursor-pointer">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 w-36 justify-end">
              <FaLocationDot className="text-white"></FaLocationDot>
              <p className="text-white">{selectedCity === "null" ? "Select City" : selectedCity }</p>
            </div>
          </div>
        </label>
      </div>
      <div className="drawer-side z-30">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="w-80 min-h-full bg-white text-base-content">
          <div className="bg-teal-500 p-3 sticky top-0">
            <div className="flex items-center justify-between">
            <Link to={"/"}>
            <img className="" src={logo} alt="logo" />
          </Link>
              {/* 
              <h1 className="text-xl font-semibold text-gray-100 px-4 mt-2 mb-3 flex items-center gap-2">Select your City <FaAngleDown></FaAngleDown></h1> */}

              <RxCross2
                onClick={closeDrawer}
                className="text-white text-3xl cursor-pointer"
              ></RxCross2>
            </div>
          </div>

          <div className="sticky top-0 z-30">
            <h1 className="text-xl font-semibold text-teal-500 px-4 mt-2 mb-3 flex items-center gap-2">
              Select your City <FaAngleDown></FaAngleDown>
            </h1>

            {/* Content here */}
            <div className="px-4 pb-5">
              <input
                value={searchInput}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="Find Your City"
                type="text"
                className="bg-gray-50 p-3 rounded-lg w-full outline-none focus:border-teal-400 transition duration-300 border hover:border-teal-600"
              />
            </div>
          </div>

          <div className="px-4">
            {filteredCities.map((city, index) => (
              <p
                onClick={() => handleCityClick(city)}
                key={index}
                className="text-gray-500 font-semibold border-b border-gray-300 pb-1 mb-2 cursor-pointer"
              >
                {city}
              </p>
            ))}
          </div>

          <div className="hidden">
            {selectedCity && <Form />}
          </div>

          <div className="p-4"></div>
        </ul>
      </div>
    </div>
  );
};

export default SelectCitySidebar;
