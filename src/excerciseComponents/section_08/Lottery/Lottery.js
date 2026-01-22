import { Component } from 'react';
import LotteryBall from './LotteryBall';

class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    maxBalls: 6,
    maxNum: 40,
  };

  constructor(props) {
    super(props);

    this.state = {
      nums: Array.from({ length: this.props.maxBalls }),
    };

    this.handleClick = this.handleClick.bind(this);
  }

  generate() {
    console.log('generate: ', this.state.nums);
  }

  handleClick() {
    this.generate();
  }

  render() {
    return (
      <section className='Lottery'>
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map((n) => (
            <LotteryBall num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}

export default Lottery;
