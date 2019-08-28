import React from 'react'
import { Link} from 'react-router-dom'
// import Shelter from './Shelter'
import ShelterCard from './ShelterCard'

const Shelters = (props) => {
  return (
    <div>
      <h3>All Shelters</h3>
      <p>Don't see yours listed? Add <a href="/shelters/new">here!</a></p>
      <div className="container-fluid d-flex justify-content-center">
        <div className='row'>
          {props.shelters.map(shelter =>
            <div className='col-md-4' key={shelter.id}><Link to={`/shelters/${shelter.id}`}><ShelterCard shelter={shelter}/></Link></div>
          )}
        </div>

      </div>

    </div>
  )
}

export default Shelters
