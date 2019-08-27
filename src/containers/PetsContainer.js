import React, { Component } from 'react'
import PetInput from '../components/PetInput'
import Pets from '../components/Pets'

class PetsContainer extends Component {

  render() {
    return(
      <div>
      PetsContainer
        <PetInput />
        <Pets />
      </div>
    )
  }
}

export default PetsContainer
