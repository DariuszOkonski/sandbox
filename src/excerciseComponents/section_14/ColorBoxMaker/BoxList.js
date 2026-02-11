import { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boxes: [],
    };

    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }

  remove(id) {
    this.setState((prevState) => ({
      boxes: prevState.boxes.filter((box) => box.id !== id),
    }));
  }

  create(newBox) {
    this.setState({
      boxes: [...this.state.boxes, newBox],
    });
  }

  render() {
    const boxes = this.state.boxes.map((box) => (
      <Box
        key={box.id}
        width={box.width}
        height={box.height}
        color={box.color}
        removeBox={this.remove}
        id={box.id}
      />
    ));

    return (
      <div>
        <h1>Color Box Maker Thingy</h1>
        <NewBoxForm createBox={this.create} />

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
