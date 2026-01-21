import React, { Component } from 'react';
import LotteryBall from './LotteryBall';

class Lottery extends Component {
  render() {
    return (
      <div>
        <h1>Lottery</h1>
        <LotteryBall num={10} />
        <LotteryBall num={6} />
        <LotteryBall num={11} />
      </div>
    );
  }
}

export default Lottery;
