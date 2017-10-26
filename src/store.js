import { createStore } from 'redux'
import { receiveData } from './actions';
// import { storeDirections } from './actions';


function reducer (state, action ) {
  if(action.type === 'YELP_DATA') {
 
    return {
      favorites: action.payload,
      instructions: state.instructions,
    }
  }

  if (action.type === 'GO_TO_TRUCK') {
    console.log(action.payload)
    return {
      instructions: action.payload,
      favorites: state.favorites,
    }
  }
  return state;
}

export const store = createStore(reducer, {
  favorites: {},
  instructions: [],
})
