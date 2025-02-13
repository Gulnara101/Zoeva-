import React, { useState, useEffect} from "react";
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
import Cart from "../../Pages/Cart";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import flag from "../../Images/eyesPhotos/28.webp";

const Header = () => {
  const [activeSets, setActiveSets] = useState(false);
  const [activeBrush, setActiveBrush] = useState(false);
  const [activeFace, setActiveFace] = useState(false);
  const [activeEyes, setActiveEyes] = useState(false);
  const [activeLips, setActiveLips] = useState(false);
  const [activeAccessories, setActiveAccessories] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHidden(currentScrollY > prevScrollY && currentScrollY > 50);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <header className={hidden ? "hidden" : ""}>
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
            <p className="controlP">SEARCH</p>
            <CiUser className="userIcon" />
            <CiShoppingBasket
              className="icon"
              onClick={() => setCartOpen(true)}
            />
            {cartOpen && (
              <div
                className={`overlay ${cartOpen ? "open" : ""}`}
                onClick={() => setCartOpen(false)}
              ></div>
            )}
            <Cart isOpen={cartOpen} setIsOpen={setCartOpen} />
            <img src="#" alt="" />
            <div className="lng">
              <img src={flag} alt="#" />
              <p className="controlP">ENGLISH</p>
            </div>
            <div className="quantities">
              <span>1</span>
            </div>
          </div>
        </div>
        <div className="burgerMenuIcon" onClick={toggleMenu}>
          <span className={menuOpen ? "line open" : "line"}></span>
          <span className={menuOpen ? "line open" : "line"}></span>
          <span className={menuOpen ? "line open" : "line"}></span>
        </div>
        {menuOpen && <BurgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />}
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
