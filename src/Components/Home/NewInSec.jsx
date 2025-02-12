import React from "react";
import newInData from "../../Mocks/newInData";
import { Link } from "react-router-dom";

const NewInSec = () => {
  return (
    <section className="newIn">
      <div className="container">
        <div className="row">
          <h2>New In</h2>
          <div className="carts">
            {newInData.slice(0, 4).map((item) => (
              <div className="cart" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="cartInfo">
                  <h3>{item.title}</h3> 
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

export default NewInSec;
