import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addPet} from '../actions/addPet'

class PetInput extends Component {

  state = {
    name: '',
    kind: 'dog',
    gender: 'female',
    breed: '',
    size: '',
    age: ''
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.addPet(this.state, this.props.id)
    this.setState({
      name: '',
      kind: 'dog',
      gender: 'female',
      breed: '',
      size: '',
      age: ''
    })
  }

  render() {
    return(
      <div>
        <h4>Add Pet:</h4>
        <form onSubmit={this.handleOnSubmit}>
          <label>Name:</label>
          <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleOnChange}/><br />

          <label>Pet Type:</label>
            <select name="kind" value={this.state.kind} onChange={this.handleOnChange}>
              <option>dog</option>
              <option>cat</option>
            </select><br />

          <label>Gender:</label>
            <select name="gender" value={this.state.gender} onChange={this.handleOnChange}>
              <option>male</option>
              <option>female</option>
            </select><br />

          <label>Breed:</label>
          <input type="text" placeholder="Breed" name="breed" value={this.state.breed} onChange={this.handleOnChange}/><br />

          <label>Size:</label>
          <input type="text" placeholder="Size" name="size" value={this.state.size} onChange={this.handleOnChange}/><br />

          <label>Age:</label>
          <input type="text" placeholder="Age" name="age" value={this.state.age} onChange={this.handleOnChange}/><br />


          <input type="submit" />
        </form>
      </div>
    )
  }
}


export default connect(null, {addPet})(PetInput)


// figure out checkbox values later
// <label>Vaccinations up to date?</label>
// <input type="checkbox" name="isVaccinated" checked={this.state.isVaccinated} value={this.state.isVaccinated} onChange={this.handleOnChange}/><br />
//
// <label>House-trained?</label>
// <input type="checkbox" name="isHouseTrained" value={this.state.isHouseTrained} onChange={this.handleOnChange}/><br />
//
// <label>Good with cats?</label>
// <input type="checkbox" name="goodWithCats" value={this.state.goodWithCats} onChange={this.handleOnChange}/><br />
//
// <label>Good with dogs?</label>
// <input type="checkbox" name="goodWithDogs" value={this.state.goodWithDogs} onChange={this.handleOnChange}/><br />
//
// <label>Good with kids?</label>
// <input type="checkbox" name="goodWithKids" value={this.state.goodWithKids} onChange={this.handleOnChange}/><br />
// ,
// isVaccinated: true,
// isHouseTrained: true,
// goodWithCats: true,
// goodWithDogs: true,
// goodWithKids: true
