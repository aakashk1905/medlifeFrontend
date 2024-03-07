import React, { useEffect, useState } from "react";
import "./styles/DiseaseDoc.css";
import useAxiosBaseUrl from "../../hooks/useBaseUrl";
import Loader from "../Loader/Loader";
import { IoBagAdd } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Swipperbtn from "../Swipperbtn";



const DiseaseDoc = ({ docHeading, diseaseName }) => {
  const [loading, setLoading] = useState(true);


  const axiosBaseUrl = useAxiosBaseUrl();

  // Data fetch from API

  const [allDoctors, setAllDoctors] = useState([]);
  useEffect(() => {
    axiosBaseUrl
      .get(`/api/v1/doctors?diseaseHandle=${diseaseName}`)
      .then((res) => res.data)
      .then((data) => {
        setAllDoctors(data.doctors);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [diseaseName]);


  return (
    <div className="rev-cont my-14">
      <div className="hero-btm-head capitalize">{docHeading}</div>

      {
        allDoctors.length <= 2 ? (
          <div className="rev-cards-cont flex justify-center">
            {loading ? (
              <Loader></Loader>
            ) : allDoctors.length > 0 ? (
              allDoctors.map((doctor) => (
                <div key={doctor._id} className="dd-card">
                  <div className="dd-top">
                    <div className="dd-top-left mr-2">
                      <img src={doctor.avatar.url} alt="ddrc" />
                    </div>
                    <div className="dd-top-right">
                      <div className="dd-top-head">{doctor.doctorName}</div>
                      <div className="dd-top-text">
                        {" "}
                        MBBS, MS-{" "}
                        <b style={{ color: "#00A0AA", fontSize: "17px" }}>
                          {doctor.diseaseHandle}
                        </b>
                      </div>
                      <div className="bg-gray-500 w-52 h-0.5">
  
                      </div>
                      <div className="dd-top-sub-head"> Specialization</div>
                      <div className="dd-top-sp-cont">
                        <div className="dd-top-sp text-base text-gray-800">
                          {doctor.specialization1}
                        </div>
                        <div className="dd-top-sp text-gray-800">{doctor.specialization2}</div>
                        <div className="dd-top-sp text-gray-800">{doctor.specialization3}</div>
                      </div>
                      <div className="dd-top-stats-cont">
                        <div className="dd-top-stats">
                        <IoBagAdd></IoBagAdd>
                          {doctor.experience}
                        </div>
                        <div className="dd-top-stats">
                        <HiLocationMarker></HiLocationMarker>         {doctor.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dd-btm">
                    <div className="dd-call">Call now +98 765 432 10</div>
                    <div className="dd-book">Book Appointment</div>
                  </div>
                </div>
              ))
            ) : (
              <p>No Doctor available</p>
            )}
          </div>
        )
        :
        (
        //   <div className="rev-car-cont">
          
  
  
        //   <div className="rev-cards-cont">
        //     {loading ? (
        //       <Loader></Loader>
        //     ) : allDoctors.length > 0 ? (
        //       allDoctors.map((doctor) => (
        //         <div key={doctor._id} className="dd-card">
        //           <div className="dd-top">
        //             <div className="dd-top-left mr-2">
        //               <img src={doctor.avatar.url} alt="ddrc" />
        //             </div>
        //             <div className="dd-top-right">
        //               <div className="dd-top-head">{doctor.doctorName}</div>
        //               <div className="dd-top-text">
        //                 {" "}
        //                 MBBS, MS-{" "}
        //                 <b style={{ color: "#00A0AA", fontSize: "17px" }}>
        //                   {doctor.diseaseHandle}
        //                 </b>
        //               </div>
        //               <div className="bg-gray-500 w-52 h-0.5">
  
        //               </div>
        //               <div className="dd-top-sub-head"> Specialization</div>
        //               <div className="dd-top-sp-cont">
        //                 <div className="dd-top-sp text-base text-gray-800">
        //                   {doctor.specialization1}
        //                 </div>
        //                 <div className="dd-top-sp text-gray-800">{doctor.specialization2}</div>
        //                 <div className="dd-top-sp text-gray-800">{doctor.specialization3}</div>
        //               </div>
        //               <div className="dd-top-stats-cont">
        //                 <div className="dd-top-stats">
        //                 <IoBagAdd></IoBagAdd>
        //                   {doctor.experience}
        //                 </div>
        //                 <div className="dd-top-stats">
        //                 <HiLocationMarker></HiLocationMarker>         {doctor.location}
        //                 </div>
        //               </div>
        //             </div>
        //           </div>
        //           <div className="dd-btm">
        //             <div className="dd-call">Call now +98 765 432 10</div>
        //             <div className="dd-book">Book Appointment</div>
        //           </div>
        //         </div>
        //       ))
        //     ) : (
        //       <p>No Doctor available</p>
        //     )}
        //   </div>
        // </div>


        <div className="w-full flex flex-col items-center">
        <div className="w-[95%] lg:w-[90%]">
          <div className="text-gray-800 mb-7 text-3xl font-bold text-center font-lato">
            Our Patient Loves us
          </div>
  
          <div className="flex justify-center relative py-[12px]">
        <Swiper
    slidesPerView={1}
    breakpoints={{
      700: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      375: {
        slidesPerView: 1,
      },
      425: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1666: {
        slidesPerView: 3,
      },
      1366: {
        slidesPerView: 3,
      },
      1920: {
        slidesPerView: 4,
      },
    }}
    pagination={{
      clickable: true,
    }}
    className="carousel"
  >

{loading ? (
              <Loader></Loader>
            ) : allDoctors.length > 0 ? (
              allDoctors.map((doctor) => (
                <SwiperSlide key={doctor._id}>
                 <div className="dd-card">
                 <div className="dd-top">
                    <div className="dd-top-left mr-2">
                      <img src={doctor.avatar.url} alt="ddrc" />
                    </div>
                    <div className="dd-top-right">
                      <div className="dd-top-head">{doctor.doctorName}</div>
                      <div className="dd-top-text">
                        {" "}
                        MBBS, MS-{" "}
                        <b style={{ color: "#00A0AA", fontSize: "17px" }}>
                          {doctor.diseaseHandle}
                        </b>
                      </div>
                      <div className="bg-gray-500 w-52 h-0.5">
  
                      </div>
                      <div className="dd-top-sub-head"> Specialization</div>
                      <div className="dd-top-sp-cont">
                        <div className="dd-top-sp text-base text-gray-800">
                          {doctor.specialization1}
                        </div>
                        <div className="dd-top-sp text-gray-800">{doctor.specialization2}</div>
                        <div className="dd-top-sp text-gray-800">{doctor.specialization3}</div>
                      </div>
                      <div className="dd-top-stats-cont">
                        <div className="dd-top-stats">
                        <IoBagAdd></IoBagAdd>
                          {doctor.experience}
                        </div>
                        <div className="dd-top-stats">
                        <HiLocationMarker></HiLocationMarker>         {doctor.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dd-btm">
                    <div className="dd-call">Call now +98 765 432 10</div>
                    <div className="dd-book">Book Appointment</div>
                  </div>
                 </div>
                </SwiperSlide>
              ))
            ) : (
              <p>No Doctor available</p>
            )}
          

            

            <div className="absolute top-[40%] w-[100%] z-10">
      <Swipperbtn></Swipperbtn>
    </div>
        </Swiper>




    </div>
        </div>
      </div>

        )
      }

{/* 
      <div className="rev-car-cont">
        <div className="arrow-div" onClick={() => handleScroll("left")}>
          &lt;
        </div>


        <div ref={cardsContainerRef} className="rev-cards-cont">
          {loading ? (
            <Loader></Loader>
          ) : allDoctors.length > 0 ? (
            allDoctors.map((doctor) => (
              <div key={doctor._id} className="dd-card">
                <div className="dd-top">
                  <div className="dd-top-left mr-2">
                    <img src={doctor.avatar.url} alt="ddrc" />
                  </div>
                  <div className="dd-top-right">
                    <div className="dd-top-head">{doctor.doctorName}</div>
                    <div className="dd-top-text">
                      {" "}
                      MBBS, MS-{" "}
                      <b style={{ color: "#00A0AA", fontSize: "17px" }}>
                        {doctor.diseaseHandle}
                      </b>
                    </div>
                    <div className="bg-gray-500 w-52 h-0.5">

                    </div>
                    <div className="dd-top-sub-head"> Specialization</div>
                    <div className="dd-top-sp-cont">
                      <div className="dd-top-sp text-base text-gray-800">
                        {doctor.specialization1}
                      </div>
                      <div className="dd-top-sp text-gray-800">{doctor.specialization2}</div>
                      <div className="dd-top-sp text-gray-800">{doctor.specialization3}</div>
                    </div>
                    <div className="dd-top-stats-cont">
                      <div className="dd-top-stats">
                      <IoBagAdd></IoBagAdd>
                        {doctor.experience}
                      </div>
                      <div className="dd-top-stats">
                      <HiLocationMarker></HiLocationMarker>         {doctor.location}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dd-btm">
                  <div className="dd-call">Call now +98 765 432 10</div>
                  <div className="dd-book">Book Appointment</div>
                </div>
              </div>
            ))
          ) : (
            <p>No Content available</p>
          )}
        </div>

        <div className="arrow-div" onClick={() => handleScroll("right")}>
          &gt;
        </div>
      </div> */}
    </div>
  );
};
export default DiseaseDoc;
