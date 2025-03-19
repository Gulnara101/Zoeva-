import { createSlice } from "@reduxjs/toolkit";

const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cartItems");
  return storedCart ? JSON.parse(storedCart) : [];
};

const calculateTotalPrice = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

const initialState = {
  cartItems: getCartFromLocalStorage(),
  totalQuantity: getCartFromLocalStorage().reduce((sum, item) => sum + item.quantity, 0),
  totalPrice: calculateTotalPrice(getCartFromLocalStorage()),
};

const formatPrice = (priceString) => {
  priceString = priceString.toString().replace(/[^0-9,.-]+/g, "").replace(",", ".");
  return parseFloat(priceString) || 0;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const price = formatPrice(action.payload.price);
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, price, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice = calculateTotalPrice(state.cartItems);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if (itemIndex !== -1) {
        const item = state.cartItems[itemIndex];
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.cartItems.splice(itemIndex, 1);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload.id);

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.totalQuantity -= 1;
          state.totalPrice -= item.price;
        } else {
          state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
          state.totalQuantity -= 1;
          state.totalPrice -= item.price;
        }
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
