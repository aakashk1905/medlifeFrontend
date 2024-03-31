import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";
import logo from "../../Assests/logo.svg";

const Sidebar = () => {
  const btmMenus = [
    {
      name: "Proctology",
      list: [
        "Piles Treatment",
        "Fistula Treatment",
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

  // Dropdown functionality
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  const closeDrawer = () => {
    const isSidebarOpen = document.getElementById("my-drawer-4");
    if (isSidebarOpen) {
      isSidebarOpen.checked = false;
    }
  };

  const handleLinkClick = () => {
    closeDrawer();
    setOpenDropdown(null);
  };

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-4"
          className="drawer-button text-3xl cursor-pointer text-white"
        >
          <IoMdMenu></IoMdMenu>
        </label>
      </div>
      <div className="drawer-side z-30">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="w-80 min-h-full bg-white text-base-content">
          <div className="bg-teal-500 p-3">
            <div className="flex items-center justify-between">
              <Link to={"/"}>
                <img className="" src={logo} alt="logo" />
              </Link>

              <RxCross2
                onClick={closeDrawer}
                className="text-white text-3xl cursor-pointer"
              ></RxCross2>
            </div>

            <div className="flex justify-between items-center mt-3">
              <Link
                onClick={handleLinkClick}
                to={"/doctors"}
                className="text-white hover:text-teal-400 border rounded-md py-1 px-2 transition duration-300"
              >
                Doctors
              </Link>
              <Link
                onClick={handleLinkClick}
                to={"/emergencyService"}
                className="text-white hover:text-teal-400 border rounded-md py-1 px-2 transition duration-300"
              >
                Services
              </Link>
              <Link
                onClick={handleLinkClick}
                to={"/hospitals"}
                className="text-white hover:text-teal-400 border rounded-md py-1 px-2 transition duration-300"
              >
                Hospitals
              </Link>
              <Link
                onClick={handleLinkClick}
                to={"/blogs"}
                className="text-white hover:text-teal-400 border rounded-md py-1 px-2 transition duration-300"
              >
                Blogs
              </Link>
            </div>
          </div>

          <div className="p-4">
            {btmMenus.map((menu, id) => (
              <div key={id} className="text-left">
                <div className="flex">
                  <div
                    // to={`/${menu.link}`}
                    type="button"
                    onClick={() => toggleDropdown(id)}
                    className="cursor-pointer flex items-center justify-between w-full text-base font-medium text-gray-700 mb-5"
                  >
                    {menu.name}
                    <IoIosArrowDown></IoIosArrowDown>
                  </div>
                </div>

                {openDropdown === id && (
                  <div className={`origin-top-right absolute right-20 w-56 -mt-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 h-40 overflow-y-scroll ${menu?.list?.length.length > 5 ? 'h-52 overflow-y-scroll' : ''}`}>
                    <div
                      className="flex flex-col gap-2 p-3"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {menu?.list && menu?.list?.length > 0 ? (
                        menu?.list?.map((listItem, index) => (
                          <Link
                            onClick={handleLinkClick}
                            className="hover:bg-gray-100 transition duration-300 p-2 rounded-md"
                            to={`/treatment/${listItem
                              .split(" ")[0]
                              .toLowerCase()}`}
                            key={index}
                          >
                            <li className="text-gray-700">{listItem}</li>
                          </Link>
                        ))
                      ) : (
                        <li>No items in the list</li>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
