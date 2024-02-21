import React from 'react';
import Navbar from '../Navbar';
import DoctorsHeader from './DoctorsHeader';
import OurDoctors from './OurDoctors';
import Footer from '../Footer';

const DoctorsPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <DoctorsHeader></DoctorsHeader>
            <OurDoctors></OurDoctors>
            <Footer></Footer>
        </div>
    );
};

export default DoctorsPage;