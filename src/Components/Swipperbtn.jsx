import React from 'react';
import { useSwiper } from 'swiper/react';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const Swipperbtn = () => {
    const swipper = useSwiper();
    return (
        <div className='flex items-center justify-between'>
            <button className='' onClick={() => swipper.slidePrev()}><IoIosArrowDropleftCircle className='text-[#5854a8] text-4xl'></IoIosArrowDropleftCircle></button>

            <button onClick={() => swipper.slideNext()}><IoIosArrowDroprightCircle className='text-[#5854a8] text-4xl'></IoIosArrowDroprightCircle></button>
            
        </div>
    );
};

export default Swipperbtn;