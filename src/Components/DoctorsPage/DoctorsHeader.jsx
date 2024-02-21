import React from 'react';
import Form from '../Form';

const DoctorsHeader = () => {
    return (
        <div>
            <div className='bg-[#fcf8ff] p-10 grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div className='col-span-2'>
                <h1 className='text-3xl md:text-6xl font-bold text-blue-500 mb-8'>Consult with Top Rated <br /> Experienced Doctors Online!</h1>

<h3 className='text-[#17324A] text-2xl md:text-4xl font-semibold mb-8'>Get Free Quotation on Your <br /> Planned Surgery</h3>

<button className="w-full md:w-80 border border-[#00a0aa] px-4 py-3 rounded-md text-[#00a0aa]">
Call now +98 765 432 10
</button>
                </div>

                <Form></Form>
            </div>
        </div>
    );
};

export default DoctorsHeader;