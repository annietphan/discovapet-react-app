import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchShelters} from '../actions/fetchShelters'
import ShelterInput from '../components/ShelterInput'
import Shelters from '../components/Shelters'

class SheltersContainer extends Component {

  componentDidMount(){
    this.props.fetchShelters()
  }

  render() {
    return(
      <div>
        <ShelterInput /><br /><br />
        <Shelters shelters={this.props.shelters}/>
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
