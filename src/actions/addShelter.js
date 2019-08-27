export const addShelter = (data) => {

  return (dispatch) => {
    debugger
    fetch('http://localhost:3000/api/v1/shelters', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(shelter => dispatch({
      type: 'ADD_SHELTER',
      payload: shelter
    }))
  }

}
