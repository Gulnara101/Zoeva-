import React from "react";
import AboutZoeva from "../Components/Home/AboutZoeva";
import Values from "../Components/Home/Values";
import SoldSec from "../Components/Home/SoldSec";
import HeroSec from "../Components/Home/HeroSec";
import Discover from "../Components/Home/Discover";
import MoreZoeva from "../Components/Home/MoreZoeva";
import Reviews from "../Components/Home/Reviews";
import NewInSec from "../Components/Home/NewInSec";
import BestSellersSec from "../Components/Home/BestSellersSec";

import Cart from "../Pages/Cart";

const Home = () => {
  return (
    <div>
      <Cart />
      <HeroSec />
      <BestSellersSec />
      <NewInSec />
      <SoldSec />
      <Discover />
      <AboutZoeva />
      <MoreZoeva />
      <Reviews />
      <Values />
    </div>
  );
};

export default Home;
