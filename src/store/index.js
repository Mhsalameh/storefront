import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import catagory from './catagories';

let reducers = combineReducers({ catagory });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
