import React, { useState } from "react";
import footerPaymentIcons from "../../Mocks/footerPaymentIcon";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiOutlineTikTok } from "react-icons/ai";
import footerData from "../../Mocks/footerData";
import FooterTwo from "../Footer/FooterTwo";
import greenStar from "../../Images/svg/greenStar.svg";
import greenStarTwo from "../../Images/svg/greenStarTwo.svg";

const Footer = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <footer>
      <div className="footerGetOff">
        <h3>10% off</h3>
        <p className="p">your first order</p>
        <p className="p">Sign up for the newsletter now</p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="discountForm">
            <input type="email" placeholder="E-mail" required />
            <button type="submit">GET 10% OFF</button>
          </form>
        ) : (
          <h3 className="confirmationMessage">
            Welcome to the Sisterhood!
            <p>
              Please confirm your email address via the link in the confirmation
              email!
            </p>
          </h3>
        )}
      </div>
      <div className="container">
        <div className="row">
          <div className="footerContentTop">
            <div className="socialIcon">
              <Link to="https://www.facebook.com/" target="blank">
                <FaFacebookSquare className="icons" />
              </Link>
              <Link to="https://www.instagram.com/" target="blank">
                <FaInstagram className="icons" />
              </Link>
              <Link to="https://www.tiktok.com/" target="blank">
                <AiOutlineTikTok className="icons" />
              </Link>
              <Link to="https://www.youtube.com/" target="blank">
                <FaYoutube className="icons" />
              </Link>
            </div>
            {footerData.map((item) => (
              <div key={item.id} className="footerNav">
                <ul>
                  {item.title}
                  {item.links.map((link) => (
                    <li key={link.id}>
                      <Link to="#">{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="footerActive">
              <FooterTwo />
            </div>
          </div>
          <div className="footerContentMedium">
            <h2>Excellent</h2>
            <img src={greenStar} alt="#" />
            <p>2.393 reviews on</p>
            <img src={greenStarTwo} alt="#" className="trustpilot" />
          </div>
          <div className="footerContentBottom">
            <div className="iconLogo">
              {footerPaymentIcons.map((item) => (
                <img key={item.id} src={item.image} alt="#" />
              ))}
            </div>
            <div className="paymentMethod">
              <p>c 2025 , ZOEVA Cosmetics</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
