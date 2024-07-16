import { configureStore } from '@reduxjs/toolkit';
import { reducer as sliceReducer } from './CreateSlice';

const store = configureStore({
  reducer: {
    cart: sliceReducer,
  },
});

export default store;
