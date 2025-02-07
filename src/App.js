import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import CartPage from "./Pages/CartPage";

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/cart" element={<CartPage />} />
    </Routes>
    <Footer />
    </div>
  );
};

export default App;
