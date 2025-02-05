import React from "react";
import sellerData from "../../Mocks/bestSellerData";
import { Link } from "react-router-dom";

const BestSellersSec = () => {
  return ( 
    <section className="bestSeller">
      <div className="container">
        <div className="row">
          <h3>Our bestsellers</h3>
          <div className="carts">
            {sellerData.slice(0, 8).map((item) => (
              <div className="cart" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="rating">
                  <span>{item.rating}</span>
                </div>
                <div className="cartText">
                  <h3>{item.title}</h3>
                  <h4>{item.color}</h4>
                  <p>{item.price}</p>
                </div>
                <Link>{item.btn}</Link>
              </div>
            ))}
          </div>
            <div className="seeAll">
              <Link>Wiew All</Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellersSec;
