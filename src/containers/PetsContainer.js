import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import PetInput from '../components/PetInput'
import Pets from '../components/Pets'
import Pet from '../components/Pet'

class PetsContainer extends Component {

  render() {
    return(
      <React.Fragment>
      {/*<Switch>
      <Route exact path="/shelters/:id/pets/:id" render={(routerProps) => <Pet {...routerProps} shelters={this.props.shelters} />} />
      </Switch>*/}
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
    </React.Fragment>

    )
  }
}

export default PetsContainer
