import React from "react";
import CartDetail from "../Components/CartDetails/CardDetail";
import PerfectPair from "../Components/CartDetails/PerfectPair";
import Anwendung from "../Components/CartDetails/Anwendung";
import Comments from "../Components/CartDetails/Comments";
import WeAlsoRecom from "../Components/CartDetails/WeAlsoRecom";
import KurzlichAngesehen from "../Components/CartDetails/KurzlichAngesehen";

const CartDetails = () => {
  return (
    <div className="cartPageDetails">
      <CartDetail />
      {/* <PerfectPair />
      <Anwendung />
      <Comments />
      <WeAlsoRecom />
      <KurzlichAngesehen /> */}
    </div>
  );
};

export default CartDetails;
