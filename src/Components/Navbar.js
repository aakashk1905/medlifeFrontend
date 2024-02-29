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
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="63"
          height="65"
          viewBox="0 0 63 65"
          fill="none"
        >
          <path
            d="M9.26114 4.16943H53.7706C55.8811 4.16943 57.5821 5.87043 57.5821 7.98093V52.4904C57.5821 54.6009 55.8811 56.3019 53.7706 56.3019H9.26114C7.15064 56.3019 5.44964 54.6009 5.44964 52.4904V7.98093C5.41814 5.87043 7.15064 4.16943 9.26114 4.16943Z"
            fill="#00A79D"
          />
          <path
            d="M46.7126 36.5513H46.6496L37.5461 37.3073C36.9476 37.3703 36.8216 37.4018 36.7271 36.6143L35.4671 23.2898C35.4356 21.8408 34.5221 20.5493 33.1991 20.0138C31.6556 19.3838 29.8601 19.8563 28.8206 21.1478L13.3856 46.1273C12.4721 47.2613 12.2516 48.8048 12.8501 50.1593C13.4171 51.3878 14.6456 52.1438 15.9686 52.1123H21.5126C22.0481 52.1123 22.4576 51.6713 22.4576 51.1673V48.3323C22.4576 47.7968 22.0166 47.3873 21.5126 47.3873H19.8746C19.3391 47.3873 18.9296 46.9463 18.9296 46.4423C18.9296 46.2533 18.9926 46.0958 19.0871 45.9383L29.5451 28.9598C29.8286 28.5188 30.3956 28.3613 30.8681 28.6448C31.1201 28.8023 31.2776 29.0858 31.3091 29.3693L32.1911 38.5673C32.2856 40.5518 33.8921 42.1268 35.9081 42.1583H36.0026L43.5311 41.5283C44.0666 41.4968 44.5076 41.8748 44.5706 42.4103C44.5706 42.5678 44.5706 42.7253 44.5076 42.8513L42.9011 46.7573C42.7436 47.1353 42.3971 47.3558 42.0191 47.3558H25.0721C24.5366 47.3558 24.1271 47.7653 24.1271 48.3008V51.1358C24.1271 51.6713 24.5681 52.0808 25.0721 52.0808H42.9641C44.8856 52.0808 46.5866 50.7893 47.1221 48.9308L50.4611 40.7408C50.4611 40.7408 50.4611 40.7408 50.4611 40.7093V40.2998C50.4611 38.2523 48.7916 36.5513 46.7126 36.5513Z"
            fill="white"
          />
          <path
            d="M31.499 18.9746C34.4217 18.9746 36.791 16.6053 36.791 13.6826C36.791 10.7599 34.4217 8.39062 31.499 8.39062C28.5763 8.39062 26.207 10.7599 26.207 13.6826C26.207 16.6053 28.5763 18.9746 31.499 18.9746Z"
            fill="#1D1A4F"
          />
          <path
            d="M6.61328 59.515C6.61328 59.1055 6.89678 58.9795 7.18028 58.9795H7.49528C7.81028 58.9795 7.96778 59.1055 8.09378 59.452L9.00728 62.413L9.92078 59.452C10.0153 59.1055 10.1728 58.9795 10.5193 58.9795H10.8343C11.1178 58.9795 11.4013 59.074 11.4013 59.515V63.2635C11.4328 63.5155 11.2438 63.736 10.9603 63.7675C10.6768 63.799 10.4878 63.61 10.4563 63.3265C10.4563 63.295 10.4563 63.2635 10.4563 63.2635V60.397L9.47978 63.4525C9.41678 63.6415 9.22778 63.7675 9.03878 63.7675C8.84978 63.799 8.66078 63.673 8.59778 63.4525L7.62128 60.397V63.2635C7.65278 63.5155 7.46378 63.736 7.18028 63.7675C6.92828 63.799 6.70778 63.61 6.67628 63.3265C6.67628 63.295 6.67628 63.2635 6.67628 63.2635L6.61328 59.515Z"
            fill="#1D1A4F"
          />
          <path
            d="M12.3477 59.704C12.3477 59.2315 12.5997 59.1055 12.9462 59.1055H15.4347C15.7497 59.1055 15.9702 59.2 15.9702 59.515C15.9702 59.8615 15.7497 59.9245 15.4347 59.9245H13.4187V60.9325H15.2142C15.4977 60.9325 15.7182 61.027 15.7182 61.342C15.7182 61.657 15.4977 61.7515 15.2142 61.7515H13.4187V62.8855H15.4977C15.8127 62.8855 16.0332 62.98 16.0332 63.295C16.0332 63.61 15.8127 63.7045 15.4977 63.7045H12.9777C12.5997 63.7045 12.3792 63.547 12.3792 63.106L12.3477 59.704Z"
            fill="#1D1A4F"
          />
          <path
            d="M16.7266 59.704C16.7266 59.2315 16.9786 59.1055 17.3251 59.1055H18.6166C19.7506 59.1055 20.8216 59.6095 20.8216 61.405C20.8216 62.854 20.0026 63.7045 18.5851 63.7045H17.3251C17.0416 63.736 16.7581 63.547 16.7266 63.232C16.7266 63.169 16.7266 63.1375 16.7266 63.0745V59.704ZM17.7661 62.854H18.6481C19.4986 62.854 19.7506 62.098 19.7506 61.405C19.7506 60.4915 19.4041 59.956 18.6166 59.956H17.7346L17.7661 62.854Z"
            fill="#1D1A4F"
          />
          <path
            d="M23.5625 59.515C23.5625 59.2315 23.783 58.9795 24.098 58.9795C24.3815 58.9795 24.6335 59.2 24.6335 59.515V62.8225H26.3975C26.7125 62.8225 26.933 62.98 26.933 63.2635C26.933 63.547 26.681 63.7045 26.3975 63.7045H24.1925C23.909 63.736 23.6255 63.547 23.594 63.232C23.594 63.169 23.594 63.1375 23.594 63.0745L23.5625 59.515Z"
            fill="#1D1A4F"
          />
          <path
            d="M27.4991 59.5148C27.4676 59.2313 27.6881 58.9793 27.9716 58.9478C28.2551 58.9163 28.5071 59.1368 28.5386 59.4203C28.5386 59.4518 28.5386 59.4833 28.5386 59.5148V63.2633C28.5701 63.5468 28.3496 63.7988 28.0661 63.8303C27.7826 63.8618 27.5306 63.6413 27.4991 63.3578C27.4991 63.3263 27.4991 63.2948 27.4991 63.2633V59.5148Z"
            fill="#1D1A4F"
          />
          <path
            d="M29.5469 59.704C29.5469 59.2315 29.7989 59.1055 30.1454 59.1055H32.4764C32.7914 59.1055 33.0119 59.2 33.0119 59.515C33.0119 59.8615 32.7914 59.9245 32.4764 59.9245H30.5864V60.9955H32.1929C32.4764 60.9955 32.6969 61.0585 32.6969 61.405C32.6969 61.72 32.4764 61.8145 32.1929 61.8145H30.5864V63.2635C30.6179 63.547 30.3974 63.799 30.1139 63.8305C29.8304 63.862 29.5784 63.6415 29.5469 63.358C29.5469 63.3265 29.5469 63.295 29.5469 63.2635V59.704Z"
            fill="#1D1A4F"
          />
          <path
            d="M33.5781 59.704C33.5781 59.2315 33.8301 59.1055 34.1766 59.1055H36.6651C36.9801 59.1055 37.2006 59.2 37.2006 59.515C37.2006 59.8615 36.9801 59.9245 36.6651 59.9245H34.6176V60.9325H36.4131C36.6966 60.9325 36.9171 61.027 36.9171 61.342C36.9171 61.657 36.6966 61.7515 36.4131 61.7515H34.6176V62.8855H36.6966C37.0116 62.8855 37.2321 62.98 37.2321 63.295C37.2321 63.61 37.0116 63.7045 36.6966 63.7045H34.1766C33.8931 63.736 33.6096 63.547 33.5781 63.232C33.5781 63.169 33.5781 63.1375 33.5781 63.0745V59.704Z"
            fill="#1D1A4F"
          />
          <path
            d="M39.9414 59.704C39.9414 59.2315 40.1934 59.1055 40.5399 59.1055H43.0284C43.3434 59.1055 43.5639 59.2 43.5639 59.515C43.5639 59.8615 43.3434 59.9245 43.0284 59.9245H40.9809V60.9325H42.7764C43.0599 60.9325 43.2804 61.027 43.2804 61.342C43.2804 61.657 43.0599 61.7515 42.7764 61.7515H40.9809V62.8855H43.0599C43.3749 62.8855 43.5954 62.98 43.5954 63.295C43.5954 63.61 43.3749 63.7045 43.0599 63.7045H40.5399C40.1619 63.7045 39.9414 63.547 39.9414 63.106V59.704Z"
            fill="#EBFFFE"
          />
          <path
            d="M45.3597 59.3259C45.4227 59.1054 45.6432 58.9794 45.8637 59.0109H46.1157C46.3677 58.9794 46.6197 59.1369 46.6827 59.3889L47.9427 62.9169C48.0057 63.0429 48.0372 63.1689 48.0372 63.3264C48.0372 63.5784 47.8167 63.7989 47.5332 63.7989C47.3127 63.8304 47.1237 63.7044 47.0607 63.5154L46.7772 62.7594H45.0762L44.7927 63.5154C44.7297 63.7044 44.5407 63.8304 44.3202 63.7989C44.0682 63.8304 43.8477 63.6414 43.8477 63.3894C43.8477 63.3579 43.8477 63.3579 43.8477 63.3264C43.8477 63.2004 43.9107 63.0429 43.9422 62.9169L45.3597 59.3259ZM45.9897 60.1449L45.3597 62.0034H46.5882L45.9897 60.1449Z"
            fill="#EBFFFE"
          />
          <path
            d="M51.0283 61.027C52.0048 61.2475 52.2568 61.8145 52.2568 62.35C52.2568 63.169 51.6268 63.799 50.3668 63.799C49.0438 63.799 48.4453 63.1375 48.4453 62.6335C48.4453 62.413 48.6343 62.1925 48.8548 62.1925H48.8863C49.4533 62.1925 49.2958 63.0115 50.3668 63.0115C50.9023 63.0115 51.2173 62.6965 51.2173 62.413C51.2173 62.224 51.1228 62.035 50.7763 61.9405L49.5793 61.6255C48.6343 61.3735 48.4453 60.838 48.4453 60.3655C48.4453 59.326 49.3903 58.948 50.3038 58.948C51.1228 58.948 52.0993 59.4205 52.0993 60.019C52.0993 60.271 51.8788 60.46 51.6583 60.4285H51.6268C51.1543 60.4285 51.2173 59.7355 50.2408 59.7355C49.7683 59.7355 49.4848 59.956 49.4848 60.271C49.4848 60.586 49.8628 60.6805 50.2093 60.775L51.0283 61.027Z"
            fill="#EBFFFE"
          />
          <path
            d="M53.9602 61.9088L52.6687 59.7668C52.6057 59.6723 52.5742 59.5778 52.5742 59.4833C52.5742 59.1998 52.8262 58.9793 53.0782 59.0108C53.0782 59.0108 53.0782 59.0108 53.1097 59.0108C53.3302 59.0108 53.5192 59.1053 53.5822 59.3258L54.4957 61.0268L55.4092 59.3258C55.4722 59.1368 55.6612 59.0108 55.8502 59.0108C56.1337 59.0108 56.3542 59.1998 56.3857 59.4833C56.3857 59.5778 56.3542 59.6723 56.2912 59.7668L54.9997 61.9088V63.2633C54.9997 63.5468 54.7792 63.7988 54.4642 63.7988C54.1807 63.7988 53.9287 63.5783 53.9287 63.2633L53.9602 61.9088Z"
            fill="#EBFFFE"
          />
        </svg> */}
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
          className="bg-white pl-9 py-3 rounded-lg w-[385px] md:w-80 focus:outline-none"
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
