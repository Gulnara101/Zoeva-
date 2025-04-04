import React, { useRef, useState, useEffect } from "react";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import burgerData from "../../Mocks/burgerMenu";
import Eye from "../BurgerMenu/EyesBurger";
import Face from "../BurgerMenu/FaceBurger";
import Lips from "../BurgerMenu/LipsBurger";
import Brush from "../BurgerMenu/BrushesBurger";

const BurgerMenu = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const element = useRef();

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const resetBurgerMenu = () => {
    setSelectedComponent(null);
  };

  const handleItemClick = (index) => {
    element.current.className = "active";
    if (index === 1) {
      setSelectedComponent(<Face resetBurgerMenu={resetBurgerMenu} />);
    } else if (index === 2) {
      setSelectedComponent(<Eye resetBurgerMenu={resetBurgerMenu} />);
    } else if (index === 3) {
      setSelectedComponent(<Lips resetBurgerMenu={resetBurgerMenu} />);
    } else if (index === 4) {
      setSelectedComponent(<Brush resetBurgerMenu={resetBurgerMenu} />);
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Scroll'u kapat
    } else {
      document.body.style.overflow = ""; // Scroll'u aç
    }

    return () => {
      document.body.style.overflow = ""; // Component unmount olunca resetle
    };
  }, [isOpen]);
  return (
    <>
      <div
        className={`overlaay ${isOpen ? "" : "activee"}`}
        onClick={toggleMenu}
      ></div>
      <div className={`burgerMenu ${isOpen ? "openBurger" : ""}`}>
        <div className="menu">
          <RiArrowLeftSLine
            onClick={toggleMenu}
            style={{ cursor: "pointer" }}
          />
          <h4>Menu</h4>
          <IoClose onClick={toggleMenu} style={{ cursor: "pointer" }} />
        </div>
        {burgerData.slice(0, 1).map((item) => (
          <div className="burger" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
        <div className="burgerList">
          <ul className="navList">
            <h4>MAKEUP</h4>
            {burgerData.slice(1, 4).map((item, index) => (
              <li
                className="navItem"
                key={item.id}
                onClick={() => handleItemClick(index + 1)}
              >
                <div className="left">
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                </div>
                <div className="right">
                  <RiArrowRightSLine />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="burgerList">
          <ul className="navList">
            <h4>BRUSHES & ACCESSORIES</h4>
            {burgerData.slice(4, 8).map((item, index) => (
              <li
                className="navItem"
                key={item.id}
                onClick={() => handleItemClick(index + 4)}
              >
                <div className="left">
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                </div>
                <div className="right">
                  {index === 0 && <RiArrowRightSLine />}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="burgerList">
          <ul className="navList">
            <h4>SKINCARE</h4>
            {burgerData.slice(8, 9).map((item) => (
              <li className="navItem" key={item.id}>
                <div className="left">
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="burgerList">
          <ul className="navList">
            <h4>ABOUT ZOEVA</h4>
            {burgerData.slice(9, 10).map((item) => (
              <li className="navItem" key={item.id}>
                <div className="left">
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="burgerLogin">
          <FaRegUser />
          <p>Log in</p>
        </div>
        {burgerData.slice(29, 32).map((item, index) => (
          <div className="endBurger" key={item.id}>
            <ul className="titles" onClick={() => handleToggle(index)}>
              <li className="headTitle">
                <div className="head">
                  {item.title}
                  {openIndex === index ? (
                    <RiArrowUpSLine className="downIcon" />
                  ) : (
                    <RiArrowDownSLine className="downIcon" />
                  )}
                </div>
                <ul className={`children ${openIndex === index ? "open" : ""}`}>
                  {item.children.map((child, childIndex) => (
                    <li key={child.id || `child-${childIndex}`}>
                      {child.title}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        ))}

        <div ref={element} className="selectedComponent active">
          {selectedComponent}
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
