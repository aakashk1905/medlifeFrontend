import React from 'react';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import OurHospitals from './OurHospitals';

const HospitalsPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* Breadcumber menu */}
      <div className="text-sm breadcrumbs px-5 md:px-10 mt-5">
        <ul>
          <li>
          <Link to={"/"}>Home</Link>
          </li>
          <li>
            Blogs
          </li>
        </ul>
      </div>
      
      <OurHospitals></OurHospitals>


            <Footer></Footer>
        </div>
    );
};

export default HospitalsPage;