import React, { useEffect, useRef, useState } from "react";
import "./styles/Doctor.css";
import d1 from "../Assests/d1.png";
import useAxiosBaseUrl from "../hooks/useBaseUrl";
import Loader from "./Loader/Loader";
const Doctors = () => {
  const cardsContainerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const elementRef = useRef(null);

  const handleScroll = (direction) => {
    const width = elementRef?.current.getBoundingClientRect().width;

    const scrollAmount = width || 320;
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
    <div className="rev-cont my-10">
      <div className="hero-btm-head">Meet your Doctors!</div>
      <div className="doc-text">
        Meet our exceptional team of doctors. Highly qualified and
        compassionate, they're dedicated to your well-being. With
        expertiseacross diverse specialties, trust them to provide top-notch
        medical care.
      </div>
      <div className="rev-car-cont">
        <div className="arrow-div" onClick={() => handleScroll("left")}>
          &lt;
        </div>
        <div ref={cardsContainerRef} className="rev-cards-cont">
          {loading ? (
            <Loader></Loader>
          ) : allDoctors.length > 0 ? (
            allDoctors.map((doctor, id) => (
              <div key={id} className="doc-card" ref={elementRef}>
                <img src={doctor.avatar.url} alt="Doctor" />
                <div className="doc-det-cont">
                  <div className="doc-det">
                    <div className="doc-name">{doctor.doctorName}</div>
                    <div className="doc-exp">
                      {doctor.experience} |{" "}
                      <b style={{ color: "#C4C0FF" }}>{doctor.diseaseHandle}</b>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-3xl font-semibold text-center">
              No doctor available
            </p>
          )}
        </div>

        <div className="arrow-div" onClick={() => handleScroll("right")}>
          &gt;
        </div>
      </div>
    </div>
  );
};

export default Doctors;
