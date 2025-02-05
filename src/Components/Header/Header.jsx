import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { CiUser, CiShoppingBasket } from "react-icons/ci";
import Logo from "../../Images/svg/logo.svg";
import navBarData from "../../Mocks/headerData";

const Header = () => {
  return (
    <header>
      <div className="row">
        <div className="topBar">
          <Link to="https://uk.trustpilot.com/review/www.zoevacosmetics.com?sort=recency">
            Free EU-wide Delivery | Rated EXCELLENT on Trustpilot
          </Link>
        </div>
        <div className="headerActions">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="userControls">
            <IoSearchOutline className="icon" />
            <p>SEARCH</p>
            <CiUser className="icon" />
            <CiShoppingBasket className="icon" />
            <img src="#" alt="" />
            <p className="lng">ENGLISH</p>
            <div className="quantities">
              <span>1</span>
            </div>
            {}
          </div>
        </div>
        <nav className="navBar">
          <ul className="navList">
            <li className="navItem">
              <Link to="#" className="new">
                NEW
              </Link>
            </li>
            {navBarData.map((item) => (
              <li key={item.id} className="navItem">
                <Link to="#">{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
