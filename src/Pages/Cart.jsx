import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import excample from "../Images/eyesPhotos/27.webp";
import { Link } from "react-router-dom";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const Cart = (props) => {
  const { isOpen, setIsOpen } = props;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className={`mycart ${isOpen ? "open" : ""}`}>
      <div className="cartText">
        <h2>Your cart</h2>
        <IoClose className="closeIcon" onClick={() => setIsOpen(false)} />
      </div>
      <div className="cartProduct">
        <div className="productImg">
          <img src={excample} alt="#" />
        </div>
        <div className="productDetails">
          <h2>title</h2>
          <p className="price">$7.34</p>
          <div className="quantityNum">
            <FaMinus className="control" />
            <p className="quantity">0</p>
            <FaPlus className="control" />
          </div>
          <p className="remove">Remove</p>
        </div>
      </div>
      <div className="checkoutBtn">
        <div className="totalNum">
          <h4>Subtotal</h4>
          <p>$7.34</p>
        </div>
        <Link to="/checkout">Checkout</Link>
      </div>
    </div>
  );
};

export default Cart;
