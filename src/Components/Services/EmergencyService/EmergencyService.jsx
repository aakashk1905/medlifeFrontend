import React from 'react';
import Navbar from '../../Navbar';
import { Link } from 'react-router-dom';
import EmergencyServiceHero from './EmergencyServiceHero';
import EmergencyType from './EmergencyType';
import EmergencyProcedures from './EmergencyProcedures';
import DiseaseDoc from '../../DiseasePages/DiseaseDoc';
import AmbulanceService from './AmbulanceService';
import Patientslove from '../../Patientslove';
import Officeaddress from '../../Officeaddress';
import Footer from '../../Footer';

const EmergencyService = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* Breadcumber menu */}
      <div className="text-sm breadcrumbs px-5 md:px-10 mt-5">
        <ul>
          <li>
          <Link to={"/"}>Home</Link>
          </li>
          <li>Emergency services</li>
        </ul>
      </div>
      <EmergencyServiceHero></EmergencyServiceHero>
      <EmergencyType></EmergencyType>
      <EmergencyProcedures></EmergencyProcedures>
      <DiseaseDoc docHeading={"Meet Our Emergency Medical Team"}></DiseaseDoc>
      <AmbulanceService></AmbulanceService>
      <Patientslove></Patientslove>
      <Officeaddress></Officeaddress>
      <Footer></Footer>
        </div>
    );
};

export default EmergencyService;