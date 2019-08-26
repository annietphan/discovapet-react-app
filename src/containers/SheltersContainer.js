import React, { Component } from 'react'
import {connect} from 'react-redux'

import ShelterInput from '../components/ShelterInput'
import Shelters from '../components/Shelters'

class SheltersContainer extends Component {
  render() {
    return(
      <div>
        Shelters Container
        <ShelterInput />
        <Shelters />
      </div>
    )
  }
}

export default connect()(SheltersContainer)
