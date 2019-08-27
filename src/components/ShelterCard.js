import React from 'react'
import img1 from '../assets/petpoplogo.jpg'

const ShelterCard = props => {
  return(
    <div className='sheltercard text-center'>
      <div className='overflow'>
        <img src={img1} alt=""  className="card-img-top"/>
      </div>
      <div className='sheltercard-body text-dark'>
        <p>{props.shelter.name}</p>
      </div>
    </div>
  )
}

export default ShelterCard
