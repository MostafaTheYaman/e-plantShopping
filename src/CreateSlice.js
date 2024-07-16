// CreateSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
    // Add other reducers as needed
  },
});

export const { addItem, removeItem, updateQuantity } = slice.actions;
export const reducer = slice.reducer;

export default slice;
