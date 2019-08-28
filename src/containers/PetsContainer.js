import React, { Component } from 'react'
import PetInput from '../components/PetInput'
import Pets from '../components/Pets'

class PetsContainer extends Component {

  render() {
    return(
      <div className="container">
        <Pets pets={this.props.shelter && this.props.shelter.pets}/><br /><br />
        <PetInput shelter={this.props.shelter}/>

      </div>
    )
  }
}

export default PetsContainer
