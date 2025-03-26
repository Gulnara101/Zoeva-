import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { CiShoppingBasket } from "react-icons/ci";
import Logo from "../../Images/svg/logo.svg";
import BrushSets from "../Header/BrushSets";
import Brushes from "../Header/Brushes";
import Face from "../Header/Face";
import Eyes from "../Header/Eyes";
import Lips from "../Header/Lips";
import Accessories from "../Header/Accessories";
import Cart from "../../Pages/Cart";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import flag from "../../Images/Flag_of_Germany.svg.webp";
import Language from "../Language";
import Search from "../Search";
import { useSelector } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSets, setActiveSets] = useState(false);
  const [activeBrush, setActiveBrush] = useState(false);
  const [activeFace, setActiveFace] = useState(false);
  const [activeEyes, setActiveEyes] = useState(false);
  const [activeLips, setActiveLips] = useState(false);
  const [activeAccessories, setActiveAccessories] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [modulLng, setModulLng] = useState(false);
  const [search, setSearch] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [selectedLang, setSelectedLang] = useState("en");

  const handleLanguageChange = (newLang) => {
    setSelectedLang(newLang); // Update language when selected
  };

  const currentTranslation = {
    en: "English",
    tr: "Türkçe",
    ru: "Русский",
  }[selectedLang];

  const toggleModul = () => {
    setModulLng((prev) => !prev);
  };

  const toggleSearch = () => {
    setSearch((prev) => !prev);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
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
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="userControls">
            <div className="searchModul" onClick={toggleSearch}>
              <IoSearchOutline className="icon" />
              <p className="controlP">SEARCH</p>
            </div>
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
            <div className="lng" onClick={toggleModul}>
              <img src={flag} alt="#" />
              <p className="controlP">{`${currentTranslation.toUpperCase()}`}</p>
            </div>
            <div className="quantities">
              <span>{totalQuantity}</span>
            </div>
          </div>
        </div>
        <div className="burgerMenuIcon" onClick={toggleMenu}>
          <span className={menuOpen ? "line open" : "line"}></span>
          <span className={menuOpen ? "line open" : "line"}></span>
          <span className={menuOpen ? "line open" : "line"}></span>
        </div>
        {menuOpen && <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />}
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
      {modulLng && <Language onLanguageChange={handleLanguageChange} />}
      {search && <Search />}
    </header>
  );
};

export default Header;
