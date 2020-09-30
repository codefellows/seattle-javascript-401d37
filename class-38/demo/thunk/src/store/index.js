import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

// This dependency enables the Redux Dev Tools in your Chrome Console.
import { composeWithDevTools } from 'redux-devtools-extension';

const doNothingReducer = (state = { value: 'nothing' }, action) => {
  return state;
};

const doSomethingReducer = (state = { value: 'nothing' }, action) => {

  if (action.type === 'GET_SOMETHING') {
    return { ...state, value: action.payload };
  }

  return state;
}

const loadingReducer = (state = false, action) => {

  if (action.type === 'LOADING') {
    return action.payload === true;
  }

  return state;
}

const loading = (bool) => ({ type: 'LOADING', payload: bool })


let reducers = combineReducers({ doNothingReducer, doSomethingReducer, loadingReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();


export const getSomething = (flavor = 'sync') => {

  switch (flavor) {
    case 'async':

      return async function (dispatch) {

        dispatch(loading(true));

        // const response = await later(1000, { data: { name: 'James Brown' } });

        const response = await axios.get('https://swapi.dev/api/people/1');

        dispatch(loading(false));

        dispatch({ type: 'GET_SOMETHING', payload: response.data.name })
      }

    default:
      return {
        type: 'GET_SOMETHING',
        payload: 'thing I got immediately'
      }
  }
}

// little utility to delay something by some milliseconds
function later(delay, value) {
  return new Promise(resolve => setTimeout(resolve, delay, value));
}
