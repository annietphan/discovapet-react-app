import React from 'react'
import img2 from '../assets/IMG_6415.jpg'

const PetCard = props => {
  return(
    <div className='card text-center'>
      <div className='card-header text-dark'>
        <p>{props.pet.name}</p>
      </div>
      <div className='overflow'>
        <img src={img2} alt=""  className="card-img-bottom"/>
      </div>
    </div>
  )
}

export default PetCard
