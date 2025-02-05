import React from "react";
import data from "../../Mocks/accessoriese";
import { Link } from "react-router-dom";

const Accessories = () => {
  return (
    <div className="brushSetsHover">
      <ul className="itemList">
        {data.map((item) => (
          <li key={item.id} className="items">
            <Link> {item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accessories;
