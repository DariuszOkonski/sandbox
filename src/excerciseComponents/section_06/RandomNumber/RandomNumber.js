import React, { Component } from 'react';

const WIN_NUMBER = 7;

class RandomNumber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomNumber: 1,
    };

    this.handleRandomNumber = this.handleRandomNumber.bind(this);
  }

  handleRandomNumber() {
    const localRandomNumber = Math.floor(Math.random() * 10);

    this.setState({ randomNumber: localRandomNumber });
  }

  render() {
    return (
      <div>
        <h1>Number is: {this.state.randomNumber}</h1>
        {this.state.randomNumber !== WIN_NUMBER ? (
          <button onClick={this.handleRandomNumber}>Random Number</button>
        ) : (
          <h2>You Win!!!</h2>
        )}
      </div>
    );
  }
}

export default RandomNumber;
