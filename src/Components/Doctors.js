import Swipperbtn from "./Swipperbtn";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import React, { useEffect, useState } from "react";
import "./styles/Doctor.css";
import useAxiosBaseUrl from "../hooks/useBaseUrl";
import Loader from "./Loader/Loader";
const Doctors = () => {
  const [loading, setLoading] = useState(true);

  const axiosBaseUrl = useAxiosBaseUrl();

  // Data fetch from API
  const [allDoctors, setAllDoctors] = useState([]);
  useEffect(() => {
    axiosBaseUrl
      .get("/api/v1/doctors")
      .then((res) => res.data)
      .then((data) => {
        setAllDoctors(data.doctors);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [axiosBaseUrl]);

  return (
    // <div className="rev-cont my-10">
    //   <div className="hero-btm-head">Meet your Doctors!</div>
    //   <div className="doc-text">
    //     Meet our exceptional team of doctors. Highly qualified and
    //     compassionate, they're dedicated to your well-being. With
    //     expertiseacross diverse specialties, trust them to provide top-notch
    //     medical care.
    //   </div>
    //   <div className="rev-car-cont">
    //     <div className="arrow-div" onClick={() => handleScroll("left")}>
    //       &lt;
    //     </div>
    //     <div ref={cardsContainerRef} className="rev-cards-cont">
    //       {loading ? (
    //         <Loader></Loader>
    //       ) : allDoctors.length > 0 ? (
    //         allDoctors.map((doctor, id) => (
    //           <div key={id} className="doc-card" ref={elementRef}>
    //             <img src={doctor.avatar.url} alt="Doctor" />
    //             <div className="doc-det-cont">
    //               <div className="doc-det">
    //                 <div className="doc-name">{doctor.doctorName}</div>
    //                 <div className="doc-exp">
    //                   {doctor.experience} |{" "}
    //                   <b style={{ color: "#C4C0FF" }}>{doctor.diseaseHandle}</b>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         ))
    //       ) : (
    //         <p className="text-3xl font-semibold text-center">
    //           No doctor available
    //         </p>
    //       )}
    //     </div>

    //     <div className="arrow-div" onClick={() => handleScroll("right")}>
    //       &gt;
    //     </div>
    //   </div>
    // </div>
    <div className="bg-[#f6fafb] w-full flex flex-col items-center">
      <div className="w-[95%] md:w-4/5">
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-800  text-center mb-3">
        Meet your Doctors!
        </h1>
        <p className="text-gray-500 text-center">
        Meet our exceptional team of doctors. Highly qualified and
       compassionate, they're dedicated to your well-being. With
       expertiseacross diverse specialties, trust them to provide top-notch
       medical care.
        </p>
        <div className="flex justify-center relative  ">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              375: {
                slidesPerView: 1,
              },
              425: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 3,
              },
              1366: {
                slidesPerView: 3,
              },
              1920: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[]}
            className="carousel"
          >
            {loading ? (
              <Loader></Loader>
            ) : allDoctors.length > 0 ? (
              allDoctors.map((doctor, id) => (
                <SwiperSlide key={id} className="rev-cards-cont">
                  <div className="doc-card">
                    <img src={doctor.avatar.url} alt="Doctor" />
                    <div className="doc-det-cont">
                      <div className="doc-det">
                        <div className="doc-name">{doctor.doctorName}</div>
                        <div className="doc-exp">
                          {doctor.experience} |{" "}
                          <b style={{ color: "#C4C0FF" }}>
                            {doctor.diseaseHandle}
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <p className="text-3xl font-semibold text-center">
                No doctor available
              </p>
            )}

            <div className="absolute top-44 w-full z-10">
              <Swipperbtn></Swipperbtn>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
