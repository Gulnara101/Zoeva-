// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   email: "",
//   shippingAddress: "",
//   paymentMethod: "creditCard",
//   Checked: false,
//   valid: false, 

// const checkoutSlice = createSlice({
//   name: "checkout",
//   initialState,
//   reducers: {
//     setEmail: (state, action) => {
//       state.email = action.payload;
//     },
//     setShippingAddress: (state, action) => {
//       state.shippingAddress = action.payload;
//     },
//     setPaymentMethod: (state, action) => {
//       state.paymentMethod = action.payload;
//     },
//     toggleIsChecked: (state) => {
//       state.isChecked = !state.Checked;
//     },
//     validateForm: (state) => {
//       state.valid = state.email !== "" && state.shippingAddress !== "";
//     },
//   },
// });

// export const { setEmail, setShippingAddress, setPaymentMethod, toggleIsChecked, validateForm } =
//   // checkoutSlice.actions;

// // export default checkoutSlice.reducer;
