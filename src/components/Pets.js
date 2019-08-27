import React from 'react'
import {connect} from 'react-redux'
import {deletePet} from '../actions/deletePet'

const Pets = (props) => {

  console.log(props.pets)

  const handleDelete = () => {

  }

  return (
    <div>
      <p>List of Pets</p>
      {props.pets && props.pets.map(pet =>
        <li key={pet.id}>
          {pet.name}
          <button onClick={handleDelete}>x</button>
        </li>
      )}
    </div>
  )
}

export default connect(null, {deletePet})(Pets)
