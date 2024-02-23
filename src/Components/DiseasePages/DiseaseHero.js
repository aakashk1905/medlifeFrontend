import React from "react";
import "./styles/DiseaseHero.css";
import dhright from "../../Assests/dhright.png";
import dhc1 from "../../Assests/dhc1.png";
import dhc2 from "../../Assests/dhc2.png";
import dhc3 from "../../Assests/dhc3.png";
import { Link } from "react-router-dom";
const DiseaseHero = ({content, disease}) => {
  return (
    <div className="dh-cont">
      <div className="dh-inner-cont">
        <div className="dh-left">
          <div className="dh-left-circle"></div>
          {/* Breadcumber menu */}
      <div className="text-sm breadcrumbs mt-3 px-2">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link className="capitalize">{disease}</Link>
          </li>
        </ul>
      </div>
          <div className="dh-left-mid">
            <div className="dh-left-det-cont">
              <div className="dh-left-head flex flex-col gap-5">
                {content.heroHeader ? content.heroHeader : ""}
                <b className="dh-left-head-col">{content.subHeading ? content.subHeading : ""}</b>
              </div>
              <div className="dh-left-text">
              {content.details ? content.details : ""}
              </div>
              <div className="dh-pts-cont">
              {
                content.subLists &&
            content.subLists.map((list, idx) => 
            <div key={idx} className="dh-left-pts">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM17.707 9.707L10.707 16.707C10.512 16.902 10.256 17 10 17C9.744 17 9.488 16.902 9.293 16.707L6.293 13.707C5.902 13.316 5.902 12.684 6.293 12.293C6.684 11.902 7.316 11.902 7.707 12.293L10 14.586L16.293 8.293C16.684 7.902 17.316 7.902 17.707 8.293C18.098 8.684 18.098 9.316 17.707 9.707Z"
                fill="#2CA9E1"
              />
            </svg>
            {list}
          </div>
              )
          }
              </div>
            </div>
            <div className="dh-cta">Call now +98 765 432 10 </div>
          </div>
          <div className="dh-card-cont">
            <div className="hero-img-card">
              <div className="hero-card-head">1000+</div>
              <div className="hero-card-text">Doctors</div>
            </div>
            <div className="hero-img-card">
              <div className="hero-card-head">2000+</div>
              <div className="hero-card-text">hospitals</div>
            </div>
            <div className="hero-img-card" style={{ border: "none" }}>
              <div className="hero-card-head">500+</div>
              <div className="hero-card-text">treatments</div>
            </div>
          </div>
        </div>
        <div className="dh-right">
          <img src={dhright} alt="Hero" />
          <div className="dh-right-abs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
            >
              <g clip-path="url(#clip0_158_2164)">
                <path
                  d="M25.3333 4.49992H24V1.83325H21.3333V4.49992H10.6667V1.83325H8V4.49992H6.66667C5.18667 4.49992 4.01333 5.69992 4.01333 7.16658L4 25.8333C4 27.2999 5.18667 28.4999 6.66667 28.4999H25.3333C26.8 28.4999 28 27.2999 28 25.8333V7.16658C28 5.69992 26.8 4.49992 25.3333 4.49992ZM25.3333 25.8333H6.66667V11.1666H25.3333V25.8333ZM9.33333 13.8333H16V20.4999H9.33333V13.8333Z"
                  fill="#DFF2F1"
                />
              </g>
              <defs>
                <clipPath id="clip0_158_2164">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            Schedule Your Appointment
          </div>
        </div>
      </div>
      <div className="dh-btm-cont">
        <div className="dh-btm-card">
          <img src={dhc1} alt="dhc1" />
          <div className="dh-btm-main">
            <div className="dh-btmcard-head">
              बिहार के सर्वोत्तम अस्पताल एवं बेस्ट डॉक्टर्स
              <div className="dh-card-line"></div>
            </div>
            <div className="dh-btmcard-text">Book Your Appointment</div>
          </div>
        </div>
        <div className="dh-btm-card">
          <img src={dhc2} alt="dhc1" />
          <div className="dh-btm-main">
            <div className="dh-btmcard-head">
              अत्याधुनिक operation Theatre और उपकरण के साथ ICU सेवा
              <div className="dh-card-line"></div>
            </div>
            <div className="dh-btmcard-text">Book Your Appointment</div>
          </div>
        </div>
        <div className="dh-btm-card">
          <img src={dhc3} alt="dhc1" />
          <div className="dh-btm-main">
            <div className="dh-btmcard-head">
              स्वस्थ्य बीमा सेवा (Health insurance)
              <div className="dh-card-line"></div>
            </div>
            <div className="dh-btmcard-text">Book Your Appointment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseHero;
