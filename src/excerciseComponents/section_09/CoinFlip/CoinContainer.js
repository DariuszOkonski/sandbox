import { Component } from 'react';
import Head from './images/head.png';
import Tail from './images/tail.png';
import { choice } from './helpers';

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: 'heads', imgSrc: Head },
      { side: 'tails', imgSrc: Tail },
    ],
  };

  constructor(props) {
    super(props);

    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const newCoin = choice(this.props.coins);

    this.setState((prevState) => ({
      currCoin: newCoin,
      nFlips: prevState.nFlips + 1,
      nHeads:
        newCoin.side === 'heads' ? prevState.nHeads + 1 : prevState.nHeads,
      nTails:
        newCoin.side === 'tails' ? prevState.nTails + 1 : prevState.nTails,
    }));
  }

  handleClick() {
    this.flipCoin();
  }

  render() {
    return (
      <div className='CoinContainer'>
        <h2>Let's Flip A Coin!</h2>
        <button onClick={this.handleClick}>Flip Me!</button>
        <p>
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{' '}
          heads and {this.state.nTails} tails
        </p>
      </div>
    );
  }
}

// <img src={Head} alt='head' />
export default CoinContainer;
