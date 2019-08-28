import React from 'react'
import img2 from '../assets/IMG_6415.jpg'

const PetCard = props => {
  return(
    <div className='petcard text-center'>
      <div className='overflow'>
        <img src={img2} alt=""  className="card-img-top"/>
      </div>
      <div className='petcard-body text-dark'>
        <p>{props.pet.name}</p>
      </div>
    </div>
  )
}

export default PetCard
