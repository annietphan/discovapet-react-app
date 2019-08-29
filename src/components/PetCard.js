import React from 'react'
import img2 from '../assets/bow&thor.jpg'

class PetCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  upVote = () => {
    const increasedCount = this.state.count + 1
    this.setState({
      count: increasedCount
    })
  }

  downVote = () => {

    if (this.state.count > 0) {
      const decreasedCount = this.state.count -1
      this.setState({
        count: decreasedCount
      })
    } else {
      this.setState({
        count: this.state.count
      })
    }

  }

  render() {
    return(
      <div className="card text-center">
        <div className="overflow">
          <img src={img2} alt="" className="card-img-bottom" />
        </div>
        <div className="card-header text-dark">
          <h4>{this.props.pet.name}</h4>
          <p><button onClick={this.downVote}>-</button> Votes: {this.state.count} <button onClick={this.upVote}>+</button></p>
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
