import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartRedux"; // Sepetle ilgili reducer

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
