import React, { Component } from 'react';
import './Box.css';
import { boxColorChoice } from './helper';

class Box extends Component {
  static defaultProps = {
    allColors: ['purple', 'magenta', 'yellow', 'pink'],
  };

  constructor(props) {
    super(props);
    this.state = {
      color: boxColorChoice(this.props.allColors),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

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
