import React, { Component } from 'react'

class ShelterInput extends Component {


  render() {
    return(
      <div className="shelterForm">
        <h3>Add Organization:</h3>
        <form>
          <label>Organization Name:</label><br />
          <input type="text" placeholder="Name" /><br />
          <label>Address:</label><br />
          <input type="text" placeholder="Street Address" /><br />
          <input type="text" placeholder="City" /><br />
          <input type="text" placeholder="State" /><br/>
          <input type="number" placeholder="Zipcode" /><br />
          <label>Contact Information:</label><br />
          <input type="string" placeholder="Email" /><br />
          <input type="string" placeholder="Phone Number" /><br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default ShelterInput
