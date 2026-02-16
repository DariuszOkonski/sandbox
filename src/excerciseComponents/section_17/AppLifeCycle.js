import React, { Component } from 'react';

class AppLifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
    };
    console.log('In Constructor');
  }

  componentDidMount() {
    console.log('In ComponentDidMount');

    this.timerID = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  render() {
    console.log('In Render');

    return (
      <div>
        <h1>{this.state.time.getSeconds()}</h1>
      </div>
    );
  }
}

export default AppLifeCycle;
