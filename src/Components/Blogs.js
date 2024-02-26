import React from "react";
import "./styles/Blogs.css";
import kidney from "../Assests/kidney.png";
const Blogs = () => {
  return (
    <div className="blogs-cont">
      <div className="hero-btm-head">Check out the Blog Section</div>
      <div className="blogs-inner-cont">
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className="blog-card">
            <img src={kidney} alt="kidney"></img>
            <div className="blog-card-inner-cont">
              <div className="blog-card-head">Doctors In Bihar</div>
              <div className="blog-card-text">
                Your dedication to providing healthcare services in Bihar is
                commendable. Your tireless efforts play a crucial role in
                enhancing the well-being of the community. Amidst diverse
                healthcare challenges, your commitment to...
              </div>
              <div className="blog-card-cta">Read More</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
