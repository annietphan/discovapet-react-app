import React, { Component } from 'react'
import {connect} from 'react-redux'

class PetInput extends Component {

  render() {
    return(
      <div>
        <h4>Add Pet:</h4>
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Name" /><br />
          <label>Pet Type:</label>
            <select>
              <option>dog</option>
              <option>cat</option>
            </select><br />
          <label>Gender:</label>
            <select>
              <option>male</option>
              <option>female</option>
            </select><br />
          <label>Breed:</label>
          <input type="text" placeholder="Breed" /><br />
          <label>Size:</label>
          <input type="text" placeholder="Size" /><br />
          <label>Age:</label>
          <input type="text" placeholder="Age" /><br />
          <label>Vaccinations up to date?</label>
          <input type="checkbox" /><br />
          <label>House-trained?</label>
          <input type="checkbox"  /><br />
          <label>Good with cats?</label>
          <input type="checkbox"  /><br />
          <label>Good with dogs?</label>
          <input type="checkbox"  /><br />
          <label>Good with kids?</label>
          <input type="checkbox"  /><br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null)(PetInput)
