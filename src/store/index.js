import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './products';
import catagorySlice from './catagories';
import cartSlice from './cart';

let reducers = combineReducers({
  catagory: catagorySlice,
  products: productsSlice,
  cart: cartSlice,
});

const store = configureStore({ reducer: reducers });

export default store;
