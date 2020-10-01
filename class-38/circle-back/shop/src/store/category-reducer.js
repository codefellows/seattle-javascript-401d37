import axios from 'axios'

const initialState = {categories: [], activeCategory:'' };

export default function categoryReducer(state=initialState, action) {

  switch(action.type){

    case 'UPDATE_CATEGORIES':

      return {...state, categories: action.payload};

    case 'CHANGE_CATEGORY':

      return {...state, activeCategory: action.payload};

    default:

      return state;
  }
}

export function getCategories() {

  return async function (dispatch) {
    const response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
    dispatch({
      type: 'UPDATE_CATEGORIES',
      payload: response.data.results
    })
  }
}
