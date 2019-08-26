import React, { Component } from 'react'

class ShelterInput extends Component {

  state = {
    name: '',
    street_address: '',
    city: '',
    state: '',
    zipcode: '',
    email: '',
    number: ''
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    
  }

  render() {
    return(
      <div className="shelterForm">
        <h3>Add Organization:</h3>
        <form onSubmit={this.handleOnSubmit}>
          <label>Organization Name:</label><br />
            <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleOnChange}/><br />

          <label>Address:</label><br />
            <input type="text" name="street_address" placeholder="Street Address" value={this.state.street_address} onChange={this.handleOnChange}/><br />
            <input type="text" name="city" placeholder="City" value={this.state.city} onChange={this.handleOnChange}/><br />
            <input type="text" name="state" placeholder="State" value={this.state.state} onChange={this.handleOnChange}/><br/>
            <input type="text" name="zipcode" placeholder="Zipcode" value={this.state.zipcode} onChange={this.handleOnChange}/><br />

          <label>Contact Information:</label><br />
            <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleOnChange}/><br />
            <input type="text" name="number" placeholder="Phone Number" value={this.state.number} onChange={this.handleOnChange}/><br />

          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default ShelterInput
