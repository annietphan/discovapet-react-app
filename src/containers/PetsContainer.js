import React, { Component } from 'react'
import PetInput from '../components/PetInput'
import Pets from '../components/Pets'

class PetsContainer extends Component {

  render() {
    return(
      <div>
      PetsContainer
        <PetInput shelter={this.props.shelter}/>
        <Pets pets={this.props.shelter && this.props.shelter.pets}/>
      </div>
    )
  }
}

export default PetsContainer
