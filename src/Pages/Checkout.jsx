import React, { useState, useEffect } from "react";
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
import InputsGroups from "../Components/InputsGroups";
import cardSvg from "../Images/svg/card.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [selectedOption, setSelectedOption] = useState("shipping");
  const [isChecked, setIsChecked] = useState(true);
  const [selectedMethod, setSelectedMethod] = useState("creditCard");
  const [inputValue, setInputValue] = useState("");
  const [discount, setDiscount] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    zip: "",
    state: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    securityCode: "",
    cardName: "",
    saveInfo: false,
  });

  const [errors, setErrors] = useState({});
  const [active, setActive] = useState(null);

  const toggleActive = (type) => {
    setActive(active === type ? null : type);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const applyDiscount = () => {
    const code = inputValue.toUpperCase();
    if (validCodes[code]) {
      setDiscount(validCodes[code]);
    } else {
      alert("Invalid discount code!");
      setDiscount(0);
    }
  };

  const validCodes = { DISCOUNT10: 0.1, SAVE20: 0.2 };
  const discountedPrice = totalPrice - totalPrice * discount;

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "securityCode" && value.length > 4) {
      return;
    }
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.lastName) newErrors.lastName = "Enter a last name";
    if (!formData.firstName) newErrors.firstName = "Enter a first name";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.apartment) newErrors.apartment = "Apartment is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.zip) newErrors.zip = "ZIP code is required";
    if (!formData.cardNumber) newErrors.cardNumber = "Card number is required";
    if (!formData.expiryDate)
      newErrors.expiryDate = "Expiration date is required";
    if (!formData.securityCode)
      newErrors.securityCode = "Security code is required";
    if (!formData.cardName) newErrors.cardName = "Card holder is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 6) value = value.slice(0, 6);
    if (value.length >= 3) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }

    setFormData({ ...formData, expiryDate: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (
      !formData.cardNumber ||
      !formData.expiryDate ||
      !formData.securityCode ||
      !formData.cardName ||
      !formData.saveInfo ||
      !formData.email ||
      !formData.lastName ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.address ||
      !formData.apartment ||
      !formData.city
    ) {
      toast.error("Please fill in all the fields!", { position: "top-right" });
      return;
    }
    toast.success("Payment successful!", { position: "top-right" });
    setFormData({
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      apartment: "",
      city: "",
      zip: "",
      state: "",
      phone: "",
      cardNumber: "",
      expiryDate: "",
      securityCode: "",
      cardName: "",
      saveInfo: false,
    });
    setErrors({});
  };
  const handleBlur = (e) => {
    if (e.target.type === "email") {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);

      setErrors((prevErrors) => ({
        ...prevErrors,
        email: isValidEmail ? "" : "Please enter a valid email!",
      }));
    }
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 16) value = value.slice(0, 16);
    value = value.replace(/(.{4})/g, "$1 ").trim();
    setFormData({ ...formData, cardNumber: value });
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
                <Link
                  className={`shopPay ${active === "shopPay" ? "active" : ""}`}
                  onClick={() => toggleActive("shopPay")}
                >
                  <img src={shopPay} alt="Shop Pay" />
                </Link>
                <Link
                  className={`paypal ${active === "paypal" ? "active" : ""}`}
                  onClick={() => toggleActive("paypal")}
                >
                  <img src={Paypal} alt="PayPal" />
                </Link>
                <Link
                  className={`gpay ${active === "gpay" ? "active" : ""}`}
                  onClick={() => toggleActive("gpay")}
                >
                  <img src={Gpay} alt="Google Pay" />
                </Link>
              </div>
              <div class="lineContainer">
                <div class="line"></div>
                <span>OR</span>
                <div class="line"></div>
              </div>
            </div>
            <div className="checkoutForm">
              <form>
                <div className="contactHeading">
                  <h3>Contact</h3>
                </div>
                <div className="textInput">
                  <CustomInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    hasError={!!errors.email}
                    onBlur={handleBlur}
                  />
                  {errors.email && (
                    <span className="errorText">{errors.email}</span>
                  )}
                </div>
                <div className="contactWithEmail">
                  <label className="checkboxContainer">
                    <input
                      type="checkbox"
                      name="saveInfo"
                      checked={formData.saveInfo}
                      onChange={handleChange}
                    />
                    <span className="customCheckbox"></span>
                    <p>Email me with news and offers</p>
                  </label>
                </div>
                <h3 className="delivery">Delivery</h3>
                <InputsGroups
                  formData={formData}
                  handleChange={handleChange}
                  hasError={errors}
                />
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
                      <CustomInput
                        placeholder="Card Number"
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleCardNumberChange}
                        hasError={!!errors.cardNumber}
                      />
                      {errors.cardNumber && (
                        <span className="errorText">{errors.cardNumber}</span>
                      )}

                      <div className="cardActive">
                        <div className="custom">
                          <CustomInput
                            placeholder="Expiration (MM / YY)"
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleExpiryChange}
                            hasError={!!errors.expiryDate}
                          />
                          {errors.expiryDate && (
                            <span className="errorText">
                              {errors.expiryDate}
                            </span>
                          )}
                        </div>
                        <div className="custom">
                          <CustomInput
                            placeholder="Security Code"
                            type="number"
                            name="securityCode"
                            value={formData.securityCode}
                            onChange={handleChange}
                            hasError={!!errors.securityCode}
                          />
                          {errors.expiryDate && (
                            <span className="errorText">
                              {errors.securityCode}
                            </span>
                          )}
                        </div>
                      </div>
                      <CustomInput
                        placeholder="Name on card"
                        type="text"
                        value={formData.cardName}
                        onChange={handleChange}
                        hasError={!!errors.cardName}
                        name="cardName"
                      />
                      {errors.cardName && (
                        <span className="errorText">{errors.cardName}</span>
                      )}
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
                        className={`billing ${
                          isChecked ? "hidden" : "visible"
                        }`}
                      >
                        <div className="billingHead">
                          <h4>Billing address</h4>
                        </div>
                        <InputsGroups
                          formData={formData}
                          handleChange={handleChange}
                          hasError={errors}
                        />
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
                      After clicking "Pay with PayPal", you will be redirected
                      to PayPal to complete your purchase securely.
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
                    {selectedOption === "different" && (
                      <InputsGroups
                        formData={formData}
                        handleChange={handleChange}
                        hasError={errors}
                      />
                    )}
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
                  <button className="paypalBtn" onClick={handleSubmit}>
                    Pay with <img src={paypal} alt="#" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="payBtn"
                    onClick={handleSubmit}
                  >
                    Pay now
                  </button>
                )}
                <div className="end">
                  <Link>Cancellation policy</Link>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
          <div className="discountCode">
            <div className="discountContainer">
              {cartItems.length === 0 ? (
                <p className="emptyCart">Your cart is empty</p>
              ) : (
                cartItems.map((item) => (
                  <div
                    className="product"
                    key={item.id}
                    style={{ marginTop: "10px" }}
                  >
                    <div className="productImg">
                      <img src={item.image} alt={item.title} />
                      <div className="span">
                        <span>{item.quantity}</span>
                      </div>
                      <p>{item.title}</p>
                    </div>
                    <div className="productPrice">
                      <p>${Number(item.price).toFixed(2)}</p>
                    </div>
                  </div>
                ))
              )}
              <div className="giftCode">
                <CustomInput
                  type="text"
                  placeholder="Discount code or gift card"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <button
                  onClick={applyDiscount}
                  className={inputValue ? "filled" : ""}
                >
                  Apply
                </button>
              </div>
              <div className="subtotal">
                <p>Subtotal</p>
                <p>${Number(totalPrice).toFixed(2)}</p>
              </div>
              <div className="shipping">
                <p>Shipping</p>
                <p>
                  {discount > 0 ? `-${discount * 100}%` : "No discount applied"}
                </p>
              </div>
              <div className="total">
                <h3>Total</h3>
                <h3>
                  <p>USD</p>${discountedPrice.toFixed(2)}
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
