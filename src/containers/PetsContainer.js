import React, { Component } from 'react'
import PetInput from '../components/PetInput'
import Pets from '../components/Pets'

class PetsContainer extends Component {

  render() {
    return(
      <div>
      PetsContainer
        <PetInput />
        <Pets pets={this.props.shelter && this.props.shelter.pets}/>
      </div>
    )
  }
}

export default PetsContainer
