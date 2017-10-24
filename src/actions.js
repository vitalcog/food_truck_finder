export function receiveData(response) {
  return {
    type: 'YELP_DATA',
    payload: response,
  }
}

export function storeDirections(directions) {
  console.log(directions);
  return {
    type: 'GO_TO_TRUCK',
    payload: directions,
  }
}
