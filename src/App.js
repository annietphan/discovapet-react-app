import React from 'react';

import {connect} from 'react-redux'
import {fetchShelters} from './actions/fetchShelters'
import './App.css';

class App extends React.Component {

  componentDidMount(){
    this.props.fetchShelters({type: 'FETCH_SHELTERS', payload: {name: 'Ward-Howe'}})
  }

  render() {
    return(
      <div className="App">
        App
      </div>
    )
  }
}


export default connect(null, {fetchShelters})(App)
