import { Component } from 'react';
import Head from './images/head.png';
import Tail from './images/tail.png';

class AppCoinFlip extends Component {
  render() {
    return (
      <div>
        <img src={Head} alt='' />
        <img src={Tail} alt='' />
      </div>
    );
  }
}

export default AppCoinFlip;
