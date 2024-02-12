import React from "react";
import DiseaseHero from "../Components/DiseasePages/DiseaseHero";
import DiseaseBlogs from "../Components/DiseasePages/DiseaseBlogs";
import Whyus from "../Components/Whyus";
import Patientslove from "../Components/Patientslove";
import Faqs from "../Components/Faq";
import Getintouch from "../Components/Getintouch";
import Officeaddress from "../Components/Officeaddress";
import Footer from "../Components/Footer";
import ChangingLives from "../Components/ChangingLives";
import DiseaseConsult from "../Components/DiseasePages/DiseaseConsult";
import DiseaseDoc from "../Components/DiseasePages/DiseaseDoc";

const DiseasePage = () => {
  return (
    <div>
      <DiseaseHero />
      <DiseaseBlogs />
      <DiseaseConsult />
      <DiseaseDoc />
      <Whyus />
      <Patientslove />
      <ChangingLives />
      <Faqs />
      <Getintouch />
      <Officeaddress />
      <Footer />
    </div>
  );
};

export default DiseasePage;
