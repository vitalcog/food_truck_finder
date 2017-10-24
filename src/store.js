import { createStore } from 'redux'

function reducer (state, action ) {

  if(action.type === 'YELP_DATA') {
    console.log(action.payload)
    return {
      favorites: action.payload,
    }
  }

  if (action.type === 'GO_TO_TRUCK') {
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
