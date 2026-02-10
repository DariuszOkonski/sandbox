import React, { Component } from 'react';
import Box from './Box';

class BoxList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boxes: [
        { width: 10, height: 40, color: 'orange' },
        { width: 20, height: 30, color: 'blue' },
        { width: 30, height: 20, color: 'green' },
        { width: 10, height: 50, color: 'red' },
      ],
    };
  }

  render() {
    const boxes = this.state.boxes.map((box) => (
      <Box width={box.width} height={box.height} color={box.color} />
    ));

    return (
      <div>
        <h1>Color Box Maker Thingy</h1>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {boxes}
        </div>
      </div>
    );
  }
}

export default BoxList;
