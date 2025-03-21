import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import shopPay from "../Images/svg/paytype1.svg";
import Paypal from "../Images/paypalLogo.svg";
import Gpay from "../Images/svg/paytype2.svg";
import faqData from "../Mocks/faqData";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  decreaseQuantity,
} from "../Redux/CartRedux";

const CartPage = () => {
  const [openFaq, setOpenFaq] = useState(true);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const toggleFAQ = (id) => {
    setOpenFaq(openFaq === id ? true : id);
  };
  return (
    <section className="cartPage">
      <div className="container">
        <div className="row">
          <h2>Your cart</h2>
          {cartItems.length === 0 ? (
            <p className="emptyCart" style={{height:"40vh", marginTop:"100px"}}>Your cart is empty</p>
          ) : (
            <div className="content">
              <div className="cartDetail">
                <div className="title">
                  <p>Product</p>
                  <p className="prc">Price</p>
                  <p className="quantity">Quantity</p>
                </div>
                {cartItems.map((item) => (
                  <div className="cartItem" key={item.id}>
                    <div className="product">
                      <img src={item.image} alt={item.title} />
                      <h3>{item.title}</h3>
                    </div>
                    <div className="price">
                      <span>${Number(item.price).toFixed(2)}</span>
                    </div>
                    <div className="quantityNum">
                      <div className="count">
                        <FaMinus
                          className="control"
                          onClick={() => dispatch(decreaseQuantity(item))}
                        />
                        <p className="quantity">{item.quantity}</p>
                        <FaPlus
                          className="control"
                          onClick={() => dispatch(addToCart(item))}
                        />
                      </div>
                      <div className="removeItem">
                        <p
                          className="remove"
                          onClick={() => dispatch(removeFromCart(item))}
                        >
                          Remove
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cartPayDetail">
                <div className="cartPay">
                  <div className="total">
                    <p>Subtotal</p>
                    <p>${Number(totalPrice).toFixed(2)}</p>
                  </div>
                  <div className="checkout">
                    <Link to="/checkout">Checkout</Link>
                    <div className="payMethods">
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
                <div className="payFaq">
                  <ul>
                    {faqData.map((item) => (
                      <li key={item.id}>
                        <div
                          className="questions"
                          onClick={() => toggleFAQ(item.id)}
                        >
                          <h3>{item.question}</h3>
                          {openFaq === item.id ? (
                            <MdOutlineKeyboardArrowUp className="icon" />
                          ) : (
                            <MdOutlineKeyboardArrowDown className="icon" />
                          )}
                        </div>
                        {openFaq === item.id && <p>{item.answer}</p>}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CartPage;
