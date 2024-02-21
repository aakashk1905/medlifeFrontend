import React from "react";
import "./styles/Footer.css";
import fb from "../Assests/fb.png";
import ig from "../Assests/ig.png";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="foot-cont">
      <div className="foot-inner-cont">
        <Link to={"/aboutUs"} className="foot-text">About us</Link>
        <Link to={"/partner"} className="foot-text">Partner with us</Link>
        <Link to={"/payments"} className="foot-text">Payments</Link>
        <Link to={"/termsConditions"} className="foot-text">Terms & Conditions</Link>
        <Link to={"/privacyPolicy"} className="foot-text">Privacy Policy</Link>
        <Link to={"/refundPolicy"} className="foot-text">Refund Policy</Link>
        <Link to={"/contactUs"} className="foot-text">Contact</Link>
        <img src={fb} alt="fb" />
        <img src={ig} alt="ig" />
      </div>
    </div>
  );
};

export default Footer;
