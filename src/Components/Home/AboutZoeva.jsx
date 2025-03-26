import React from "react";
import { Link } from "react-router-dom";
import Aboutsec from "../../Images/zoeva-about (1).jpg";

const AboutZoeva = () => {
  return (
    <section className="aboutsec"> 
      <div className="container">
        <div className="row">
          <div className="aboutText">
            <h3>About Zoeva</h3>
            <span>
              Meet our founder Zoe Boikou and learn more about the story behind
            </span>
            <span>ZOEVA</span>
            <Link>LEARN MORE</Link>
          </div>
          <div className="aboutImage">
            <img src={Aboutsec} alt="#" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutZoeva;
