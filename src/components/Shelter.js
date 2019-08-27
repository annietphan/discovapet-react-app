import React from 'react'

const Shelter = (props) => {
  console.log(props)

  const shelter = props.shelters[props.match.params.id - 1]
  console.log(shelter)

  return (
    <div>
      <h2>{shelter ? shelter.name : null}</h2>
      <p>{shelter ? shelter.street_address : null}</p>
      <p>{shelter ? shelter.city : null}, {shelter ? shelter.state : null} {shelter ? shelter.zipcode : null}</p>
      <p>Animals: {shelter ? shelter.pets.length : null}</p>
    </div>
  )
}

export default Shelter
