import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VendingMachine extends Component {
  render() {
    return (
      <div>
        <h1>VendingMachine</h1>
        <Link to='/soda'>Soda</Link>
        <Link to='/chips'>Chips</Link>
        <Link to='/sardines'>Sardines</Link>
      </div>
    );
  }
}

export default VendingMachine;
