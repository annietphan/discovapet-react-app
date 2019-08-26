const shelterReducer = (state = {shelters: []}, action) => {

  switch (action.type) {
    case 'FETCH_SHELTERS':
      return {shelters: action.payload}
    default:
      return state
  }

}


export default shelterReducer
