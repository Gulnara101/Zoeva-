import React from "react";
import { Link } from "react-router-dom";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import shopPay from "../Images/svg/paytype1.svg";
import Paypal from "../Images/paypalLogo.svg";
import Gpay from "../Images/svg/paytype2.svg";
import excample from "../Images/eyesPhotos/27.webp";

const CartPage = () => {
  return (
    <section className="cartPage">
      <div className="container">
        <div className="row">
          <h2>Your cart</h2>
          <div className="content">
            <div className="cartDetail">
              <div className="title">
                <p>Product</p>
                <p>Price</p>
                <p className="quantity">Quantity</p>
              </div>
              <div className="cartItem">
                <div className="product">
                  <img src={excample} alt="#" />
                  <h3>title</h3>
                </div>
                <div className="price">
                  <span>$7.34</span>
                </div>
                <div className="quantityNum">
                  <div className="count">
                    <FaMinus className="control" />
                    <p className="quantity">0</p>
                    <FaPlus className="control" />
                  </div>
                  <div className="removeItem">
                    <p className="remove">Remove</p>
                  </div>
                </div>
              </div>
              <div className="cartItem">
                <div className="product">
                  <img src={excample} alt="#" />
                  <h3>title</h3>
                </div>
                <div className="price">
                  <span>$7.34</span>
                </div>
                <div className="quantityNum">
                  <div className="count">
                    <FaMinus className="control" />
                    <p className="quantity">0</p>
                    <FaPlus className="control" />
                  </div>
                  <div className="removeItem">
                    <p className="remove">Remove</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cartPayDetail">
              <div className="total">
                <p>Subtotal</p>
                <p>$14.68</p>
              </div>
              <div className="checkout">
                <Link>Checkout</Link>
                <Link className="shopPay">
                  <img src={shopPay} alt="#" />
                </Link>
                <Link className="paypal">
                  <img src={Paypal} alt="#" />
                </Link>
                <Link className="gpay">
                  <img src={Gpay} alt="#" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
