import React from 'react'

const Shelter = (props) => {

  return (
    <div>
       {props.shelter.name} - {props.shelter.pets.length} animals
    </div>
  )

}

export default Shelter
