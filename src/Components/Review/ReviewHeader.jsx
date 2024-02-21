import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const ReviewHeader = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="col-span-2">
          <button className="w-80 bg-[#00A0AA] px-4 py-5 rounded-md text-white text-xl mb-20">
            Leave a Review
          </button>

          {/* Left side reviews section */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-3 col-span-2 mb-8">
<div className="border-b md:border-b-0 md:border-r pb-2 md:pb-0 border-gray-700">
    <h2 className="text-xl font-semibold text-center mb-4">Total Reviews</h2>
    <h2 className="text-2xl font-semibold text-center mb-4">10.03K</h2>
    <p className="text-center">Yearly Progress in Patient Feedback</p>
</div>

{/* Reviews Card with star icon */}
<div className="border-b md:border-b-0 md:border-r pb-2 md:pb-0 border-gray-700 flex flex-col gap-4">
    <h2 className="text-xl font-semibold text-center">Average Rating</h2>
    <div className="flex items-center justify-center gap-5">
    <h2 className="text-xl font-semibold">4.7</h2>
    <div className="flex items-center gap-2">
       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
<path d="M12.7591 1.35563L15.2828 7.11188C15.3778 7.32851 15.5291 7.51569 15.721 7.65388C15.913 7.79207 16.1385 7.8762 16.3741 7.8975L22.5222 8.44875C23.2178 8.55 23.4953 9.40312 22.9909 9.89437L18.3597 13.785C17.9847 14.1 17.8141 14.595 17.9172 15.0731L19.2634 21.375C19.3816 22.0669 18.6559 22.5956 18.0334 22.2675L12.6672 19.125C12.4648 19.0062 12.2344 18.9436 11.9997 18.9436C11.765 18.9436 11.5346 19.0062 11.3322 19.125L5.96595 22.2656C5.34532 22.5919 4.61782 22.065 4.73595 21.3731L6.0822 15.0712C6.18345 14.5931 6.0147 14.0981 5.6397 13.7831L1.00657 9.89625C0.504072 9.40687 0.781572 8.55188 1.47532 8.45062L7.62345 7.89937C7.85901 7.87808 8.08453 7.79395 8.27648 7.65576C8.46843 7.51756 8.61977 7.33038 8.7147 7.11375L11.2384 1.3575C11.5516 0.7275 12.4478 0.7275 12.7591 1.35563Z" fill="#FDD835"/>
<path d="M12.5758 7.45696L12.1483 3.21571C12.1314 2.97946 12.0827 2.57446 12.4614 2.57446C12.7614 2.57446 12.9246 3.19884 12.9246 3.19884L14.2071 6.60384C14.6908 7.89946 14.4921 8.34384 14.0252 8.60634C13.4889 8.90634 12.6977 8.67196 12.5758 7.45696Z" fill="#FFFF8D"/>
<path d="M17.8631 13.4079L21.5418 10.5373C21.7237 10.3854 22.0518 10.1435 21.7893 9.86789C21.5812 9.65039 21.0187 9.96351 21.0187 9.96351L17.7994 11.2216C16.8394 11.5535 16.2019 12.0448 16.1456 12.6635C16.0725 13.4885 16.8131 14.1241 17.8631 13.4079Z" fill="#F4B400"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"> 
<path d="M12.7591 1.35563L15.2828 7.11188C15.3778 7.32851 15.5291 7.51569 15.721 7.65388C15.913 7.79207 16.1385 7.8762 16.3741 7.8975L22.5222 8.44875C23.2178 8.55 23.4953 9.40312 22.9909 9.89437L18.3597 13.785C17.9847 14.1 17.8141 14.595 17.9172 15.0731L19.2634 21.375C19.3816 22.0669 18.6559 22.5956 18.0334 22.2675L12.6672 19.125C12.4648 19.0062 12.2344 18.9436 11.9997 18.9436C11.765 18.9436 11.5346 19.0062 11.3322 19.125L5.96595 22.2656C5.34532 22.5919 4.61782 22.065 4.73595 21.3731L6.0822 15.0712C6.18345 14.5931 6.0147 14.0981 5.6397 13.7831L1.00657 9.89625C0.504072 9.40687 0.781572 8.55188 1.47532 8.45062L7.62345 7.89937C7.85901 7.87808 8.08453 7.79395 8.27648 7.65576C8.46843 7.51756 8.61977 7.33038 8.7147 7.11375L11.2384 1.3575C11.5516 0.7275 12.4478 0.7275 12.7591 1.35563Z" fill="#FDD835"/>
<path d="M12.5758 7.45696L12.1483 3.21571C12.1314 2.97946 12.0827 2.57446 12.4614 2.57446C12.7614 2.57446 12.9246 3.19884 12.9246 3.19884L14.2071 6.60384C14.6908 7.89946 14.4921 8.34384 14.0252 8.60634C13.4889 8.90634 12.6977 8.67196 12.5758 7.45696Z" fill="#FFFF8D"/>
<path d="M17.8631 13.4079L21.5418 10.5373C21.7237 10.3854 22.0518 10.1435 21.7893 9.86789C21.5812 9.65039 21.0187 9.96351 21.0187 9.96351L17.7994 11.2216C16.8394 11.5535 16.2019 12.0448 16.1456 12.6635C16.0725 13.4885 16.8131 14.1241 17.8631 13.4079Z" fill="#F4B400"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
<path d="M12.7591 1.35563L15.2828 7.11188C15.3778 7.32851 15.5291 7.51569 15.721 7.65388C15.913 7.79207 16.1385 7.8762 16.3741 7.8975L22.5222 8.44875C23.2178 8.55 23.4953 9.40312 22.9909 9.89437L18.3597 13.785C17.9847 14.1 17.8141 14.595 17.9172 15.0731L19.2634 21.375C19.3816 22.0669 18.6559 22.5956 18.0334 22.2675L12.6672 19.125C12.4648 19.0062 12.2344 18.9436 11.9997 18.9436C11.765 18.9436 11.5346 19.0062 11.3322 19.125L5.96595 22.2656C5.34532 22.5919 4.61782 22.065 4.73595 21.3731L6.0822 15.0712C6.18345 14.5931 6.0147 14.0981 5.6397 13.7831L1.00657 9.89625C0.504072 9.40687 0.781572 8.55188 1.47532 8.45062L7.62345 7.89937C7.85901 7.87808 8.08453 7.79395 8.27648 7.65576C8.46843 7.51756 8.61977 7.33038 8.7147 7.11375L11.2384 1.3575C11.5516 0.7275 12.4478 0.7275 12.7591 1.35563Z" fill="#FDD835"/>
<path d="M12.5758 7.45696L12.1483 3.21571C12.1314 2.97946 12.0827 2.57446 12.4614 2.57446C12.7614 2.57446 12.9246 3.19884 12.9246 3.19884L14.2071 6.60384C14.6908 7.89946 14.4921 8.34384 14.0252 8.60634C13.4889 8.90634 12.6977 8.67196 12.5758 7.45696Z" fill="#FFFF8D"/>
<path d="M17.8631 13.4079L21.5418 10.5373C21.7237 10.3854 22.0518 10.1435 21.7893 9.86789C21.5812 9.65039 21.0187 9.96351 21.0187 9.96351L17.7994 11.2216C16.8394 11.5535 16.2019 12.0448 16.1456 12.6635C16.0725 13.4885 16.8131 14.1241 17.8631 13.4079Z" fill="#F4B400"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
<path d="M12.7591 1.35563L15.2828 7.11188C15.3778 7.32851 15.5291 7.51569 15.721 7.65388C15.913 7.79207 16.1385 7.8762 16.3741 7.8975L22.5222 8.44875C23.2178 8.55 23.4953 9.40312 22.9909 9.89437L18.3597 13.785C17.9847 14.1 17.8141 14.595 17.9172 15.0731L19.2634 21.375C19.3816 22.0669 18.6559 22.5956 18.0334 22.2675L12.6672 19.125C12.4648 19.0062 12.2344 18.9436 11.9997 18.9436C11.765 18.9436 11.5346 19.0062 11.3322 19.125L5.96595 22.2656C5.34532 22.5919 4.61782 22.065 4.73595 21.3731L6.0822 15.0712C6.18345 14.5931 6.0147 14.0981 5.6397 13.7831L1.00657 9.89625C0.504072 9.40687 0.781572 8.55188 1.47532 8.45062L7.62345 7.89937C7.85901 7.87808 8.08453 7.79395 8.27648 7.65576C8.46843 7.51756 8.61977 7.33038 8.7147 7.11375L11.2384 1.3575C11.5516 0.7275 12.4478 0.7275 12.7591 1.35563Z" fill="#FDD835"/>
<path d="M12.5758 7.45696L12.1483 3.21571C12.1314 2.97946 12.0827 2.57446 12.4614 2.57446C12.7614 2.57446 12.9246 3.19884 12.9246 3.19884L14.2071 6.60384C14.6908 7.89946 14.4921 8.34384 14.0252 8.60634C13.4889 8.90634 12.6977 8.67196 12.5758 7.45696Z" fill="#FFFF8D"/>
<path d="M17.8631 13.4079L21.5418 10.5373C21.7237 10.3854 22.0518 10.1435 21.7893 9.86789C21.5812 9.65039 21.0187 9.96351 21.0187 9.96351L17.7994 11.2216C16.8394 11.5535 16.2019 12.0448 16.1456 12.6635C16.0725 13.4885 16.8131 14.1241 17.8631 13.4079Z" fill="#F4B400"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
<path d="M12.7591 1.35563L15.2828 7.11188C15.3778 7.32851 15.5291 7.51569 15.721 7.65388C15.913 7.79207 16.1385 7.8762 16.3741 7.8975L22.5222 8.44875C23.2178 8.55 23.4953 9.40312 22.9909 9.89437L18.3597 13.785C17.9847 14.1 17.8141 14.595 17.9172 15.0731L19.2634 21.375C19.3816 22.0669 18.6559 22.5956 18.0334 22.2675L12.6672 19.125C12.4648 19.0062 12.2344 18.9436 11.9997 18.9436C11.765 18.9436 11.5346 19.0062 11.3322 19.125L5.96595 22.2656C5.34532 22.5919 4.61782 22.065 4.73595 21.3731L6.0822 15.0712C6.18345 14.5931 6.0147 14.0981 5.6397 13.7831L1.00657 9.89625C0.504072 9.40687 0.781572 8.55188 1.47532 8.45062L7.62345 7.89937C7.85901 7.87808 8.08453 7.79395 8.27648 7.65576C8.46843 7.51756 8.61977 7.33038 8.7147 7.11375L11.2384 1.3575C11.5516 0.7275 12.4478 0.7275 12.7591 1.35563Z" fill="#FDD835"/>
<path d="M12.5758 7.45696L12.1483 3.21571C12.1314 2.97946 12.0827 2.57446 12.4614 2.57446C12.7614 2.57446 12.9246 3.19884 12.9246 3.19884L14.2071 6.60384C14.6908 7.89946 14.4921 8.34384 14.0252 8.60634C13.4889 8.90634 12.6977 8.67196 12.5758 7.45696Z" fill="#FFFF8D"/>
<path d="M17.8631 13.4079L21.5418 10.5373C21.7237 10.3854 22.0518 10.1435 21.7893 9.86789C21.5812 9.65039 21.0187 9.96351 21.0187 9.96351L17.7994 11.2216C16.8394 11.5535 16.2019 12.0448 16.1456 12.6635C16.0725 13.4885 16.8131 14.1241 17.8631 13.4079Z" fill="#F4B400"/>
        </svg>
    </div>

    </div>
    <p className="text-center">Average rating this year</p>
</div>


{/* Rating counter section */}

<div className="md:col-span-2">
    {/* 5 star  */}
<div className="flex items-center gap-4">
    {/* Left Round circle */}
    <div className="w-4 h-4 rounded-full bg-[#D9D9D9]"></div>
    <p>5</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="324" height="8" viewBox="0 0 324 8" fill="none">
        <path d="M3 3.72949L321 4.27031" stroke="#00C193" stroke-width="6" stroke-linecap="round"/>
    </svg>
    <h3 className="text-xl font-semibold">2.0K</h3>
</div>

 {/* 4 star  */}
<div className="flex items-center gap-4">
    {/* Left Round circle */}
    <div className="w-4 h-4 rounded-full bg-[#D9D9D9]"></div>
    <p>4</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="260" height="8" viewBox="0 0 260 8" fill="none">
        <path d="M3 3.78394L257 4.21591" stroke="#FFB4AA" stroke-width="6" stroke-linecap="round"/>
    </svg>
    <h3 className="text-xl font-semibold">2.0K</h3>
</div>

 {/* 3 star  */}
<div className="flex items-center gap-4">
    {/* Left Round circle */}
    <div className="w-4 h-4 rounded-full bg-[#D9D9D9]"></div>
    <p>3</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="216" height="8" viewBox="0 0 216 8" fill="none">
        <path d="M3 3.82153L213 4.17868" stroke="#A6A1FC" stroke-width="6" stroke-linecap="round"/>
    </svg>
    <h3 className="text-xl font-semibold">2.0K</h3>
</div>

 {/* 2 star  */}
<div className="flex items-center gap-4">
    {/* Left Round circle */}
    <div className="w-4 h-4 rounded-full bg-[#D9D9D9]"></div>
    <p>2</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="99" height="8" viewBox="0 0 99 8" fill="none">
        <path d="M3 3.86621L96 4.13384" stroke="#2CA9E1" stroke-width="6" stroke-linecap="round"/>
    </svg>
    <h3 className="text-xl font-semibold">2.0K</h3>
</div>

 {/* 1 star  */}
<div className="flex items-center gap-4">
    {/* Left Round circle */}
    <div className="w-4 h-4 rounded-full bg-[#D9D9D9]"></div>
    <p>1</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
<path d="M3 3.86475L10 4.13525" stroke="#C0000C" stroke-width="6" stroke-linecap="round"/>
</svg>
    <h3 className="text-xl font-semibold">2.0K</h3>
</div>
</div>
</div>


<div className="p-3 rounded-md shadow-md grid grid-cols-2 md:grid-cols-4 gap-3 items-center">
    {/* Filter by city dropdown */}
<div class="relative inline-block text-left w-full">
  <select class="block appearance-none bg-white border border-gray-300 px-4 py-2 pr-8 focus:outline-none focus:border-teal-700 cursor-pointer w-full rounded-md">
  <option disabled selected>By City</option>
  <option value="Mumbai">Mumbai</option>
  <option value="Patna">Patna</option>
  <option value="Chennai">Chennai</option>
  <option value="Kolkata"> Kolkata </option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <IoIosArrowDown></IoIosArrowDown>
  </div>
</div>

{/* Filter by disease dropdown */}
<div class="relative inline-block text-left w-full">
  <select class="block appearance-none bg-white border border-gray-300 px-4 py-2 pr-8 focus:outline-none focus:border-teal-700 cursor-pointer w-full rounded-md">
  <option disabled selected>By Disease</option>
  <option value="Mumbai">Mumbai</option>
  <option value="Patna">Patna</option>
  <option value="Chennai">Chennai</option>
  <option value="Kolkata"> Kolkata </option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <IoIosArrowDown></IoIosArrowDown>
  </div>
</div>

{/* Filter by rating dropdown */}
<div class="relative inline-block text-left w-full">
  <select class="block appearance-none bg-white border border-gray-300 px-4 py-2 pr-8 focus:outline-none focus:border-teal-700 cursor-pointer w-full rounded-md">
  <option disabled selected>By Rating</option>
  <option value="Mumbai">Mumbai</option>
  <option value="Patna">Patna</option>
  <option value="Chennai">Chennai</option>
  <option value="Kolkata"> Kolkata </option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <IoIosArrowDown></IoIosArrowDown>
  </div>
</div>

<button className="w-full bg-[#00A0AA] px-4 py-2 rounded-md text-white">
            Apply filter
          </button>
</div>
        </div>


        {/* Right side form */}
<div className="bg-white shadow-xl mb-7 md:mb-0 border p-3 rounded flex flex-col justify-center items-center gap-3">
<h1 className="text-3xl mb-3 text-center font-semibold">
Get in Touch
</h1>
<h2 className="text-[#5854A8] text-xl font-semibold text-center mb-3">चिकित्सा उपचार परामर्श के लिए, फॉर्म भरें</h2>
<input
  className="p-4 rounded-xl border border-gray-400 outline-none w-full"
  placeholder="Patient Name / रोगी का नाम"
  type="text"
/>
<input
  className="p-4 rounded-xl border border-gray-400 outline-none w-full"
  placeholder="Mobile No. / मोबाइल नंबर"
  type="text"
/>
<select
  name="priority"
  className="p-4 rounded-xl border border-gray-400 outline-none w-full"
>
  <option disabled selected>
  Select City / शहर चुनें
  </option>
  <option value="Mumbai">Mumbai</option>
  <option value="Patna">Patna</option>
  <option value="Chennai">Chennai</option>
  <option value="Kolkata"> Kolkata </option>
</select>


<select
  name="priority"
  className="p-4 rounded-xl border border-gray-400 outline-none w-full"
>
  <option disabled selected>
  Select Disease / रोग का चयन करें
  </option>
  <option value="Hernia">Hernia</option>
  <option value="Cancer">Cancer</option>
  <option value="Blood Pressure">Blood Pressure</option>
  <option value="Diphtheria"> Diphtheria </option>
</select>
<button className=" w-full bg-[#00a0aa] px-4 py-5 rounded-xl text-white border border-[#00a0aa]">
Book Free Appointment
</button>
</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewHeader;
