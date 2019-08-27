import React from 'react'
import { Link} from 'react-router-dom'
// import Shelter from './Shelter'

const Shelters = (props) => {
  return (
    <div>
      <h3>All Shelters</h3>
      {props.shelters.map(shelter =>
        <div key={shelter.id}><Link to={`/shelters/${shelter.id}`}>{shelter.name}</Link></div>
      )}
    </div>
  )
}

export default Shelters
