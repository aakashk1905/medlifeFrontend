import React, { useRef } from "react";
import "./styles/Doctor.css";
import d1 from "../Assests/d1.png";
const Doctors = () => {
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
    <div className="rev-cont">
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
          <div className="doc-card">
            <img src={d1} alt={d1} />
            <div className="doc-det-cont">
              <div className="doc-det">
                <div className="doc-name">Dr. Shanti Roy</div>
                <div className="doc-exp">
                  43 yr+ experience |{" "}
                  <b style={{ color: "#C4C0FF" }}>Gynaecologist</b>
                </div>
              </div>
            </div>
          </div>
          <div className="doc-card">
            <img src={d1} alt={d1} />
            <div className="doc-det-cont">
              <div className="doc-det">
                <div className="doc-name">Dr. Shanti Roy</div>
                <div className="doc-exp">
                  43 yr+ experience |{" "}
                  <b style={{ color: "#C4C0FF" }}>Gynaecologist</b>
                </div>
              </div>
            </div>
          </div>
          <div className="doc-card">
            <img src={d1} alt={d1} />
            <div className="doc-det-cont">
              <div className="doc-det">
                <div className="doc-name">Dr. Shanti Roy</div>
                <div className="doc-exp">
                  43 yr+ experience |{" "}
                  <b style={{ color: "#C4C0FF" }}>Gynaecologist</b>
                </div>
              </div>
            </div>
          </div>
          <div className="doc-card">
            <img src={d1} alt={d1} />
            <div className="doc-det-cont">
              <div className="doc-det">
                <div className="doc-name">Dr. Shanti Roy</div>
                <div className="doc-exp">
                  43 yr+ experience |{" "}
                  <b style={{ color: "#C4C0FF" }}>Gynaecologist</b>
                </div>
              </div>
            </div>
          </div>
          <div className="doc-card">
            <img src={d1} alt={d1} />
            <div className="doc-det-cont">
              <div className="doc-det">
                <div className="doc-name">Dr. Shanti Roy</div>
                <div className="doc-exp">
                  43 yr+ experience |{" "}
                  <b style={{ color: "#C4C0FF" }}>Gynaecologist</b>
                </div>
              </div>
            </div>
          </div>
          <div className="doc-card">
            <img src={d1} alt={d1} />
            <div className="doc-det-cont">
              <div className="doc-det">
                <div className="doc-name">Dr. Shanti Roy</div>
                <div className="doc-exp">
                  43 yr+ experience |{" "}
                  <b style={{ color: "#C4C0FF" }}>Gynaecologist</b>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="arrow-div" onClick={() => handleScroll("right")}>
          &gt;
        </div>
      </div>
    </div>
  );
};

export default Doctors;
