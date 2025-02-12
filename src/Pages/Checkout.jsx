import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiShoppingBasketLine } from "react-icons/ri";
import { GoQuestion } from "react-icons/go";
import { FiLock } from "react-icons/fi";
import Logo from "../Images/svg/logo.svg";
import shopPay from "../Images/svg/paytype1.svg";
import Paypal from "../Images/paypalLogo.svg";
import Gpay from "../Images/svg/paytype2.svg";
import CustomInput from "../Components/CustomInput";
import countryData from "../Mocks/countries";
import visa from "../Images/footerPayLogo/visalogo.jpg";
import master from "../Images/footerPayLogo/Mastercard_logo.webp";
import amex from "../Images/footerPayLogo/amex-logo.jpeg";
import maestro from "../Images/footerPayLogo/Maestro-logo.png";
import paypal from "../Images/svg/paypalLogo.svg";
import shop from "../Images/svg/shop.svg";
import excample from "../Images/eyesPhotos/25.webp";


const Checkout = () => {
const [selected, setSelected] = useState("");

  return (
    <section className="checkoutPage">
      <div className="container">
        <div className="row">
          <div className="checkout">
            <div className="headingCheck">
              <img className="logoZoeva" src={Logo} alt="logo" />
              <RiShoppingBasketLine className="basketIcon" />
            </div>
            <div className="expressCheckout">
              <h3>Express checkout</h3>
              <div className="payType">
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
              <div class="lineContainer">
                <div class="line"></div>
                <span>OR</span>
                <div class="line"></div>
              </div>
            </div>
            <div className="checkoutForm">
              <div className="contactHeading">
                <h3>Contact</h3>
                <Link>Log in</Link>
              </div>
              <CustomInput />
              <div className="contactWithEmail">
                <input type="checkbox" />
                <p>Email me with news and offers</p>
              </div>
              <h3 className="delivery">Delivery</h3>
              <div className="selectContainer">
                <select
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  className={selected ? "filled" : ""}
                >
                  <option value="" disabled hidden></option>
                  <option value="" disabled selected>
                    Country/Region
                  </option>
                  {countryData.map((item) => (
                    <option key={item.id} value={item.code}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <label className={selected ? "active" : ""}>
                  Country/Region
                </label>
              </div>
              <div className="userName">
                <CustomInput placeholder="First name" />
                <CustomInput placeholder="Last name" />
              </div>
              <CustomInput className="address"  placeholder="Address" />
              <CustomInput placeholder="Apartment, suite, etc. (optional)" />
              <div className="postal">
                <CustomInput placeholder="Postal code" type="number"/>
                <CustomInput placeholder="City" />
              </div>
              <div className="inputAnswear">
                <CustomInput className="phone" type="number" placeholder="Phone (optional)" />
                <GoQuestion className="question" />
              </div>
              <h4>Shipping method</h4>
              <div className="shipping">
                <p>
                  Enter your shipping address to view available shipping
                  methods.
                </p>
              </div>
              <h3 className="payment">Payment</h3>
              <p className="paymentAbout">
                All transactions are secure and encrypted.
              </p>
              <div className="paymentMethods">
                <div className="cartDetails">
                  <div className="cartDetail">
                    <input type="radio" />
                    <p>Credit card</p>
                  </div>
                  <div className="carts">
                    <img src={visa} alt="#" />
                    <img src={master} alt="#" />
                    <img src={maestro} alt="#" />
                    <img src={amex} alt="#" />
                    <div className="union">+1</div>
                  </div>
                </div>
                {/* <div className="cartDetails">
                  <div className="cartDetail">
                    <input type="radio" />
                    <p>Pay later with Klarna</p>
                  </div>
                  <img src={klarna} alt="#" />
                </div> */}
                <div className="cartDetails">
                  <div className="cartDetail">
                    <input type="radio" />
                    <p>PayPal</p>
                  </div>
                  <img src={paypal} alt="#" className="paypalLogo" />
                </div>
              </div>
              <h3 className="remember">Remember me</h3>
              <div className="rememberMe">
                <input type="radio" />
                <p>Same as shipping address</p>
              </div>
              <div className="rememberMe">
                <input type="radio" />
                <p>Use a different billing address</p>
              </div>
              <div className="secure">
                <div className="secureAbout">
                  <FiLock className="lock" />
                  <p>Secure and encrypted</p>
                </div>
                <img src={shop} alt="#" />
              </div>
              <button>Pay now</button>
              <div className="end">
                <Link>Cancellation policy</Link>
              </div>
            </div>
          </div>
          <div className="discountCode">
            <div className="discountContainer">
              <div className="product">
                <div className="productImg">
                  <img src={excample} alt="#" />
                  <div className="span">
                    <span>1</span>
                  </div>
                  <p>801 Complexion Duo Pinsel</p>
                </div>
                <div className="productPrice">
                  <p>$68.76</p>
                </div>
              </div>
              <div className="giftCode">
                <CustomInput placeholder="Discount code or gift card" />
                <button>Apply</button>
              </div>
              <div className="subtotal">
                <p>Subtotal</p>
                <p>$14.68</p>
              </div>
              <div className="shipping">
                <p>Shipping</p>
                <p className="enter">Enter shipping address</p>
              </div>
              <div className="total">
                <h3>Total</h3>
                <h3>
                  <p>USD</p>$29.36
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
