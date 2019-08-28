import React from 'react'
import img1 from '../assets/petpoplogo.jpg'

const ShelterCard = props => {
  return(
    <div className='card mb-4 box-shadow text-center'>
      <div className='overflow'>
        <img src={img1} alt=""  className="card-img-top"/>
      </div>
      <div className='card-body text-dark'>
        <strong>{props.shelter.name}</strong>
      </div>
    </div>
  )
}

export default ShelterCard
