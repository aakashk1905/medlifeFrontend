import React from "react";
import "./styles/Whyus.css";
import whyusdoc from "../Assests/whyusdoc.png";
const Whyus = ({content}) => {
  return (
    <div className="wu-cont">
      <div className="wu-inner-cont">
        <div className="wu-left-cont">
          <div className="wu-left-img">
            <img src={whyusdoc} alt="whyusdoc" />
          </div>
          <div className="wu-left-head">
            {/* {content.whyChooseUs.whyChooseUsHeader} */}
          </div>
          <div className="wu-left-text">
          {/* {content.whyChooseUs.whyChooseUsDetails} */}
          </div>
        </div>
        <div className="wu-right-cont">
          {/* <div className="wu-btm-head">{content.whyChooseUs.listHeader}</div> */}
          <div className="wu-pts-cont">
          {/* {
            content.whyChooseUs.lists && 
            content.whyChooseUs.lists.map((list, idx) => 
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
          } */}
          </div>
          <div className="wu-right-cta">Book Now</div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
