import React from "react";
import brushData from "../../Mocks/brushes";

const Brushes = () => {
  return (
    <div className="brushes">
      <div className="all">
        <h2>All Brushes</h2>
      </div>
      <div className="brush">
        <h2>BRUSHES</h2>
        <div className="brushCarts">
          {brushData.map((item) => (
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

export default Brushes;
