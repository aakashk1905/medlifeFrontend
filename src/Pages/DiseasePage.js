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
import { useParams } from "react-router-dom";
import mainDiseaseContent from "../mainDiseaseContent.json"


const DiseasePage = () => {
  const {disease} = useParams();
  const pages = [
    "proctology",
    "laparoscopy",
    "gynaecology",
    "ent",
    "vascular",
    "aesthetics",
    "orthopedics",
    "ophthalmology",
    "fertility",
    "dentistry",
    "weightloss",
    "dermatology",
      ];
    
    
      if (!pages.includes(disease)) {
        // window.location.href = "/"
      }

  return (
    <div>
      <DiseaseHero content={mainDiseaseContent[disease]}/>
      <DiseaseBlogs />
      <DiseaseConsult content={mainDiseaseContent[disease]}/>
      <DiseaseDoc docHeading={"Meet Our Doctors"}/>
      <Whyus content={mainDiseaseContent[disease]}/>
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
