// store.js

import { configureStore } from '@reduxjs/toolkit';
import { reducer as sliceReducer } from './CreateSlice'; // Correct import path based on your structure

const store = configureStore({
  reducer: {
    cart: sliceReducer,
    // Add other reducers here if needed
  },
});

export default store;
