import React from 'react';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import bankLogo from "../../Assests/bankLogo.png"
import Footer from '../Footer';

const Payments = () => {
    return (
        <div>
            <Navbar></Navbar>
        {/* Breadcumber menu */}
        <div className="text-sm breadcrumbs px-5 md:px-10 mt-5">
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>Payments</li>
          </ul>
        </div>


            <div>
            <div className="px-10">
        <h1 className="text-4xl font-medium text-gray-700 text-center mb-3">
        Payments
        </h1>
        <div className="bg-[#E3E3E3] w-full h-0.5 mb-8"></div>
        </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 pt-10 pb-16'>
            <div className='shadow-lg p-3 rounded-lg'>
                <img className='w-56' src={bankLogo} alt="" />
                <p className='mb-1'><span className='font-bold'>Name:</span> <span className='text-gray-700'>MEDLIFEEASY PRIVATE LIMITED</span></p>
                <p className='mb-1'><span className='font-bold'>A/C:</span> <span className='text-gray-700'>030705009211</span></p>
                <p className='mb-1'><span className='font-bold'>IFSC:</span> <span className='text-gray-700'>ICIC0000307</span></p>
                <p className='mb-1'><span className='font-bold'>Branch:</span> <span className='text-gray-700'> ICICI BANK KANKARBAGH, PATNA</span></p>
            </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Payments;