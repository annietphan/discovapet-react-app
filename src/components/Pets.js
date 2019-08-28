import React from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {deletePet} from '../actions/deletePet'

const Pets = (props) => {

  console.log(props.pets)

  const handleDelete = (pet) => {
    props.deletePet(pet.id, pet.shelter_id)
  }

  return (
    <div>
      <h4>Adoptable Pets:</h4>
      {props.pets && props.pets.map(pet =>
        <li key={pet.id}>
          {pet.name}
          <button onClick={() => handleDelete(pet)}>x</button>
        </li>
      )}
    </div>
  )
}

export default connect(null, {deletePet})(Pets)
