import axios from 'axios';
import { Component } from 'react';
import './ZenQuote.css';

class ZenQuote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: null,
      isLoaded: false,
      error: '',
    };
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/zen')
      .then((response) => {
        setTimeout(() => {
          this.setState({
            quote: response.data,
            isLoaded: true,
          });
        }, 3000);
      })
      .catch((err) => {
        console.log('err: ', err.message);
        this.setState({
          error: err.message,
        });
      });
  }

  render() {
    if (this.state.error) {
      return <h1>{this.state.error}</h1>;
    }

    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <h1>Always remember...</h1>
            <p>{this.state.quote}</p>
          </div>
        ) : (
          <div className='loader' />
        )}
      </div>
    );
  }
}

export default ZenQuote;
