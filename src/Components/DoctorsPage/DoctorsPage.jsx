import React from "react";
import Navbar from "../Navbar";
import DoctorsHeader from "./DoctorsHeader";
import OurDoctors from "./OurDoctors";
import Footer from "../Footer";
import { Helmet } from "react-helmet-async";

const DoctorsPage = () => {
  return (
    <div>
      <Helmet>
        <title>Medlife Easy | Doctors</title>
      </Helmet>
      <Navbar></Navbar>
      <DoctorsHeader></DoctorsHeader>
      <OurDoctors></OurDoctors>
      <Footer></Footer>
    </div>
  );
};

export default DoctorsPage;
