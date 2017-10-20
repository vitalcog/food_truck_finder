export function receiveData(response) {
  console.log(response)
  return {
    type: 'YELP_DATA',
    payload: response,
  }
}
