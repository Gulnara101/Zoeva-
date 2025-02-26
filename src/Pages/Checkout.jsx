import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiLock } from "react-icons/fi";
import baskett from "../Images/svg/baskett.svg";
import Logo from "../Images/svg/logo.svg";
import shopPay from "../Images/svg/paytype1.svg";
import Paypal from "../Images/paypalLogo.svg";
import Gpay from "../Images/svg/paytype2.svg";
import CustomInput from "../Components/CustomInput";
import visa from "../Images/footerPayLogo/visalogo.jpg";
import master from "../Images/footerPayLogo/Mastercard_logo.webp";
import amex from "../Images/footerPayLogo/amex-logo.jpeg";
import uniPay from "../Images/footerPayLogo/unionn.png";
import maestro from "../Images/footerPayLogo/Maestro-logo.png";
import paypal from "../Images/paypayBtn.svg";
import shop from "../Images/svg/shop.svg";
import excample from "../Images/eyesPhotos/25.webp";
import InputsGroups from "../Components/InputsGroups";
import cardSvg from "../Images/svg/card.svg";

const Checkout = () => {
  const [selectedOption, setSelectedOption] = useState("shipping");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("creditCard");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <section className="checkoutPage">
      <div className="container">
        <div className="row">
          <div className="checkout">
            <div className="headingCheck">
              <Link to="/">
                <img src={Logo} alt="Logo" className="logoZoeva" />
              </Link>
              <Link to="/card">
                <img src={baskett} alt="#" className="basketIcon" />
              </Link>
            </div>
            <div className="expressCheckout">
              <div className="expressText">
                <h3>Express checkout</h3>
              </div>
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
              <div className="textInput">
                <CustomInput />
              </div>
              <div className="contactWithEmail">
                <label className="checkboxContainer">
                  <input type="checkbox" />
                  <span className="customCheckbox"></span>
                  <p>Email me with news and offers</p>
                </label>
              </div>
              <h3 className="delivery">Delivery</h3>
              <InputsGroups />
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
                <div
                  className="cartDetails"
                  onClick={() => setSelectedMethod("creditCard")}
                >
                  <div className="creditCard">
                    <div className="cartDetail">
                      <input
                        type="radio"
                        checked={selectedMethod === "creditCard"}
                        onChange={() => setSelectedMethod("creditCard")}
                      />
                      <p>Credit card</p>
                    </div>
                    <div className="carts">
                      <img src={visa} alt="Visa" />
                      <img src={master} alt="MasterCard" />
                      <img src={maestro} alt="Maestro" />
                      <img src={amex} alt="Amex" />

                      <div className="union">
                        <p>+1</p>
                        <div className="uniPayLogo">
                          <img src={uniPay} alt="uniPay" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`creditCardActive ${
                    selectedMethod === "creditCard" ? "visible" : "hidden"
                  }`}
                >
                  <div className="cardActiveContainer">
                    <CustomInput placeholder="Card Number" type="number" />
                    <div className="cardActive">
                      <CustomInput
                        placeholder="Expiration (MM / YY)"
                        type="number"
                      />
                      <CustomInput placeholder="Security Code" type="number" />
                    </div>
                    <CustomInput placeholder="Name on card" type="text" />
                    <div className="checkBoxDeactive">
                      <label className="checkboxContainer">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => setIsChecked(!isChecked)}
                        />
                        <span className="customCheckbox"></span>
                        <p>Use shipping address as billing address</p>
                      </label>
                    </div>
                    <div
                      className={`billing ${isChecked ? "hidden" : "visible"}`}
                    >
                      <div className="billingHead">
                        <h4>Billing address</h4>
                      </div>
                      <InputsGroups />
                    </div>
                  </div>
                </div>
                <div
                  className="paypalDetails"
                  onClick={() => setSelectedMethod("paypal")}
                >
                  <div className="cartDetail">
                    <input
                      type="radio"
                      checked={selectedMethod === "paypal"}
                      onChange={() => setSelectedMethod("paypal")}
                    />
                    <p>PayPal</p>
                  </div>
                  <img src={paypal} alt="PayPal" className="paypalLogo" />
                </div>

                <div
                  className={`paypalActive ${
                    selectedMethod === "paypal" ? "visible" : "hidden"
                  }`}
                >
                  <img src={cardSvg} alt="PayPal Card" />
                  <p>
                    After clicking "Pay with PayPal", you will be redirected to
                    PayPal to complete your purchase securely.
                  </p>
                </div>
              </div>
              <h3 className="remember">Remember me</h3>

              <div className="rememberContainer">
                <div
                  className={`rememberMeShipping ${
                    selectedOption === "shipping" ? "selected" : ""
                  }`}
                  onClick={() => setSelectedOption("shipping")}
                >
                  <input
                    type="radio"
                    name="billingOption"
                    checked={selectedOption === "shipping"}
                    onChange={() => setSelectedOption("shipping")}
                  />
                  <p>Same as shipping address</p>
                </div>
                <div
                  className={`rememberMe ${
                    selectedOption === "different" ? "selectedd" : ""
                  }`}
                  onClick={() => setSelectedOption("different")}
                >
                  <input
                    type="radio"
                    name="billingOption"
                    checked={selectedOption === "different"}
                    onChange={() => setSelectedOption("different")}
                  />
                  <p>Use a different billing address</p>
                </div>

                <div
                  className={`inputsGroup ${
                    selectedOption === "different" ? "show" : ""
                  }`}
                >
                  {selectedOption === "different" && <InputsGroups />}
                </div>
              </div>
              <div className="secure">
                <div className="secureAbout">
                  <FiLock className="lock" />
                  <p>Secure and encrypted</p>
                </div>
                <img src={shop} alt="#" />
              </div>
              {selectedMethod === "paypal" ? (
                <button className="paypalBtn">
                  Pay with <img src={paypal} alt="#" />
                </button>
              ) : (
                <button className="payBtn">Pay now</button>
              )}
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
                <CustomInput
                  placeholder="Discount code or gift card"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <button className={inputValue ? "filled" : " "}>Apply</button>
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
