export function fetchShelters(action) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/shelters')
    .then(res => res.json())
    .then(shelters => dispatch({
      type: 'FETCH_SHELTERS',
      payload: shelters
    }))
  }

}
