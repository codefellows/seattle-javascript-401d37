import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// This dependency enables the Redux Dev Tools in your Chrome Console.
import { composeWithDevTools } from 'redux-devtools-extension';

import categoryReducer from './category-reducer.js';
import productReducer from './product-reducer.js';

let reducers = combineReducers({ categoryReducer, productReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();

