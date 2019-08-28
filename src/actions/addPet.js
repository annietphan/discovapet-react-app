export const addPet = (pet, shelterId) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/shelters/${shelterId}/pets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(pet)
    })
    .then(response => response.json())
    .then(shelter => dispatch({type: 'ADD_PET', payload: shelter}))

  }

}
