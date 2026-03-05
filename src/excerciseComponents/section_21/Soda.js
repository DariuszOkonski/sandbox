import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Soda extends Component {
  render() {
    return (
      <div>
        <h1>Soda</h1>

        <Link to='/'>Go Back</Link>
      </div>
    );
  }
}

export default Soda;
