const shelterReducer = (state = {shelters: []}, action) => {
debugger
  switch (action.type) {
    case 'FETCH_SHELTERS':
      return {shelters: action.payload}
    case 'ADD_SHELTER':
      return {...state, shelters: [...state.shelters, action.payload]}
    case 'ADD_PET':
      return {}
    default:
      return state
  }

}


export default shelterReducer
