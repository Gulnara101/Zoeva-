import React from "react";
import footerPaymentIcons from "../Mocks/footerPaymentIcon";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiOutlineTikTok } from "react-icons/ai";
import footerData from "../Mocks/footerData";

const Footer = () => {
  return (
    <footer>
      <div className="footerGetOff">
        <h3>10% off</h3>
        <p>your first order</p>
        <p>Sign up for the newsletter now</p>
        <form>
          <input type="text" placeholder="E-mail" required />
          <button type="submit">GET 10% OFF</button>
        </form>
      </div>
      <div className="container">
        <div className="row">
          <div className="footerContentTop">
            <div className="socialIcon">
              <Link to="https://www.facebook.com/">
                <FaFacebookSquare className="icons" />
              </Link>
              <Link to="https://www.instagram.com/">
                <FaInstagram className="icons" />
              </Link>
              <Link to="https://www.tiktok.com/">
                <AiOutlineTikTok className="icons" />
              </Link>
              <Link to="https://www.youtube.com/">
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
