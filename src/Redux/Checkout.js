import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  country: "",
  firstName: "",
  lastName: "",
  address: "",
  apartment: "",
  postalCode: "",
  city: "",
  phone: "",
  errors: {}, // Hata mesajlarını saklamak için
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetForm: () => initialState,
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const { updateForm, resetForm, setErrors } = formSlice.actions;
export default formSlice.reducer;
