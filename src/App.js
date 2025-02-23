import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import BurgerMenu from "./Components/InputsGroups";
import Home from "./Pages/Home";
import LipsBurger from "./Components/BurgerMenu/LipsBurger";
import BrushesBurger from "./Components/BurgerMenu/BrushesBurger";
import CartPage from "./Pages/CartPage";
import Checkout from "./Pages/Checkout";

const App = () => {
  const location = useLocation(); 

  return (
    <div>
      {location.pathname !== '/checkout' && <Header />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menuf" element={<BurgerMenu />} />
        <Route path="/card" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      
      {location.pathname !== '/checkout' && <Footer />}
    </div>
  );
};

export default App;
