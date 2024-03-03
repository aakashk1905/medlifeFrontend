import React, { useEffect } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import mainDiseaseContent from "../mainDiseaseContent.json";
import DiseaseInfo from "../Components/DiseasePages/DiseaseInfo";
import OurSpecialities from "../Components/DiseasePages/OurSpecialities";
import SafeDiseaseRemoval from "../Components/DiseasePages/AllSections/SafeDiseaseRemoval";

const DiseasePage = () => {
  const { disease } = useParams();
  const naviagate = useNavigate();
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

  useEffect(() => {
    if (!pages.includes(disease)) {
      naviagate("/error");
    }
  }, []);
  return (
    <div>
      <DiseaseHero disease={disease} content={mainDiseaseContent[disease]} />
      <DiseaseInfo
        disease={disease}
        content={mainDiseaseContent[disease]}
      ></DiseaseInfo>
      <OurSpecialities></OurSpecialities>
      {/* <DiseaseBlogs /> */}
      {/* <DiseaseConsult content={mainDiseaseContent[disease]} /> */}
      <DiseaseDoc docHeading={"Meet Our Doctors"} diseaseName={disease} />
      <SafeDiseaseRemoval
        content={mainDiseaseContent[disease]}
      ></SafeDiseaseRemoval>
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
