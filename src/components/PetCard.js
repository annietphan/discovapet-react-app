import React from 'react'
import img1 from '../assets/petpoplogo.jpg'

const PetCard = props => {
  return(
    <div className='petcard text-center'>
      <div className='overflow'>
        <img src={img1} alt=""  className="card-img-top"/>
      </div>
      <div className='petcard-body text-dark'>
        <p>{props.shelter.name}</p>
      </div>
    </div>
  )
}

export default PetCard
