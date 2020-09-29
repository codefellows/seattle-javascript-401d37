import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import products from './products.js';

let reducers = combineReducers({ products });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
