import React, { Component } from 'react';
import './Box.css';
import { boxColorChoice } from './helper';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: boxColorChoice(this.props.allColors),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  pickColor() {
    let newColor;

    do {
      newColor = boxColorChoice(this.props.allColors);
    } while (newColor === this.state.color);

    this.setState({ color: newColor });
  }

  handleClick() {
    this.pickColor();
  }

  render() {
    return (
      <div
        className='Box'
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default Box;
