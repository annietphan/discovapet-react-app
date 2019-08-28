import React from 'react';
import SheltersContainer from './containers/SheltersContainer'
import PetsContainer from './containers/PetsContainer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
// import Shelters from './components/Shelters'
import Navbar from './components/Navbar'
import './App.css';

class App extends React.Component {

  componentDidMount(){
  }

  render() {
    return(
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path="/pets" component={PetsContainer} />
            <SheltersContainer />
          </Switch>
        </Router>
      </div>
    )
  }
}


export default App
