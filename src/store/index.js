import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import catagory from './catagories';
import products from './products';
import cart from './cart';

let reducers = combineReducers({ catagory, products, cart });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
