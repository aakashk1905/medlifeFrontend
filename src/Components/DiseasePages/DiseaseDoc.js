import React, { useEffect, useRef, useState } from "react";
import "./styles/DiseaseDoc.css";
import ddcard1 from "../../Assests/ddcard1.svg";
import useAxiosBaseUrl from "../../hooks/useBaseUrl";
import Loader from "../Loader/Loader";
const DiseaseDoc = ({ docHeading, diseaseName }) => {
  const cardsContainerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const handleScroll = (direction) => {
    const scrollAmount = 497;
    const container = cardsContainerRef.current;

    if (container) {
      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        container.scrollLeft += scrollAmount;
      }
    }
  };

  const axiosBaseUrl = useAxiosBaseUrl();

  // Data fetch from API

  const [allDoctors, setAllDoctors] = useState([]);
  console.log(allDoctors);
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
    <div className="rev-cont">
      <div className="hero-btm-head capitalize">{docHeading}</div>

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
                  <div className="dd-top-left">
                    <img src={ddcard1} alt="ddrc" />
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
                    <div className="dd-top-sub-head"> Specialization</div>
                    <div className="dd-top-sp-cont">
                      <div className="dd-top-sp text-base">
                        {doctor.specialization1}
                      </div>
                      <div className="dd-top-sp">{doctor.specialization2}</div>
                      <div className="dd-top-sp">{doctor.specialization3}</div>
                    </div>
                    <div className="dd-top-stats-cont">
                      <div className="dd-top-stats">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          {/* ... SVG path for experience ... */}
                        </svg>
                        {doctor.experience}
                      </div>
                      <div className="dd-top-stats">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          {/* ... SVG path for 2k ... */}
                        </svg>
                        2k
                      </div>
                      <div className="dd-top-stats">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          {/* ... SVG path for location ... */}
                        </svg>
                        {doctor.location}
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
      </div>
    </div>
  );
};
export default DiseaseDoc;
