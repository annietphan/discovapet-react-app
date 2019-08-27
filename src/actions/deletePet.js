export const deletePet = (petId, shelterId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/shelters/${shelterId}/pets/${petId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(shelter => dispatch({
      type: "DELETE_PET",
      payload: shelter
    }))
  }
}
