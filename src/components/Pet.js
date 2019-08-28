import React from 'react'
import {connect} from 'react-redux'
import {deletePet} from '../actions/deletePet'


const Pet = (props) => {
  console.log(props)
  const capitalize = {
    textTransform: 'capitalize'
  }

  const handleDelete = (pet) => {
    props.deletePet(pet.id, pet.shelter_id)
  }
  return(
    <React.Fragment>
      <div className="container">
          <div className='card text-center'>
            <p style={capitalize}>{props.pet.gender} {props.pet.kind}</p>
            <p style={capitalize}>{props.pet.size} {props.pet.breed}</p>
            <p style={capitalize}>Age: {props.pet.age}</p>
            <button onClick={() => handleDelete(props.pet)}>delete</button>
          </div>
      </div>
    </React.Fragment>
  )

}

export default connect(null, {deletePet})(Pet)
