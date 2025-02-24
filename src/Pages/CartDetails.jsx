import React from "react";
import CartDetail from "../Components/CartDetails/CardDetail";
import PerfectPair from "../Components/CartDetails/PerfectPair";
import Anwendung from "../Components/CartDetails/Anwendung";
import Comments from "../Components/CartDetails/Comments";
import WirEmpfehlenAuch from "../Components/CartDetails/WirEmpfehlenAuch";
import KurzlichAngesehen from "../Components/CartDetails/KurzlichAngesehen";

const CartDetails = () => {
  return (
    <div className="cartPageDetails">
      <CartDetail />
      <PerfectPair />
      <Anwendung />
      <Comments />
      <WirEmpfehlenAuch />
      <KurzlichAngesehen />
    </div>
  );
};

export default CartDetails;
