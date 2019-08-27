import React from 'react'
import Shelter from './Shelter'

const Shelters = (props) => {
  return (
    <div>
      {props.shelters.map(shelter =>
        <li key={shelter.id}><Shelter shelter={shelter}/></li>
      )}
    </div>
  )
}

export default Shelters
