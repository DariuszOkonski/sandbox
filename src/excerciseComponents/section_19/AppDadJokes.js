import { Component } from 'react';
import JokeList from './JokeList';

import './AppDadJokes.css';

class AppDadJokes extends Component {
  render() {
    return (
      <div className='AppDadJokes'>
        <JokeList />
      </div>
    );
  }
}

export default AppDadJokes;
