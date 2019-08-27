import React from 'react'
import {Redirect} from 'react-router-dom'
import PetsContainer from '../containers/PetsContainer'

const Shelter = (props) => {
  console.log(props)

  const shelter = props.shelters[props.match.params.id - 1]

  return (
    <div>
      {/*shelter ? null : <Redirect to='/shelters' /> */}
      <h2>{shelter && shelter.name }</h2>
      <p>{shelter && shelter.street_address}</p>
      <p>{shelter && shelter.city}, {shelter && shelter.state} {shelter && shelter.zipcode}</p>
      <p>Animals: {shelter && shelter.pets.length}</p><br />
      <h4>Pets:</h4>
      <PetsContainer shelter={shelter}/>
    </div>
  )
}

export default Shelter
