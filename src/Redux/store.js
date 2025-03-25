import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartRedux"; 
import checkoutReducer from "./Checkout";

const store = configureStore({
  reducer: {
    form: checkoutReducer,
    cart: cartReducer,
  },
});

export default store;
