import React, { Component } from 'react';
import Box from './Box';
import './BoxContainer.css';

class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 18,
    allColors: [
      'purple',
      'magenta',
      'violet',
      'pink',
      'red',
      'green',
      'crimson',
      'blue',
      'yellow',
    ],
  };

  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box key={Math.random()} allColors={this.props.allColors} />
    ));

    return <div className='BoxContainer'>{boxes}</div>;
  }
}

export default BoxContainer;
