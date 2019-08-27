import React from 'react'
import {Redirect} from 'react-router-dom'
import PetsContainer from '../containers/PetsContainer'

const Shelter = (props) => {
  console.log(props)

  const shelter = props.shelters[props.match.params.id - 1]

  return (
    <div>
      {/*shelter ? null : <Redirect to='/shelters' /> */}
      <h2>{shelter ? shelter.name : null}</h2>
      <p>{shelter ? shelter.street_address : null}</p>
      <p>{shelter ? shelter.city : null}, {shelter ? shelter.state : null} {shelter ? shelter.zipcode : null}</p>
      <p>Animals: {shelter ? shelter.pets.length : null}</p><br />
      <h4>Pets:</h4>
      <PetsContainer />
    </div>
  )
}

export default Shelter
