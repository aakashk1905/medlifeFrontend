import React from "react";
import Navbar from "../Navbar";
import aboutUs from "../../Assests/aboutUs.png";
import patient from "../../Assests/About us page icons/patient.png"
import clinics from "../../Assests/About us page icons/clinics.png"
import cities from "../../Assests/About us page icons/cities.png"
import surgeries from "../../Assests/About us page icons/surgeries.png"
import doctors from "../../Assests/About us page icons/doctors.png"
import hospitals from "../../Assests/About us page icons/hospitals.png"
import drVivekKumer from "../../Assests/dr-vivek-kumar 1.png"
import { MdOutlineDone } from "react-icons/md";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>Medlife Easy | About Us</title>
      </Helmet>
      <Navbar></Navbar>
      {/* Breadcumber menu */}
      <div className="text-sm breadcrumbs px-5 md:px-10 mt-5">
        <ul>
          <li>
          <Link to={"/"}>Home</Link>
          </li>
          <li>
            About Us
          </li>
        </ul>
      </div>
      <div className="pt-10">
        <div className="px-10">
        <h1 className="text-4xl font-medium text-gray-700 text-center mb-3">
          About Us
        </h1>

        <div className="bg-[#E3E3E3] w-full h-0.5 mb-8"></div>
        </div>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 p-10">
            <div>
              <h2 className="text-2xl font-medium text-gray-700 mb-2">
                Over view of MedLifeEasy
              </h2>
              <p className="text-gray-600 text-justify">
                Pristyn Care is a new-age healthcare company with a laser-sharp
                focus on simplifying the entire surgery journey of a patient and
                his/her attendant by offering care and assistance at each and
                every step. <br />
                Pristyn Care ensures that the patient’s experience right from
                the discovery of the right doctor, to booking an appointment at
                the clinic, getting a detailed diagnosis done, booking tests at
                a diagnostic center, getting insurance paperwork done, commuting
                from home to the hospital & back on the day of the surgery,
                admission-discharge processes at the hospital, and follow-up
                consultation after the surgery – is hassle-free and care-filled.{" "}
                <br />
                Pristyn Care commits to enhancing access and ensuring high
                quality secondary-care surgeries through an innovative care
                model. Pristyn Care operates on an innovative full- stack Care
                delivery model  to ensure that high quality surgical care is
                offered to patients at an affordable cost. The company has
                partnerships with health insurance companies and financing
                providers. These partnerships help in easy and faster cashless
                claim approvals and EMIs facilities at 0% interest. <br />
                Pristyn Care surgical centers are currently functional across 7
                metro cities – Mumbai, Pune, Delhi, Bangalore, Hyderabad,
                Chennai and Kolkata – and  35 tier 2 & 3 cities across the
                country. Operating in over 12 surgical categories such as
                General Surgery, Ophthalmology, ENT, Urology, Gynaecology,
                Pristyn Care, has successfully treated over 60,000 patients and
                completed 1 Million  patient interactions.
              </p>
            </div>

            <img src={aboutUs} alt="" />
          </div>

          {/* Achievements Section */}
          <div className="px-8 py-4 bg-[#F1F9F8] ">
          <h2 className="text-2xl font-medium text-gray-700 mb-7 text-center">
          Unveiling Our Achievements
              </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">

              <div className="bg-white p-3 rounded-md flex justify-between items-center">
                <div>
                <h3 className="text-xl text-[#5854A8] font-bold">2M+</h3>
                <p>Happy Patients</p>
                </div>
                <img src={patient} alt="" />
              </div>

              <div className="bg-white p-3 rounded-md flex justify-between items-center">
                <div>
                <h3 className="text-xl text-[#5854A8] font-bold">2M+</h3>
                <p>Clinics</p>
                </div>
                <img src={clinics} alt="" />
              </div>

              <div className="bg-white p-3 rounded-md flex justify-between items-center">
                <div>
                <h3 className="text-xl text-[#5854A8] font-bold">2M+</h3>
                <p>Cities</p>
                </div>
                <img src={cities} alt="" />
              </div>

              <div className="bg-white p-3 rounded-md flex justify-between items-center">
                <div>
                <h3 className="text-xl text-[#5854A8] font-bold">2M+</h3>
                <p>Surgeries</p>
                </div>
                <img src={surgeries} alt="" />
              </div>

              <div className="bg-white p-3 rounded-md flex justify-between items-center">
                <div>
                <h3 className="text-xl text-[#5854A8] font-bold">2M+</h3>
                <p>Doctors</p>
                </div>
                <img src={doctors} alt="" />
              </div>

              <div className="bg-white p-3 rounded-md flex justify-between items-center">
                <div>
                <h3 className="text-xl text-[#5854A8] font-bold">2M+</h3>
                <p>Hospitals</p>
                </div>
                <img src={hospitals} alt="" />
              </div>
          </div>
          </div>


         { /* Meet or Team */}
         <h2 className="text-2xl font-medium text-gray-700 text-center mt-10 mb-5">
         Meet Our Team
              </h2>
         <div className="flex justify-center items-center">
            <div className="shadow-lg p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 items-center gap-5 w-2/3">
                <img className="border-2 border-blue-600 rounded-lg" src={drVivekKumer} alt="" />
                <div>
                    <h1 className="text-2xl font-bold text-gray-700 mb-3">Dr. Vivek Kumar</h1>
                    <p className="text-gray-700">Managing Director</p>
                    <p className="text-gray-700">MedLifeEasy Private Limited</p>
                    <p className="text-gray-700 mb-4">Ex MD Apollo Trauma Center, Patna</p>

                    <p className="text-gray-700 text-justify">He is a well known public figure in medical as well as sociopolitical arena.He has more than 15 years of experience in public relations and healthcare management.</p>
                </div>
            </div>
         </div>

        

        {/* Benefits section */}
         <div className="py-16">
      <div className="p-8 bg-[#F6FCFF]">
        <h1 className="text-2xl text-start md:text-center font-semibold mb-9 text-gray-600">
        Your Benefits With
          <span className="text-teal-600 ml-2">Med Life Easy</span>
        </h1>

        {/* Bullet points (Tick icons) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-5 md:px-20">
          
              <div className="flex items-center gap-2">
            <div className="bg-[#2ca9e1] p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p className="font-semibold">Excellence in Healthcare</p>
          </div>
          
              <div className="flex items-center gap-2">
            <div className="bg-[#2ca9e1] p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p className="font-semibold">Patient-Centric Care</p>
          </div>
          
              <div className="flex items-center gap-2">
            <div className="bg-[#2ca9e1] p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p className="font-semibold"> Personalized Approach</p>
          </div>
          
              <div className="flex items-center gap-2">
            <div className="bg-[#2ca9e1] p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p className="font-semibold">State-of-the-Art Facilities</p>
          </div>
          
              <div className="flex items-center gap-2">
            <div className="bg-[#2ca9e1] p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p className="font-semibold">Accepting All Insurance Plans</p>
          </div>
          
              <div className="flex items-center gap-2">
            <div className="bg-[#2ca9e1] p-1 w-5 h-5 rounded-full flex justify-center items-center text-white">
              <MdOutlineDone></MdOutlineDone>
            </div>
            <p className="font-semibold">Zero-Cost EMI Options Available</p>
          </div>
        </div>
      </div>
        </div>

    <Footer></Footer>

      </div>
    </div>
  );
};

export default AboutUs;
