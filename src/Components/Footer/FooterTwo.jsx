import React, { useState } from "react";
import footerData from "../../Mocks/footerData";
import { Link } from "react-router-dom";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const FooterTwo = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="footerDropdown">
      <div className="footerContainer">
        <ul className="dropDownList">
          {footerData.map((item, index) => (
            <li className="headLi" key={item.id}>
              <div onClick={() => handleToggle(index)}>
                {item.title}
                {activeIndex === index ? (
                  <MdOutlineKeyboardArrowUp className="up" />
                ) : (
                  <MdOutlineKeyboardArrowDown className="down" />
                )}
              </div>
              <ul
                className={`dropdown ${
                  activeIndex === index ? `block` : `none`
                } `}
              >
                {item.links.map((link) => (
                  <li key={link.id}>
                    <Link to="#">{link.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterTwo;
