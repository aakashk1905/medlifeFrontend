import React from 'react';
import Navbar from '../Navbar';
import BookAmbulanceHero from './BookAmbulanceHero';
import { Link } from 'react-router-dom';
import AmbulanceBookingForm from './AmbulanceBookingForm';

const BookAmbulance = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* Breadcumber menu */}
      <div className="text-sm breadcrumbs px-5 md:px-10 mt-5">
        <ul>
          <li>
          <Link to={"/"}>Home</Link>
          </li>
          <li>Book Ambulence</li>
        </ul>
      </div>
            <BookAmbulanceHero></BookAmbulanceHero>
            <AmbulanceBookingForm></AmbulanceBookingForm>
        </div>
    );
};

export default BookAmbulance;