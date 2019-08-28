import React from 'react'
import img2 from '../assets/bow&thor.jpg'

class PetCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  increment = () => {
    const increasedCount = this.state.count + 1
    this.setState({
      count: increasedCount
    })
  }

  render() {
    return(
      <div className="card text-center">
        <div className="overflow">
          <img src={img2} alt="" className="card-img-bottom" />
        </div>
        <div className="card-header text-dark">
          <h4>{this.props.pet.name}</h4>
          <p onClick={this.increment}>Votes: {this.state.count}</p>
        </div>
      </div>
    )
  }
}

export default PetCard

// const PetCard = props => {
//   return(
//     <div className='card text-center'>
//       <div className='overflow'>
//         <img src={img2} alt=""  className="card-img-bottom"/>
//       </div>
//       <div className='card-header text-dark'>
//         <p>{props.pet.name}</p>
//       </div>
//     </div>
//   )
// }
//
// export default PetCard
