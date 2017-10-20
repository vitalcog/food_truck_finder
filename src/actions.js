export function receiveData(response) {
  return {
    type: 'YELP_DATA',
    payload: response,
  }
}
