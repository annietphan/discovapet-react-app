import React from 'react'

const Pets = (props) => {

  console.log(props.pets)
  return (
    <div>
      <p>List of Pets</p>
      {props.pets && props.pets.map(pet =>
        <li key={pet.id}>
          {pet.name}
        </li>
      )}
    </div>
  )
}

export default Pets
