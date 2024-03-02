import React, { useContext, useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Form from "../Form";
import { FaAngleDown } from "react-icons/fa6";
import { formContext } from "../Provider/FormProvider";

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

  const { cityName, setCityName } = useContext(formContext);

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
    setCityName(city);
    setFilteredCities(filteredCities);
    console.log(cityName);
    localStorage.setItem("selectedCity", city);
  };

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-3" className="drawer-button cursor-pointer">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <FaLocationDot className="text-white"></FaLocationDot>
              <p className="text-white">{cityName}</p>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="63"
                height="64"
                viewBox="0 0 63 64"
                fill="none"
              >
                <path
                  d="M9.2609 2.16943H53.7704C55.8809 2.16943 57.5819 3.87043 57.5819 5.98093V50.4904C57.5819 52.6009 55.8809 54.3019 53.7704 54.3019H9.2609C7.1504 54.3019 5.4494 52.6009 5.4494 50.4904V5.98093C5.4179 3.87043 7.1504 2.16943 9.2609 2.16943Z"
                  fill="#00A79D"
                />
                <path
                  d="M46.7123 34.5513H46.6493L37.5458 35.3073C36.9473 35.3703 36.8213 35.4018 36.7268 34.6143L35.4668 21.2898C35.4353 19.8408 34.5218 18.5493 33.1988 18.0138C31.6553 17.3838 29.8598 17.8563 28.8203 19.1478L13.3853 44.1273C12.4718 45.2613 12.2513 46.8048 12.8498 48.1593C13.4168 49.3878 14.6453 50.1438 15.9683 50.1123H21.5123C22.0478 50.1123 22.4573 49.6713 22.4573 49.1673V46.3323C22.4573 45.7968 22.0163 45.3873 21.5123 45.3873H19.8743C19.3388 45.3873 18.9293 44.9463 18.9293 44.4423C18.9293 44.2533 18.9923 44.0958 19.0868 43.9383L29.5448 26.9598C29.8283 26.5188 30.3953 26.3613 30.8678 26.6448C31.1198 26.8023 31.2773 27.0858 31.3088 27.3693L32.1908 36.5673C32.2853 38.5518 33.8918 40.1268 35.9078 40.1583H36.0023L43.5308 39.5283C44.0663 39.4968 44.5073 39.8748 44.5703 40.4103C44.5703 40.5678 44.5703 40.7253 44.5073 40.8513L42.9008 44.7573C42.7433 45.1353 42.3968 45.3558 42.0188 45.3558H25.0718C24.5363 45.3558 24.1268 45.7653 24.1268 46.3008V49.1358C24.1268 49.6713 24.5678 50.0808 25.0718 50.0808H42.9638C44.8853 50.0808 46.5863 48.7893 47.1218 46.9308L50.4608 38.7408C50.4608 38.7408 50.4608 38.7408 50.4608 38.7093V38.2998C50.4608 36.2523 48.7913 34.5513 46.7123 34.5513Z"
                  fill="white"
                />
                <path
                  d="M31.4988 16.9746C34.4215 16.9746 36.7908 14.6053 36.7908 11.6826C36.7908 8.75993 34.4215 6.39062 31.4988 6.39062C28.5761 6.39062 26.2068 8.75993 26.2068 11.6826C26.2068 14.6053 28.5761 16.9746 31.4988 16.9746Z"
                  fill="#1D1A4F"
                />
                <path
                  d="M6.61304 57.515C6.61304 57.1055 6.89654 56.9795 7.18004 56.9795H7.49504C7.81004 56.9795 7.96754 57.1055 8.09354 57.452L9.00704 60.413L9.92054 57.452C10.015 57.1055 10.1725 56.9795 10.519 56.9795H10.834C11.1175 56.9795 11.401 57.074 11.401 57.515V61.2635C11.4325 61.5155 11.2435 61.736 10.96 61.7675C10.6765 61.799 10.4875 61.61 10.456 61.3265C10.456 61.295 10.456 61.2635 10.456 61.2635V58.397L9.47954 61.4525C9.41654 61.6415 9.22754 61.7675 9.03854 61.7675C8.84954 61.799 8.66054 61.673 8.59754 61.4525L7.62104 58.397V61.2635C7.65254 61.5155 7.46354 61.736 7.18004 61.7675C6.92804 61.799 6.70754 61.61 6.67604 61.3265C6.67604 61.295 6.67604 61.2635 6.67604 61.2635L6.61304 57.515Z"
                  fill="#1D1A4F"
                />
                <path
                  d="M12.3474 57.704C12.3474 57.2315 12.5994 57.1055 12.9459 57.1055H15.4344C15.7494 57.1055 15.9699 57.2 15.9699 57.515C15.9699 57.8615 15.7494 57.9245 15.4344 57.9245H13.4184V58.9325H15.2139C15.4974 58.9325 15.7179 59.027 15.7179 59.342C15.7179 59.657 15.4974 59.7515 15.2139 59.7515H13.4184V60.8855H15.4974C15.8124 60.8855 16.0329 60.98 16.0329 61.295C16.0329 61.61 15.8124 61.7045 15.4974 61.7045H12.9774C12.5994 61.7045 12.3789 61.547 12.3789 61.106L12.3474 57.704Z"
                  fill="#1D1A4F"
                />
                <path
                  d="M16.7263 57.704C16.7263 57.2315 16.9783 57.1055 17.3248 57.1055H18.6163C19.7503 57.1055 20.8213 57.6095 20.8213 59.405C20.8213 60.854 20.0023 61.7045 18.5848 61.7045H17.3248C17.0413 61.736 16.7578 61.547 16.7263 61.232C16.7263 61.169 16.7263 61.1375 16.7263 61.0745V57.704ZM17.7658 60.854H18.6478C19.4983 60.854 19.7503 60.098 19.7503 59.405C19.7503 58.4915 19.4038 57.956 18.6163 57.956H17.7343L17.7658 60.854Z"
                  fill="#1D1A4F"
                />
                <path
                  d="M23.5623 57.515C23.5623 57.2315 23.7828 56.9795 24.0978 56.9795C24.3813 56.9795 24.6333 57.2 24.6333 57.515V60.8225H26.3973C26.7123 60.8225 26.9328 60.98 26.9328 61.2635C26.9328 61.547 26.6808 61.7045 26.3973 61.7045H24.1923C23.9088 61.736 23.6253 61.547 23.5938 61.232C23.5938 61.169 23.5938 61.1375 23.5938 61.0745L23.5623 57.515Z"
                  fill="#1D1A4F"
                />
                <path
                  d="M27.4989 57.5148C27.4674 57.2313 27.6879 56.9793 27.9714 56.9478C28.2549 56.9163 28.5068 57.1368 28.5383 57.4203C28.5383 57.4518 28.5383 57.4833 28.5383 57.5148V61.2633C28.5698 61.5468 28.3493 61.7988 28.0658 61.8303C27.7823 61.8618 27.5304 61.6413 27.4989 61.3578C27.4989 61.3263 27.4989 61.2948 27.4989 61.2633V57.5148Z"
                  fill="#1D1A4F"
                />
                <path
                  d="M29.5466 57.704C29.5466 57.2315 29.7986 57.1055 30.1451 57.1055H32.4761C32.7911 57.1055 33.0116 57.2 33.0116 57.515C33.0116 57.8615 32.7911 57.9245 32.4761 57.9245H30.5861V58.9955H32.1926C32.4761 58.9955 32.6966 59.0585 32.6966 59.405C32.6966 59.72 32.4761 59.8145 32.1926 59.8145H30.5861V61.2635C30.6176 61.547 30.3971 61.799 30.1136 61.8305C29.8301 61.862 29.5781 61.6415 29.5466 61.358C29.5466 61.3265 29.5466 61.295 29.5466 61.2635V57.704Z"
                  fill="#1D1A4F"
                />
                <path
                  d="M33.5779 57.704C33.5779 57.2315 33.8299 57.1055 34.1764 57.1055H36.6649C36.9799 57.1055 37.2004 57.2 37.2004 57.515C37.2004 57.8615 36.9799 57.9245 36.6649 57.9245H34.6174V58.9325H36.4129C36.6964 58.9325 36.9169 59.027 36.9169 59.342C36.9169 59.657 36.6964 59.7515 36.4129 59.7515H34.6174V60.8855H36.6964C37.0114 60.8855 37.2319 60.98 37.2319 61.295C37.2319 61.61 37.0114 61.7045 36.6964 61.7045H34.1764C33.8929 61.736 33.6094 61.547 33.5779 61.232C33.5779 61.169 33.5779 61.1375 33.5779 61.0745V57.704Z"
                  fill="#1D1A4F"
                />
                <path
                  d="M39.9412 57.704C39.9412 57.2315 40.1932 57.1055 40.5397 57.1055H43.0282C43.3432 57.1055 43.5637 57.2 43.5637 57.515C43.5637 57.8615 43.3432 57.9245 43.0282 57.9245H40.9807V58.9325H42.7762C43.0597 58.9325 43.2802 59.027 43.2802 59.342C43.2802 59.657 43.0597 59.7515 42.7762 59.7515H40.9807V60.8855H43.0597C43.3747 60.8855 43.5952 60.98 43.5952 61.295C43.5952 61.61 43.3747 61.7045 43.0597 61.7045H40.5397C40.1617 61.7045 39.9412 61.547 39.9412 61.106V57.704Z"
                  fill="#EBFFFE"
                />
                <path
                  d="M45.3594 57.3261C45.4224 57.1056 45.6429 56.9796 45.8634 57.0111H46.1154C46.3674 56.9796 46.6194 57.1371 46.6824 57.3891L47.9424 60.9171C48.0054 61.0431 48.0369 61.1691 48.0369 61.3266C48.0369 61.5786 47.8164 61.7991 47.5329 61.7991C47.3124 61.8306 47.1234 61.7046 47.0604 61.5156L46.7769 60.7596H45.0759L44.7924 61.5156C44.7294 61.7046 44.5404 61.8306 44.3199 61.7991C44.0679 61.8306 43.8474 61.6416 43.8474 61.3896C43.8474 61.3581 43.8474 61.3581 43.8474 61.3266C43.8474 61.2006 43.9104 61.0431 43.9419 60.9171L45.3594 57.3261ZM45.9894 58.1451L45.3594 60.0036H46.5879L45.9894 58.1451Z"
                  fill="#EBFFFE"
                />
                <path
                  d="M51.0281 59.0268C52.0046 59.2473 52.2566 59.8143 52.2566 60.3498C52.2566 61.1688 51.6266 61.7988 50.3666 61.7988C49.0436 61.7988 48.4451 61.1373 48.4451 60.6333C48.4451 60.4128 48.6341 60.1923 48.8546 60.1923H48.8861C49.4531 60.1923 49.2956 61.0113 50.3666 61.0113C50.9021 61.0113 51.2171 60.6963 51.2171 60.4128C51.2171 60.2238 51.1226 60.0348 50.7761 59.9403L49.5791 59.6253C48.6341 59.3733 48.4451 58.8378 48.4451 58.3653C48.4451 57.3258 49.3901 56.9478 50.3036 56.9478C51.1226 56.9478 52.0991 57.4203 52.0991 58.0188C52.0991 58.2708 51.8786 58.4598 51.6581 58.4283H51.6266C51.1541 58.4283 51.2171 57.7353 50.2406 57.7353C49.7681 57.7353 49.4846 57.9558 49.4846 58.2708C49.4846 58.5858 49.8626 58.6803 50.2091 58.7748L51.0281 59.0268Z"
                  fill="#EBFFFE"
                />
                <path
                  d="M53.96 59.9088L52.6685 57.7668C52.6055 57.6723 52.574 57.5778 52.574 57.4833C52.574 57.1998 52.826 56.9793 53.078 57.0108C53.078 57.0108 53.078 57.0108 53.1095 57.0108C53.33 57.0108 53.519 57.1053 53.582 57.3258L54.4955 59.0268L55.409 57.3258C55.472 57.1368 55.661 57.0108 55.85 57.0108C56.1335 57.0108 56.354 57.1998 56.3855 57.4833C56.3855 57.5778 56.354 57.6723 56.291 57.7668L54.9995 59.9088V61.2633C54.9995 61.5468 54.779 61.7988 54.464 61.7988C54.1805 61.7988 53.9285 61.5783 53.9285 61.2633L53.96 59.9088Z"
                  fill="#EBFFFE"
                />
              </svg>
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
            {selectedCity && <Form cityName={cityName} />}
          </div>

          <div className="p-4"></div>
        </ul>
      </div>
    </div>
  );
};

export default SelectCitySidebar;
