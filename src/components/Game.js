import { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      gameOver: false,
      color: 'cyan',
    };
  }

  render() {
    return (
      <div>
        <h1>Your score is: {this.state.score}</h1>
        <h1>Color: {this.state.color}</h1>
        <h2>Name: {this.props.name}</h2>
        <h2>Surname: {this.props.surname}</h2>
      </div>
    );
  }
}

export default Game;
