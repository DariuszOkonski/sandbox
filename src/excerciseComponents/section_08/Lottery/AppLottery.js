import React, { Component } from 'react';
import Lottery from './Lottery';

class AppLottery extends Component {
  render() {
    return (
      <div>
        <Lottery />
        <Lottery title='Mini Daily' maxNum={10} maxBalls={4} />
      </div>
    );
  }
}

export default AppLottery;
