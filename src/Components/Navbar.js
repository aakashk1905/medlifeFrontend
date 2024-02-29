import logo from "../Assests/logo.svg";
import DropdownMenu from "./DropdownMenu";
import Sidebar from "./Sidebar/Sidebar";
import { Link, Outlet } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import SelectCitySidebar from "./Sidebar/SelectCitySidebar";
import { useEffect, useState } from "react";

const Navbar = () => {
  // Have to fix the hover content. The menu is not dissapering after clicking any list
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
      <div className="flex justify-between items-center bg-[#00a79d] pl-5 md:pl-9 lg:pl-8 pr-5 md:pr-9 lg:pr-10 py-2">
        <img className="" src={logo} alt="logo"/>
        <div  className="flex items-center gap-5">
          <div className="hidden md:block relative">
            <input
              type="text"
              className="bg-white pl-9 py-2 rounded-lg w-80 focus:outline-none"
              placeholder="Search disease, doctors, treatment"
            />
            <IoSearchOutline className="text-2xl absolute top-2  left-2 text-gray-500"></IoSearchOutline>
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

      {
  (windowDimensions.width <= 375) && (
    <div className="bg-[#00a79d] p-2 flex justify-center md:hidden">
      <div className="relative">
        <input
          type="text"
          className="bg-white pl-9 py-3 rounded-lg w-[320px] md:w-80 focus:outline-none"
          placeholder="Search disease, doctors, treatment"
        />
        <IoSearchOutline className="text-2xl absolute top-3 left-2 text-gray-500" />
      </div>
    </div>
  )
}

      {
  (windowDimensions.width >= 375) && (
    <div className="bg-[#00a79d] p-2 flex justify-center md:hidden">
      <div className="relative">
        <input
          type="text"
          className="bg-white pl-9 py-3 rounded-lg w-[388px] md:w-80 focus:outline-none"
          placeholder="Search disease, doctors, treatment"
        />
        <IoSearchOutline className="text-2xl absolute top-3 left-2 text-gray-500" />
      </div>
    </div>
  )
}

      <div className="hidden xl:flex justify-between px-8 -ml-1 bg-white">
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
      <Outlet />
    </div>
  );
};

export default Navbar;
