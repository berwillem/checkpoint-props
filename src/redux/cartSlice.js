import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      state.products.push(action.payload);
      state.total += action.payload.price;
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.total = state.total - action.payload.price;
    },
  },
});

export const { addTocart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
