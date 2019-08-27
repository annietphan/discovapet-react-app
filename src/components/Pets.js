import React from 'react'

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

export default Pets
