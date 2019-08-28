const shelterReducer = (state = {shelters: []}, action) => {

  switch (action.type) {
    case 'FETCH_SHELTERS':
      return {shelters: action.payload}

    case 'ADD_SHELTER':
      return {...state, shelters: [...state.shelters, action.payload]}

    case 'ADD_PET':

      const addedShelters = state.shelters.map( shelter => {
        if (shelter.id === action.payload.id) {
          return action.payload
        } else {
          return state
        }
      })
      return {...state, shelters: addedShelters}

    case 'DELETE_PET':
      const deletedShelters = state.shelters.map(shelter => {
        if (shelter.id === action.payload.id) {
          return action.payload
        } else {
          return state
        }
      })
      return {...state, shelters: deletedShelters}

    default:
      return state
  }

}


export default shelterReducer
