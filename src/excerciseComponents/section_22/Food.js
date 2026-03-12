import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class Food extends Component {
  render() {
    const url = `https://source.unsplash.com/1600x900/?${this.props.name}`;

    return (
      <div>
        {/\d/.test(this.props.name) ? (
          <Navigate to='/' replace />
        ) : (
          <div>
            <h1>I love to eat: {this.props.name}</h1>
            <img src={url} alt={this.props.name} />
          </div>
        )}
      </div>
    );
  }
}

export default Food;
