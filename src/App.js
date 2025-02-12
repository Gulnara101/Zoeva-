import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
// import BurgerMenu from "./Components/BurgerMenu/BurgerMenu";
import Home from "./Pages/Home";
// import CartPage from "./Pages/CartPage";
// import Checkout from "./Pages/Checkout";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/menu" element={<BurgerMenu/>}/> */}
        {/* <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout/>} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
