import Navbar from "../../Navbar";
import { Link, useParams } from "react-router-dom";
import DiseaseHeroSection from "../AllSections/DiseaseHeroSection";
import DiseaseDoc from "../DiseaseDoc";
import ExploreMedLife from "../AllSections/ExploreMedLife";
import Patientslove from '../../Patientslove';
import Blogs from "../../Blogs";
import Faqs from "../../Faq";
import Getintouch from "../../Getintouch";
import Officeaddress from "../../Officeaddress";
import Footer from "../../Footer";
import SafeDiseaseRemoval from "../AllSections/SafeDiseaseRemoval";
import AboutDisease from "../AllSections/AboutDisease";
import diseaseContent from "../../../diseaseContent.json";
import Experience from "../AllSections/Experience";

const HerniaPage = () => {
  const { subDisease } = useParams();

  const pages = [
    "hernia",
    "gallbladder",
    "appendix",
    "inguinal",
    "umbilical",
    "piles",
    "fistula",
    "pilonidal",
    "rectal",
    "uterus",
    "ovarian",
    "tympanoplasty",
    "adenoidectomy",
    "sinus",
    "septoplasty",
    "mastoidectomy",
    "fess",
    "thyroidectomy",
    "tonsillectomy",
    "stapedectomy",
    "myringotomy",
    "throat",
    "ear",
    "vocal",
    "nasal",
    "turbinate",
    "varicose",
    "varicocele",
    "gynecomastia",
    "liposuction",
    "hair",
    "knee",
    "acl",
    "hip",
    "spine",
    "lasik",
    "cataract",
    "phaco",
    "ivf",
    "iui",
    "dental",
    "dentalbraces",
    "teeth",
    "bariatric",
    "intragastric",
    "weightloss",
    "botox",
    "vampire",
    "face",
    "hairtransplant",
    "fue",
    "fut",
    "dhi",
    "gfc"
  ];
    
    
      if (!pages.includes(subDisease)) {
        alert("wrong URL!!!");
        window.location.href = "/"
      }
    
  return (
    <div>
      <Navbar></Navbar>
      {/* Breadcumber menu
      <div className="text-sm breadcrumbs px-5 md:px-10 mt-4">
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Laparoscopy</Link>
          </li>
          <li className="capitalize">{subDisease}</li>
        </ul>
      </div> */}
      <DiseaseHeroSection subDisease={subDisease} content={diseaseContent[subDisease]} ></DiseaseHeroSection>
      <SafeDiseaseRemoval content={diseaseContent[subDisease]}></SafeDiseaseRemoval>
      <DiseaseDoc docHeading={"Our Hernia Doctors"}></DiseaseDoc>
      <ExploreMedLife content={diseaseContent[subDisease]}></ExploreMedLife>
      <Experience></Experience>
      <Patientslove></Patientslove>
      <AboutDisease content={diseaseContent[subDisease]}></AboutDisease>
      <Blogs></Blogs>
      <Faqs></Faqs>
      <Getintouch></Getintouch>
      <Officeaddress></Officeaddress>
      <Footer></Footer>
    </div>
  );
};

export default HerniaPage;
