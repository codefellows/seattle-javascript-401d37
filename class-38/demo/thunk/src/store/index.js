import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

// This dependency enables the Redux Dev Tools in your Chrome Console.
import { composeWithDevTools } from 'redux-devtools-extension';


function fetchReducer(state="I fetched nothing", action) {

  const {type, payload} = action;

  switch(type) {

    case 'DO_SOMETHING':
      return 'I fetched: ' + payload;

    default:
      return state;
  }

}

// action creator

export function doSomethingSync() {
  return {
    type: 'DO_SOMETHING',
    payload: 'Immediate Luke Skywalker'
  }
}
export function doSomething() {

  return async function(dispatch) {

    const response = await axios.get('https://swapi.dev/api/people/1/');

    dispatch({
          type: 'DO_SOMETHING',
          payload: response.data.name,
    })
  }
}

let reducers = combineReducers({ fetcher: fetchReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();


// little utility to delay something by some milliseconds
function later(delay, value) {
  return new Promise(resolve => setTimeout(resolve, delay, value));
}


