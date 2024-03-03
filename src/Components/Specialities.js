import React, { useRef } from "react";
import "./styles/Specialities.css";
import proctospe from "../Assests/proctospe.png";
import ext from "../Assests/external.png";
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
  return (
    <div className="spe-cont">
      <div className="spe-inner-cont">
        <div className="hero-btm-head">Our Specialities</div>
        <div className="spe-card-cont">
          {Array.from({ length: 10 }, (_, i) => (
            <div className="spe-card" key={i}>
              <img src={proctospe} alt="procto" />
              <div className="spe-card-inner-cont">
                <div className="spe-card-head">Proctology</div>
                <div className="spe-card-text">
                  Specialised & advanced treatment for Anorectal Disease…
                </div>
                <div className="spe-card-det">
                  View Details
                  <img src={ext} alt="external"></img>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="rev-car-cont revv">
          <div className="arrow-div" onClick={() => handleScroll("left")}>
            &lt;
          </div>
          <div ref={cardsContainerRef} className="rev-cards-cont">
            {Array.from({ length: 10 }, (_, i) => (
              <div className="spe-card" key={i}>
                <img src={proctospe} alt="procto" />
                <div className="spe-card-inner-cont">
                  <div className="spe-card-head">Proctology</div>
                  <div className="spe-card-text">
                    Specialised & advanced treatment for Anorectal Disease…
                  </div>
                  <div className="spe-card-det">
                    View Details
                    <img src={ext} alt="external"></img>
                  </div>
                </div>
              </div>
            ))}
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
