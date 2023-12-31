import React from "react";
import "./Landingpage.css";
import Hero from "../Components/Hero";
import Specialities from "../Components/Specialities";
import SocialNews from "../Components/SocialNews";
import Reviews from "../Components/Reviews";
import ChangingLives from "../Components/ChangingLives";
import Doctors from "../Components/Doctors";
import Whyus from "../Components/Whyus";
import Patientslove from "../Components/Patientslove";
import Blogs from "../Components/Blogs";
import Faqs from "../Components/Faq";
import Getintouch from "../Components/Getintouch";
import Officeaddress from "../Components/Officeaddress";
import Footer from "../Components/Footer";
const Landingpage = () => {
  return (
    <div className="lp-cont">
      <Hero />
      <Specialities />
      <SocialNews />
      <Reviews />
      <ChangingLives />
      <Doctors />
      <Whyus />
      <Patientslove />
      <Blogs />
      <Faqs />
      <Getintouch />
      <Officeaddress />
      <Footer />
    </div>
  );
};

export default Landingpage;
