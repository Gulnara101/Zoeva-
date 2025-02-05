import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { CiUser, CiShoppingBasket } from "react-icons/ci";
import Logo from "../../Images/svg/logo.svg";
import BrushSets from "../Header/BrushSets";
import Brushes from "../Header/Brushes";
import Face from "../Header/Face";
import Eyes from "../Header/Eyes";
import Lips from "../Header/Lips";
import Accessories from "../Header/Accessories";

const Header = () => {
  const [activeSets, setActiveSets] = useState(false);
  const [activeBrush, setActiveBrush] = useState(false);
  const [activeFace, setActiveFace] = useState(false);
  const [activeEyes, setActiveEyes] = useState(false);
  const [activeLips, setActiveLips] = useState(false);
  const [activeAccessories, setActiveAccessories] = useState(false);

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
            <img src={Logo} alt="Logo" />
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
          </div>
        </div>
        <nav className="navBar">
          <ul className="navList">
            <li className="navItem">
              <Link to="#" className="new">
                NEW
              </Link>
            </li>
            <li
              className="navItem"
              onMouseEnter={() => setActiveSets(true)}
              onMouseLeave={() => setActiveSets(false)}
            >
              <Link to="#">BRUSH SETS</Link>
              {activeSets && <BrushSets />}
            </li>
            <li
              className="navItem"
              onMouseEnter={() => setActiveBrush(true)}
              onMouseLeave={() => setActiveBrush(false)}
            >
              <Link to="#">BRUSHES</Link>
              {activeBrush && <Brushes />}
            </li>
            <li
              className="navItem"
              onMouseEnter={() => setActiveFace(true)}
              onMouseLeave={() => setActiveFace(false)}
            >
              <Link to="#">FACE</Link>
              {activeFace && <Face />}
            </li>
            <li
              className="navItem"
              onMouseEnter={() => setActiveEyes(true)}
              onMouseLeave={() => setActiveEyes(false)}
            >
              <Link to="#">EYES</Link>
              {activeEyes && <Eyes />}
            </li>
            <li
              className="navItem"
              onMouseEnter={() => setActiveLips(true)}
              onMouseLeave={() => setActiveLips(false)}
            >
              <Link to="#">LIPS</Link>
              {activeLips && <Lips />}
            </li>
            <li
              className="navItem"
              onMouseEnter={() => setActiveAccessories(true)}
              onMouseLeave={() => setActiveAccessories(false)}
            >
              <Link to="#">ACCESSORIES</Link>
              {activeAccessories && <Accessories />}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
