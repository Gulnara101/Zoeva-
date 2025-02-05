import React from "react";
import { Link } from "react-router-dom";
import lipsData from "../../Mocks/lipsData";

const Face = () => {
  return (
    <div className="faceHover">
      <div className="faceMenu">
        <ul>
          {lipsData.map((item) => (
            <li key={item.id}>
              <Link to="#">{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="brush">
        <h2>LIPS</h2>
        <div className="brushCarts">
          {lipsData.slice(0, 4).map((item) => (
            <div className="brushCart" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Face;
