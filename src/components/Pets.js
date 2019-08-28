import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
// import {deletePet} from '../actions/deletePet'
import PetCard from './PetCard'
import Pet from './Pet'

const Pets = (props) => {

  // console.log(props.pets)

  // const handleDelete = (pet) => {
  //   props.deletePet(pet.id, pet.shelter_id)
  // }

  return (
    <div>
      <h4>Adoptable Pets:</h4>
      <div className="container-fluid d-flex justify-content-center">
        <div className='row'>
          {props.pets && props.pets.map(pet =>
            <div className='col-md-4' key={pet.id}>

              <Link to={`/shelters/${pet.shelter_id}/pets/${pet.id}`}><PetCard pet={pet}/></Link>
              <Route exact path={`/shelters/${pet.shelter_id}/pets/${pet.id}`} render={(routerProps)=> <Pet pet={pet}/>} />
              {/* <button onClick={() => handleDelete(pet)}>x</button>*/}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default connect(null)(Pets)
//
//
// <Switch>
//   <Route exact path="/shelters/:id/pets/:id" render={(routerProps) => <Pet {...routerProps}/>}/>
// </Switch>
