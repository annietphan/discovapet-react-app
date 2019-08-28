import React from 'react'
import {NavLink} from 'react-router-dom'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: '#ae5ee5',
  textDecoration: 'none',
  color: 'white'
}

const Nav = () => {
  return (
    <div className="navbar">
      <NavLink to='/' exact style={link} activeStyle={{background: '#66189a'}}>Home</NavLink>
      <NavLink to='/shelters' exact style={link} activeStyle={{background: '#66189a'}}>Shelters</NavLink>
      <NavLink to='/about' exact style={link} activeStyle={{background: '#66189a'}}>About</NavLink>
    </div>
  )
}


export default Nav


// <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <NavLink className='navbar-brand' to='/' >Discov-a-Pet</NavLink>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarNavDropdown">
//     <ul className="navbar-nav">
//       <li className="nav-item">
//         <NavLink className='nav-link' to='/shelters'>All Shelters</NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className='nav-link' to='/about'>About Us</NavLink>
//       </li>
//     </ul>
//   </div>
// </nav>
//
      //
