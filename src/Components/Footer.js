import React from "react";
import "./styles/Footer.css";
import fb from "../Assests/fb.png";
import ig from "../Assests/ig.png";
const Footer = () => {
  return (
    <div className="foot-cont">
      <div className="foot-inner-cont">
        <div className="foot-text">About us</div>
        <div className="foot-text">Partner with us</div>
        <div className="foot-text">Payments</div>
        <div className="foot-text">Terms & Conditions</div>
        <div className="foot-text">Privacy Policy</div>
        <div className="foot-text">Refund Policy</div>
        <div className="foot-text">Contact</div>
        <img src={fb} alt="fb" />
        <img src={ig} alt="ig" />
      </div>
    </div>
  );
};

export default Footer;
