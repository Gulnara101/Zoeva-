import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  decreaseQuantity,
} from "../Redux/CartRedux";

const Cart = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  
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

  console.log("totalPrice:", totalPrice, "Type:", typeof totalPrice);

  return (
    <div className={`mycart ${isOpen ? "open" : ""}`}>
        <div className="cartText">
          <h2>Your cart</h2>
          <IoClose className="closeIcon" onClick={() => setIsOpen(false)} />
        </div>
      <div
        className="
      cartTop"
      >
        {cartItems.length === 0 ? (
          <p className="emptyCart">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div className="cartProduct" key={item.id}>
              <div className="productImg">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="productDetails">
                <h2>{item.title}</h2>
                <p className="price">${Number(item.price).toFixed(2)}</p>

                <div className="quantityNum">
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
                <p
                  className="remove"
                  onClick={() => dispatch(removeFromCart(item))}
                >
                  Remove
                </p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="checkoutBtn">
        <div className="totalNum">
          <h4>Subtotal</h4>
          <p>${Number(totalPrice).toFixed(2)}</p>
        </div>
        <Link to="/checkout">Checkout</Link>
      </div>
    </div>
  );
};

export default Cart;
