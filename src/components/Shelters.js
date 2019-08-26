import React from 'react'

const Shelters = (props) => {
  return (
    <div>
      {props.shelters.map(shelter =>
        <li key={shelter.id}>{shelter.name} - {shelter.email}</li>
      )}
    </div>
  )
}

export default Shelters
