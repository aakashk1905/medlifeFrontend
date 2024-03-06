import logo from "../Assests/logo.svg";
import DropdownMenu from "./DropdownMenu";
import Sidebar from "./Sidebar/Sidebar";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import SelectCitySidebar from "./Sidebar/SelectCitySidebar";
import { useEffect, useState } from "react";

const Navbar = () => {
  const btmMenus = [
    {
      name: "Proctology",
      list: [
        "Piles Treatment",
        "Fistula Treatment",
        "Pilonidal Sinus Treatment",
        "Rectal Prolapse",
      ],
      link: "proctology",
    },
    {
      name: "Laparoscopy",
      list: [
        "Hernia Treatment",
        "Gallbladder Treatment",
        "Inguinal Hernia Treatment",
        "Umbilical Hernia Treatment",
      ],
      link: "laparoscopy",
    },
    {
      name: "Gynaecology",
      list: ["Uterus Removal", "Ovarian Cyst"],
      link: "gynaecology",
    },
    {
      name: "ENT",
      list: [
        "Tympanoplasty",
        "Adenoidectomy",
        "Sinus Treatment",
        "Septoplasty",
        "Mastoidectomy",
        "FESS Surgery",
        "Thyroidectomy",
        "Tonsillectomy",
        "Stapedectomy",
        "Myringotomy",
        "Throat Surgery",
        "Ear Surgery",
        "Vocal Cord Polyps",
        "Nasal Polyps",
        "Turbinate Reduction",
      ],
      link: "ent",
    },
    {
      name: "Vascular",
      list: ["Varicose Veins Treatment", "Varicocele Treatment"],
      link: "vascular",
    },
    {
      name: "Aesthetics",
      list: ["Gynecomastia", "Liposuction", "Hair Transplant"],
      link: "aesthetics",
    },
    {
      name: "Orthopedics",
      list: [
        "Knee Replacement",
        "ACL Tear Treatment",
        "Hip Replacement Surgery",
        "Spine Surgery",
      ],
      link: "orthopedics",
    },
    {
      name: "Ophthalmology",
      list: ["Lasik Eye Surgery", "Cataract Surgery", "Phaco Surgery"],
      link: "ophthalmology",
    },
    {
      name: "Fertility",
      list: ["IVF Treatment", "IUI Treatment"],
      link: "fertility",
    },
    {
      name: "Dentistry",
      list: ["Dental Implant Surgery", "Dental Braces", "Teeth Aligners"],
      link: "dentistry",
    },
    {
      name: "Weight Loss",
      list: ["Bariatric Surgery", "Intragastric Balloon", "Weightloss Surgery"],
      link: "weightloss",
    },
    {
      name: "Dermatology",
      list: [
        "Botox",
        "Vampire Facial",
        "Face Threadlift",
        "Hair Transplant",
        "FUE",
        "FUT",
        "DHI Hair Transplant",
        "GFC Hair Transplant",
      ],
      link: "dermatology",
    },
  ];
  const navigate = useNavigate();

  const searchValues = [
    { name: "Proctology", link: "/proctology" },
    { name: "Laparoscopy", link: "/laparoscopy" },
    { name: "Gynaecology", link: "/gynaecology" },
    { name: "ENT", link: "/ent" },
    { name: "Vascular", link: "/vascular" },
    { name: "Aesthetics", link: "/aesthetics" },
    { name: "Orthopedics", link: "/orthopedics" },
    { name: "Ophthalmology", link: "/ophthalmology" },
    { name: "Fertility", link: "/fertility" },
    { name: "Dentistry", link: "/dentistry" },
    { name: "Weight Loss", link: "/weight Loss" },
    { name: "Dermatology", link: "/dermatology" },

    // Sub disease
    { name: "Piles Treatment", link: "/treatment/piles" },
    { name: "Fistula Treatment", link: "/treatment/piles" },
    { name: "Pilonidal Sinus Treatment", link: "/treatment/piles" },
    { name: "Rectal Prolapse", link: "/treatment/piles" },

    { name: "Hernia Treatment", link: "/treatment/hernia" },
    { name: "Gallbladder Treatment", link: "/treatment/gallbladder" },
    { name: "Inguinal Hernia Treatment", link: "/treatment/inguinal" },
    { name: "Umbilical Hernia Treatment", link: "/treatment/umbilical" },
    { name: "Rectal Prolapse Treatment", link: "/treatment/rectal" },

    { name: "Uterus Removal", link: "/treatment/uterus" },
  { name: "Ovarian Cyst", link: "/treatment/ovarian" },


  { name: "Tympanoplasty", link: "/treatment/tympanoplasty" },
  { name: "Adenoidectomy", link: "/treatment/adenoidectomy" },
  { name: "Sinus Treatment", link: "/treatment/sinus" },
  { name: "Septoplasty", link: "/treatment/septoplasty" },
  { name: "Mastoidectomy", link: "/treatment/mastoidectomy" },
  { name: "FESS Surgery", link: "/treatment/fess" },
  { name: "Thyroidectomy", link: "/treatment/thyroidectomy" },
  { name: "Tonsillectomy", link: "/treatment/tonsillectomy" },
  { name: "Stapedectomy", link: "/treatment/stapedectomy" },
  { name: "Myringotomy", link: "/treatment/myringotomy" },
  { name: "Throat Surgery", link: "/treatment/throat" },
  { name: "Ear Surgery", link: "/treatment/ear" },
  { name: "Vocal Cord Polyps", link: "/treatment/vocal" },
  { name: "Nasal Polyps", link: "/treatment/nasal" },
  { name: "Turbinate Reduction", link: "/treatment/turbinate" },

  { name: "Varicose Veins Treatment", link: "/treatment/varicose" },
  { name: "Varicocele Treatment", link: "/treatment/varicocele" },

  { name: "Gynecomastia", link: "/treatment/gynecomastia" },
  { name: "Liposuction", link: "/treatment/liposuction" },
  { name: "Hair Transplant", link: "/treatment/hair" },

  { name: "Knee Replacement", link: "/treatment/kneet" },
  { name: "ACL Tear Treatment", link: "/treatment/acl" },
  { name: "Hip Replacement Surgery", link: "/treatment/hip" },
  { name: "Spine Surgery", link: "/treatment/spine" },


  { name: "Lasik Eye Surgery", link: "/treatment/lasik" },
  { name: "Cataract Surgery", link: "/treatment/cataract" },
  { name: "Phaco Surgery", link: "/treatment/phaco" },

  { name: "IVF Treatment", link: "/treatment/ivf" },
  { name: "IUI Treatment", link: "/treatment/iui" },
  { name: "Dental Implant Surgery", link: "/treatment/dental" },
  { name: "Dental Braces", link: "/treatment/dental" },
  { name: "Teeth Aligners", link: "/treatment/teeth" },
  { name: "Bariatric Surgery", link: "/treatment/bariatric" },
  { name: "Intragastric Balloon", link: "/treatment/intragastric" },
  { name: "Botox", link: "/treatment/botox" },
  { name: "Vampire Facial", link: "/treatment/vampire" },
  { name: "Face Threadlift", link: "/treatment/face" },
  { name: "Hair Transplant", link: "/treatment/hair" },
  { name: "FUE", link: "/treatment/fue" },
  { name: "FUT", link: "/treatment/fut" },
  { name: "DHI Hair Transplant", link: "/treatment/dhi" },
  { name: "GFC Hair Transplant", link: "/treatment/gfc" }


  ];

  const suggestionName = [{ name: "Piles Treatment", link: "treatment/piles" }];

  const [searchedResult, setSearchedResult] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const [suggestionShow, setSuggestionShow] = useState(false);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchedResult(query);

    const suggestions = searchValues
      .filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 5);

    setSuggestions(suggestions);
    if (query === "") {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    console.log("suggestion.link", suggestion.link);
    navigate(suggestion.link);

    setSearchedResult("");
  };

  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sticky top-0 z-30">
      <div className=" bg-[#00a79d] py-[12px] flex items-center justify-center">
        <div className="w-[95%] lg:w-[90%] flex justify-between items-center pr-[13px]">
          <img className="" src={logo} alt="logo" />
          <div className="flex items-center gap-5">
            <div className="hidden md:block relative">
              <input
                value={searchedResult}
                onChange={handleSearch}
                type="text"
                className="bg-white pl-9 py-2 rounded-lg w-80 focus:outline-none"
                placeholder="Search disease or treatment"
              />
              <IoSearchOutline className="text-2xl absolute top-2  left-2 text-gray-500"></IoSearchOutline>
              {suggestions.length > 0 && (
                <div
                  className={`absolute mt-2 w-80 bg-white border border-gray-300 rounded-md shadow-md z-40 `}
                >
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="p-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to={"/doctors"}
                className="text-white hover:text-teal-100 transition duration-300"
              >
                Doctors
              </Link>
              <Link
                to={"/emergencyService"}
                className="text-white hover:text-teal-100 transition duration-300"
              >
                Services
              </Link>
              <Link
                to={"/hospitals"}
                className="text-white hover:text-teal-100 transition duration-300"
              >
                Hospitals
              </Link>
              <Link
                to={"/blogs"}
                className="text-white hover:text-teal-100 transition duration-300"
              >
                Blogs
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <SelectCitySidebar></SelectCitySidebar>

            <div className="flex xl:hidden">
              <Sidebar></Sidebar>
            </div>
          </div>
        </div>
      </div>
      {windowDimensions.width <= 600 && (
        <div className="bg-[#00a79d] p-2 flex justify-center md:hidden">
          <div className="relative w-full flex justify-center">
            <input
              value={searchedResult}
              onChange={handleSearch}
              // onClick={handleSuggestionShow}
              type="text"
              className="bg-white pl-9 py-3 rounded-lg w-[90%] md:w-80 focus:outline-none"
              placeholder="Search disease, doctors, treatment"
            />
            <IoSearchOutline className="text-2xl absolute top-3 left-[6.5%] text-gray-500" />
            {suggestions.length > 0 && (
              <div className="absolute mt-14 w-80 bg-white border border-gray-300 rounded-md shadow-md z-40">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="hidden xl:flex justify-center bg-white">
        <div className=" flex justify-between w-[90%]">
          {btmMenus.map((menu, ind) => (
            <DropdownMenu
              key={ind}
              st={"btm"}
              link={menu.link}
              name={menu.name}
              list={menu.list}
            />
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
