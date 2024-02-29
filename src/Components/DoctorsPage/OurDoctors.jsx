import React, { useEffect, useState } from "react";
import { IoBagAdd } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import useAxiosBaseUrl from "../../hooks/useBaseUrl";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const OurDoctors = () => {
  const axiosBaseUrl = useAxiosBaseUrl();
  const [loading, setLoading] = useState(true);

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
    <div className="py-10 px-5">
      <div>
        {/* Headline */}
        <h1 className="text-gray-700 text-4xl font-bold text-center mb-10">
          Our Doctors
        </h1>

        {/* Cards */}

        {loading ? (
          <Loader></Loader>
        ) : (
          <div className="">
            <div className="flex flex-col justify-center items-center gap-14">
            {allDoctors.length > 0
              ? allDoctors.map((doctor) => (
                  <Link className="w-full lg:w-5/6" to={`/doctorsDetails/${doctor._id}`}>
                    <div
                      key={doctor._id}
                      className="bg-white shadow-md shadow-md-top shadow-md-bottom border-t-2 border-gray-100 px-2 py-5 rounded-md grid grid-cols-1 lg:grid-cols-2 items-center" 
                    >
                      <div className="grid grid-cols-3 mb-2 lg:mb-4">
                        <div className="flex md:justify-start lg:justify-end mr-2 md:mr-0 lg:mr-4">
                        <img
                          className="w-36 md:w-40 lg:w-32 md:h-[180px] h-full rounded-lg border-teal-500"
                          src={doctor.avatar.url}
                          alt=""
                        />
                        </div>

                        <div className="col-span-2 -ml-0 md:-ml-10 lg:-ml-0">
                          <div className="">
                            <h1 className="text-[#17324A] text-2xl font-semibold mb-1">
                              {doctor?.doctorName}
                            </h1>
                            <p className="text-[#17324A] mb-1">
                              {" "}
                              MBBS, MS-{" "}
                              <span className="text-teal-500">
                                {doctor?.diseaseHandle}
                              </span>
                            </p>

                            <div className="w-44 h-[1px] bg-gray-700"></div>
                          </div>

                          <h3 className="text-[#17324A] text-xl font-semibold mb-2">
                            Specialization
                          </h3>

                          <div className="flex flex-wrap gap-5 items-center mb-3">
                            <div className="bg-[#F1FEFF] border border-[#9cf9ff] p-1 rounded-md ">
                              <p className="text-lg text-gray-800">
                                {doctor?.specialization1}
                              </p>
                            </div>
                            <div className="bg-[#F1FEFF] border border-[#9cf9ff] p-1 rounded-md ">
                              <p className="text-lg text-gray-800">
                                {doctor?.specialization2}
                              </p>
                            </div>
                            <div className="bg-[#F1FEFF] border border-[#9cf9ff] p-1 rounded-md ">
                              <p className="text-lg text-gray-800">
                                {doctor?.specialization3}
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-3 md:gap-6 items-center">
                            <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                              {" "}
                              <IoBagAdd></IoBagAdd>
                              <p className="text-gray-600 capitalize">{doctor?.experience}</p>
                            </h2>

                            <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                              {" "}
                              <HiLocationMarker></HiLocationMarker>{" "}
                              <p className="text-gray-600 capitalize">{doctor?.location}</p>
                            </h2>
                          </div>
                        </div>
                      </div>

                     <div className="flex justify-start md:justify-end pr-0 lg:pr-16 w-full">
                     <div className="grid grid-cols-2 lg:grid-cols-1 gap-5 w-full lg:w-80">
                        <button className="w-full border border-[#00a0aa] px-4 py-3 rounded-lg text-[#00a0aa] text-xs md:text-sm">
                          Call now +98 765 432 10
                        </button>
                        <button className="w-full bg-[#00a0aa] px-4 py-3 rounded-lg text-white border border-[#00a0aa] text-xs md:text-sm">
                          Book Your Appoinment
                        </button>
                      </div>
                     </div>
                    </div>
                  </Link>
                ))
              : "No content here"}
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurDoctors;
