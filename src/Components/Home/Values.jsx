import React from "react";
import Valuetwo from "../Home/ValueTwo";

const Values = () => {
  return (
    <section className="valuesSec">
      <div className="container">
        <div className="row">
          <h2>Our values</h2>
          <div className="values">
            <div className="value">
              <img
                src="https://zoevacosmetics.com/cdn/shop/files/zoeva-pillar-individual-beauty_710x.progressive.jpg?v=1663332399"
                alt="Value 1"
              />
              <p>
                Everyone deserves to discover their own unique beauty and be
                loved for it.
              </p>
            </div>
            <div className="value">
              <img
                src="https://zoevacosmetics.com/cdn/shop/files/zoeva-pillar-affordable-luxury_710x.progressive.jpg?v=1663332413"
                alt="Value 2"
              />
              <p>
                Our products offer everyone worldwide an affordable sense of
                luxury and elegance.
              </p>
            </div>
            <div className="value">
              <img
                src="https://zoevacosmetics.com/cdn/shop/files/zoeva-pillar-sisterhood_710x.progressive.jpg?v=1663332424"
                alt="Value 3"
              />
              <p>
                We are a sisterhood where every voice is equal, because: Only
                together are we strong.
              </p>
            </div>
          </div>
        </div>
        <div className="valueTwo">
          <Valuetwo />
        </div>
      </div>
    </section>
  );
};

export default Values;
