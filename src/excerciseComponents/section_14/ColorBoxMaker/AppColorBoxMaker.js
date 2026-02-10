import { Component } from 'react';
import Box from './Box';

class AppColorBoxMaker extends Component {
  render() {
    return (
      <div>
        <h1>Color BoxMaker</h1>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box height={10} width={10} color='red' />
          <Box height={10} width={10} color='green' />
          <Box height={10} width={10} color='blue' />
          <Box height={10} width={10} color='red' />
          <Box height={10} width={10} color='green' />
          <Box height={10} width={10} color='blue' />
          <Box height={10} width={10} color='red' />
          <Box height={10} width={10} color='green' />
          <Box height={10} width={10} color='blue' />
          <Box height={10} width={10} color='red' />
          <Box height={10} width={10} color='green' />
          <Box height={10} width={10} color='blue' />
          <Box height={10} width={10} color='red' />
          <Box height={10} width={10} color='green' />
          <Box height={10} width={10} color='blue' />
          <Box height={10} width={10} color='red' />
          <Box height={10} width={10} color='green' />
          <Box height={10} width={10} color='blue' />
          <Box height={10} width={10} color='red' />
          <Box height={10} width={10} color='green' />
          <Box height={10} width={10} color='blue' />
          <Box height={10} width={10} color='red' />
          <Box height={10} width={10} color='green' />
          <Box height={10} width={10} color='blue' />
        </div>
      </div>
    );
  }
}

export default AppColorBoxMaker;
