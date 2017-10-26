import { createStore } from 'redux'

function reducer (state, action ) {
console.log(action.payload);
  if(action.type === 'YELP_DATA') {
 
    return {
      favorites: action.payload,
    }
  }

  if (action.type === 'GO_TO_TRUCK') {
    console.log(action.payload)
    return {
      directions: action.payload,
    }
  }
  return state;
}

export const store = createStore(reducer, {
  favorites: {},
  directions: [],
})
