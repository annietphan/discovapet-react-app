import React from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {deletePet} from '../actions/deletePet'
import PetCard from './PetCard'

const Pets = (props) => {

  console.log(props.pets)

  const handleDelete = (pet) => {
    props.deletePet(pet.id, pet.shelter_id)
  }

  return (
    <div>
      <h4>Adoptable Pets:</h4>
      <div className="container-fluid d-flex justify-content-center">
        <div className='row'>
          {props.pets && props.pets.map(pet =>
            <div className='col-md-4' key={pet.id}>
              <PetCard pet={pet}/>
              <button onClick={() => handleDelete(pet)}>x</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default connect(null, {deletePet})(Pets)
