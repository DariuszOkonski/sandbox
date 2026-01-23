import React, { Component } from 'react';
import Box from './Box';
import BoxContainer from './BoxContainer';

class AppColorBoxes extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <BoxContainer />
      </div>
    );
  }
}

export default AppColorBoxes;
