import React, { Component } from 'react'
import PetInput from '../components/PetInput'
import Pets from '../components/Pets'

class PetsContainer extends Component {

  render() {
    return(
      <>
      <div className="container-fluid d-flex justify-content-center">
        <div className='row'>
          <Pets pets={this.props.shelter && this.props.shelter.pets}/><br /><br />
        </div>
      </div>
      <div className="container-fluid d-flex justify-content-center">
        <div className='row'>
          <PetInput shelter={this.props.shelter}/>
        </div>
      </div>
      </>

    )
  }
}

export default PetsContainer
