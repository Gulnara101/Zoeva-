import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import BurgerMenu from "./Components/InputsGroups";
import Home from "./Pages/Home";
import LipsBurger from "./Pages/ProductFilter";
import BrushesBurger from "./Components/BurgerMenu/BrushesBurger";
import CartPage from "./Pages/CartPage";
import Checkout from "./Pages/Checkout";
import CartDetails from "./Pages/CartDetails";

const App = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/checkout" && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardDetails" element={<CartDetails />} />
        <Route path="/card" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/mmm" element={<LipsBurger />} />
      </Routes>

      {location.pathname !== "/checkout" && <Footer />}
    </div>
  );
};

export default App;
