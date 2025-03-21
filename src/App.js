import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import BurgerMenu from "./Components/InputsGroups";
import Home from "./Pages/Home";
import LipsBurger from "./Components/CartDetails/AnwenSlider";
import FilterPage from "./Pages/FilterMenu";
import CartPage from "./Pages/CartPage";
import Checkout from "./Pages/Checkout";
import CartDetails from "./Pages/CartDetails";
import Ahvj from "./Components/CartDetails/AnwenSlider";
// import Search from "./Components/Search";

const App = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/checkout" && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/:cardId" element={<Search />} /> */}
        <Route path="/cardDetails/:cardId" element={<CartDetails />} />
        <Route path="/card" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/mmm" element={<Ahvj />} />
        <Route path="/filter" element ={<FilterPage/>}/>
      </Routes>

      {location.pathname !== "/checkout" && <Footer />}
    </div>
  );
};

export default App;
