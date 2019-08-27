import React from 'react';
import SheltersContainer from './containers/SheltersContainer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
// import Shelters from './components/Shelters'
import './App.css';

class App extends React.Component {

  componentDidMount(){
  }

  render() {
    return(
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <SheltersContainer />
          </Switch>
        </Router>
      </div>
    )
  }
}


export default App
