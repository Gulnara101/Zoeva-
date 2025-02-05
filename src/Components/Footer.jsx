import React from "react";
import GpayLogo from "../Images/footerPayLogo/g-payy.jpg";
import AmexLogo from "../Images/footerPayLogo/amex-logo.jpeg";
import ApplePayLogo from "../Images/footerPayLogo/apple-pay.jpg";
import KlarnaLogo from "../Images/footerPayLogo/klarnaLogo.png";
import MasterCardLogo from "../Images/footerPayLogo/Mastercard_logo.webp";
import MaestroLogo from "../Images/footerPayLogo/Maestro-logo.png";
import PaypalLogo from "../Images/footerPayLogo/paypal-3384015_1280.webp";
import ShopLogo from "../Images/footerPayLogo/shopLogo.png";
import UnionLogo from "../Images/footerPayLogo/unionn.png";
import VisaLogo from "../Images/footerPayLogo/visalogo.jpg";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiOutlineTikTok } from "react-icons/ai";

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
            <div className="footerNav">
              <ul>
                Help
                <li>
                  <Link to="#">Trace my order</Link>
                </li>
                <li>
                  <Link to="#">Shipping & Delivery</Link>
                </li>
                <li>
                  <Link to="#">FAQ & Contact</Link>
                </li>
                <li>
                  <Link to="#">Contact</Link>
                </li>
                <li>
                  <Link to="#">Returns</Link>
                </li>
              </ul>
            </div>
            <div className="footerNav">
              <ul>
                Make-up
                <li>
                  <Link to="#">Eyeliner</Link>
                </li>
                <li>
                  <Link to="#">Eyeshadow Palettes</Link>
                </li>
                <li>
                  <Link to="#">Mascara</Link>
                </li>
                <li>
                  <Link to="#">Eyebrows</Link>
                </li>
                <li>
                  <Link to="#">Foundation</Link>
                </li>
                <li>
                  <Link to="#">Blush</Link>
                </li>
                <li>
                  <Link to="#">Highlighter</Link>
                </li>
                <li>
                  <Link to="#">Concealer</Link>
                </li>
              </ul>
            </div>
            <div className="footerNav">
              <ul>
                Collections
                <li>
                  <Link to="#">New</Link>
                </li>
                <li>
                  <Link to="#">Bestseller</Link>
                </li>
                <li>
                  <Link to="#">Makeup Brushes</Link>
                </li>
                <li>
                  <Link to="#">Makeup Brush Sets</Link>
                </li>
              </ul>
            </div>
            <div className="footerNav">
              <ul>
                About
                <li>
                  <Link to="#">About us</Link>
                </li>
                <li>
                  <Link to="#">Professionals</Link>
                </li>
                <li>
                  <Link to="#">Careers</Link>
                </li>
                <li>
                  <Link to="#">Our Responsibility</Link>
                </li>
                <li>
                  <Link to="#">Our Faves</Link>
                </li>
              </ul>
            </div>
            <div className="footerNav">
              <ul>
                Info
                <li>
                  <Link to="#">Legal</Link>
                </li>
                <li>
                  <Link to="#">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="#">Cookie Policy</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Cookie Banner</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footerContentBottom">
            <div className="iconLogo">
              <img src={AmexLogo} alt="#" />
              <img src={ApplePayLogo} alt="#" />
              <img src={GpayLogo} alt="#d" />
              <img src={KlarnaLogo} alt="#" />
              <img src={MasterCardLogo} alt="#" />
              <img src={MaestroLogo} alt="#" />
              <img src={PaypalLogo} alt="#" />
              <img src={ShopLogo} alt="#" />
              <img src={UnionLogo} alt="#" />
              <img src={VisaLogo} alt="#" />
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
