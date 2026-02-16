import axios from 'axios';
import { Component } from 'react';

class ZenQuote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: null,
    };
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/zen')
      .then((response) => {
        this.setState({
          quote: response.data,
        });
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  }

  render() {
    return (
      <div>
        <h1>Always remember...</h1>
        <p>{this.state.quote ? this.state.quote : 'Loading...'}</p>
      </div>
    );
  }
}

export default ZenQuote;
