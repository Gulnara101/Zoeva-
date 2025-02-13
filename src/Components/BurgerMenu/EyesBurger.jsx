import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import burgerData from "../../Mocks/burgerMenu";

const EyesBurger = () => {
  return (
    <div className="faceBurgerMenu">
      <div className="burgerHeadMenu">
        <RiArrowLeftSLine />
        <h4>Eyes</h4>
        <IoClose />
      </div>
      <div className="menuList">
        <ul className="navList">
          {burgerData.slice(14, 20).map((item) => (
            <li className="navItem" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EyesBurger;
