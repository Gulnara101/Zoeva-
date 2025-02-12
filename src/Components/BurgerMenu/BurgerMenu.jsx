import React from "react";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import burgerData from "../../Mocks/burgerMenu";

const BurgerMenu = () => {
  return (
    <div className="burgerMenu">
      <div className="menu">
        <RiArrowLeftSLine />
        <h4>Menu</h4>
        <IoClose />
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
          {burgerData.slice(1, 4).map((item) => (
            <li className="navItem" key={item.id}>
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
          {burgerData.slice(4, 8).map((item) => (
            <li className="navItem" key={item.id}>
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
      <div className="endBurger">
        <p>Shop</p>
        <RiArrowDownSLine />
      </div>
      <div className="endBurger">
        <p>About</p>
        <RiArrowDownSLine />
      </div>
      <div className="endBurger">
        <p>Info</p>
        <RiArrowDownSLine />
      </div>
    </div>
  );
};

export default BurgerMenu;
