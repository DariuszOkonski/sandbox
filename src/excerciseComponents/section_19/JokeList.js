import axios from 'axios';
import { Component } from 'react';
import './JokeList.css';
import Joke from './Joke';
import { v4 as uuidV4 } from 'uuid';

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10,
  };

  constructor(props) {
    super(props);

    this.state = {
      jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]'),
    };

    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    if (this.state.jokes.length === 0) {
      this.getJokes();
    }
  }

  async getJokes() {
    let jokes = [];

    while (jokes.length < this.props.numJokesToGet) {
      const res = await axios.get('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json',
        },
      });

      jokes.push({ text: res.data.joke, vote: 0, id: uuidV4() });
    }

    this.setState(
      (prevState) => ({
        jokes: [...prevState.jokes, ...jokes],
      }),
      () =>
        window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes)),
    );
  }

  handleVote(id, delta) {
    this.setState(
      (prevState) => ({
        jokes: prevState.jokes.map((j) =>
          j.id === id ? { ...j, vote: j.vote + delta } : j,
        ),
      }),
      () =>
        window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes)),
    );
  }

  handleClick() {
    this.getJokes();
  }

  render() {
    return (
      <div className='JokeList'>
        <div className='JokeList-sidebar'>
          <h1 className='JokeList-title'>
            <span>Dad</span> Jokes
          </h1>
          <img
            src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg'
            alt='funny-face'
          />

          <button onClick={this.handleClick} className='JokeList-getmore'>
            New Jokes
          </button>
        </div>

        <div className='JokeList-jokes'>
          {!this.state.jokes.length ? (
            <div>LOADING...</div>
          ) : (
            this.state.jokes.map((j) => (
              <Joke
                key={j.id}
                id={j.id}
                votes={j.vote}
                text={j.text}
                upvote={() => this.handleVote(j.id, 1)}
                downvote={() => this.handleVote(j.id, -1)}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default JokeList;
