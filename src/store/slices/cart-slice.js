//createslice
//initalise initial state
//slice ->name,mention initial state, actions

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    RemoveFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, RemoveFromCart } = cartSlice.actions;

export default cartSlice.reducer;
