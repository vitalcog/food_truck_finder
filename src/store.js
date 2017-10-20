import { createStore } from 'redux'

function reducer (state, action ) {

  if(action.type === 'YELP_DATA') {
    console.log(action.payload)
    return {
      favorites: action.payload,
    }
  }
  return state;
}

export const store = createStore(reducer, {
  favorites: {},
})
