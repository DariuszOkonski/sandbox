import { Component } from 'react';
import ZenQuote from './ZenQuote';

class AppLifeCycle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ZenQuote />
      </div>
    );
  }
}

export default AppLifeCycle;
