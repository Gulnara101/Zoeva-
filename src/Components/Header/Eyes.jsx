import React from "react";
import { Link } from "react-router-dom";
import eyesData from "../../Mocks/eyeData";

const Eyes = () => {
  return (
    <div className="faceHover">
      <div className="faceMenu">
        <ul>
          {eyesData.map((item) => (
            <li key={item.id}>
              <Link to="#">{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="brush">
        <h2>EYES</h2>
        <div className="brushCarts">
          {eyesData.slice(0, 5).map((item) => (
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

export default Eyes;
