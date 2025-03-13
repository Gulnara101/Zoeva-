import React from "react";
import newInData from "../../Mocks/newInData";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartRedux";

const NewInSec = () => {
  const dispatch = useDispatch(); 

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <section className="newIn">
      <div className="container">
        <div className="row">
          <h2>New In</h2>
          <div className="carts">
            {newInData.slice(0, 4).map((item) => (
              <div className="cart" key={item.id}>
                <div className="cartImg">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="cartInfo">
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>
                </div>
                <Link onClick={() => handleAddToCart(item)}>{item.btn}</Link>
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
