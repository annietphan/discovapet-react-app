import React from 'react'

const Pet = ({pet}) => {
  const capitalize = {
    textTransform: 'capitalize'
  }
  return(
    <>
    <p style={capitalize}>{pet.gender} {pet.kind}</p>
    <p>{pet.size} {pet.breed}</p>
    <p></p>
    </>
  )

}

export default Pet
