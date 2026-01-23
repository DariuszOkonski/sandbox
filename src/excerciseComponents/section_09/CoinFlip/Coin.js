import React, { Component } from 'react';

class Coin extends Component {
  render() {
    if (!this.props.side) {
      return null;
    }

    return (
      <div>
        <img
          style={{ width: '100px' }}
          src={this.props.imgSrc}
          alt={this.props.side}
        />
      </div>
    );
  }
}

export default Coin;
