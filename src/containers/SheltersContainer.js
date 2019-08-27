import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchShelters} from '../actions/fetchShelters'
import ShelterInput from '../components/ShelterInput'
import Shelters from '../components/Shelters'
import Shelter from '../components/Shelter'

class SheltersContainer extends Component {

  componentDidMount(){
    this.props.fetchShelters()
  }

  render() {
    return(
      <div>
        <Switch>
          <Route path="/shelters/new" component={ShelterInput} />
          <Route path="/shelters/:id" render={(routerProps) => <Shelter {...routerProps} shelters={this.props.shelters}/>} />
          <Route exact path='/shelters' render={ (routerProps) => <Shelters {...routerProps} shelters={this.props.shelters} /> } />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    shelters: state.shelters
  }
}

export default connect(mapStateToProps, {fetchShelters})(SheltersContainer)
