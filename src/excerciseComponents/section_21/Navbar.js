import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/soda'>Soda</NavLink>
        <NavLink to='/chips'>Chips</NavLink>
        <NavLink to='/sardines'>Sardines</NavLink>
      </div>
    );
  }
}

export default Navbar;
