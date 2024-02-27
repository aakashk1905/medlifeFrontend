import React from "react";
import "./styles/Hero.css";
import heroDoc from "../Assests/heroDoc.png";
import piles from "../Assests/piles.svg";
// import Navbar from "./Navbar";
import Form from "./Form";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-cont">
      {/* <Navbar /> */}
      <div className="hero-top-cont">
        <div className="hero-head-cont">
          {/* Breadcumber menu */}
      <div className="text-sm breadcrumbs ">
        <ul>
          <li>
          <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>
          <div className="hero-head">Welcome to Med Life Easy</div>
          <div className="hero-text">Your Path to Health and Happiness</div>
          <div className="hero-img-cont">
            <img src={heroDoc} alt="herodoc" />
            <div className="hero-img-abs">
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
        </div>
        <div className="z-10 mt-7 lg:-mt-48 w-full lg:w-1/3">
          <Form header={"Book Free Consultation"} />
        </div>
      </div>
      <div className="hero-btm-cont">
        <div className="block md:hidden">
        <p className="text-3xl text-gray-800 mb-4">For Further Enquiries</p>
        <button className="w-full h-[64px] border border-[#00a0aa] rounded-2xl text-[#00a0aa] mb-6">
            Call now +98 765 432 10
          </button>
        </div>
        <div className="hero-btm-head">Surgeries We Perform</div>
        <div className="hero-btm-cards-cont">
          <div className="hero-btm-card">
            <img src={piles} alt="piles" />
            <span>Piles</span>
          </div>
          <div className="hero-btm-card">
            <img src={piles} alt="piles" />
            <span>Piles</span>
          </div>
          <div className="hero-btm-card">
            <img src={piles} alt="piles" />
            <span>Piles</span>
          </div>
          <div className="hero-btm-card">
            <img src={piles} alt="piles" />
            <span>Piles</span>
          </div>
          <div className="hero-btm-card">
            <img src={piles} alt="piles" />
            <span>Piles</span>
          </div>
          <div className="hero-btm-card">
            <img src={piles} alt="piles" />
            <span>Piles</span>
          </div>
          <div className="hero-btm-card">
            <img src={piles} alt="piles" />
            <span>Piles</span>
          </div>
        </div>
        <div className="hero-btm-vm">
          View More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M7.58725 9.98976C7.61497 9.96183 7.62884 9.94787 7.64094 9.93647C8.02511 9.57448 8.62448 9.57342 9.00993 9.93405C9.02207 9.94541 9.03598 9.95932 9.06381 9.98715L11.6913 12.6146C12.3579 13.2813 12.6913 13.6146 13.1055 13.6146C13.5197 13.6146 13.853 13.2813 14.5197 12.6146L17.1471 9.98715C17.175 9.95932 17.1889 9.94541 17.201 9.93405C17.5865 9.57342 18.1858 9.57448 18.57 9.93647C18.5821 9.94787 18.596 9.96183 18.6237 9.98976C18.6512 10.0175 18.665 10.0314 18.6763 10.0435C19.0338 10.4283 19.0328 11.0241 18.6739 11.4075C18.6626 11.4196 18.6487 11.4335 18.6211 11.4611L14.5197 15.5625C13.853 16.2292 13.5197 16.5625 13.1055 16.5625C12.6913 16.5625 12.3579 16.2292 11.6913 15.5625L7.58985 11.4611C7.5622 11.4335 7.54838 11.4196 7.53706 11.4075C7.17816 11.0241 7.17711 10.4283 7.53465 10.0435C7.54592 10.0314 7.5597 10.0175 7.58725 9.98976Z"
              fill="#00A79D"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
