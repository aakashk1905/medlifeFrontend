import React, { useRef } from "react";
import "./styles/Specialities.css";
import proctospe from "../Assests/proctospe.png";
import ext from "../Assests/external.png";
import { Link } from "react-router-dom";


const Specialities = () => {
  const cardsContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const scrollAmount = 320;
    const container = cardsContainerRef.current;

    if (container) {
      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        container.scrollLeft += scrollAmount;
      }
    }
  };
  const specialitiesInfo = [
    {
      img: proctospe,
      name: "Proctology",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link : "proctology"
    },
    {
      img: proctospe,
      name: "Laparoscopy",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link : "laparoscopy"
    },
    {
      img: proctospe,
      name: "Gynaecology",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link : "gynaecology"
    },
    {
      img: proctospe,
      name: "ENT",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link : "ent"
    },
    {
      img: proctospe,
      name: "Vascular",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link : "vascular"
    },
    {
      img: proctospe,
      name: "Aesthetics",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link : "aesthetics"
    },
    {
      img: proctospe,
      name: "Orthopedics",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link : "orthopedics"
    },
    {
      img: proctospe,
      name: "Ophthalmology",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link : "ophthalmology"
    },
    {
      img: proctospe,
      name: "Fertility",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link : "fertility"
    },
    {
      img: proctospe,
      name: "Dentistry",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link : "dentistry"
    },
    {
      img: proctospe,
      name: "Weight Loss",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link : "weightloss"
    },
    {
      img: proctospe,
      name: "Dermatology",
      details: "Specialised & advanced treatment for Anorectal Disease…",
      link : "dermatology"
    },
  ]
  return (
    <div className="spe-cont">
      <div className="spe-inner-cont">
        <div className="hero-btm-head">Our Specialities</div>

        <div className="spe-card-cont">
        {
  specialitiesInfo.map((info, index) => {
    return (
      <div key={index} className="spe-card">
        <img src={info.img} alt="procto" />
        <div className="spe-card-inner-cont">
          <div className="spe-card-head">{info.name}</div>
          <div className="spe-card-text">
            {info.details}
          </div>
          {/* <div className="spe-card-det">
            View Details
            <img src={ext} alt="external"></img>
          </div> */}
          <Link to={`/${info.link}`} className="spe-card-det">
            View Details
          </Link>
        </div>
      </div>
    );
  })
}

        </div>


        <div className="rev-car-cont revv">
          <div className="arrow-div" onClick={() => handleScroll("left")}>
            &lt;
          </div>
          <div className="arrow-div" onClick={() => handleScroll("right")}>
            &gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialities;
