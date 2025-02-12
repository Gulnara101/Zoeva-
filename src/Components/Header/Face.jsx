import React from "react";
import { Link } from "react-router-dom";
import faceData from "../../Mocks/faceData";

const Face = () => {
  return (
    <div className="faceHover">
      <div className="faceMenu">
        <ul>
          {faceData.map((item) => (
            <li key={item.id}>
              <Link to="#">{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="brush">
        <h2>FACE</h2>
        <div className="brushCarts">
          {faceData.slice(0, 4).map((item) => (
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
