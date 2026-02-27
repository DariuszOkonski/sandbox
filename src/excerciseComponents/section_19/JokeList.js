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
      loading: false,
    };
    this.seenJokes = new Set(this.state.jokes.map((j) => j.text));
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    if (this.state.jokes.length === 0) {
      this.getJokes();
    }
  }

  async getJokes() {
    try {
      let jokes = [];

      while (jokes.length < this.props.numJokesToGet) {
        const res = await axios.get('https://icanhazdadjoke.com/', {
          headers: {
            Accept: 'application/json',
          },
        });

        let newJoke = res.data.joke;
        if (!this.seenJokes.has(newJoke)) {
          jokes.push({ text: newJoke, vote: 0, id: uuidV4() });
        } else {
          console.log('FOUND DUPLICATE: ', newJoke);
        }
      }

      this.setState(
        (prevState) => ({
          loading: false,
          jokes: [...prevState.jokes, ...jokes],
        }),
        () =>
          window.localStorage.setItem(
            'jokes',
            JSON.stringify(this.state.jokes),
          ),
      );
    } catch (error) {
      alert(error);
      this.setState({ loading: false });
    }
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
    this.setState({ loading: true }, this.getJokes);
  }

  render() {
    if (this.state.loading || !this.state.jokes.length) {
      return (
        <div className='spinner'>
          <i className='far fa-8x fa-laugh fa-spin JokeList-spinner' />
          <h1 className='JokeList-title'>Loading...</h1>
        </div>
      );
    }

    let jokes = this.state.jokes.sort((a, b) => b.vote - a.vote);

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
            Fetch Jokes
          </button>
        </div>

        <div className='JokeList-jokes'>
          {jokes.map((j) => (
            <Joke
              key={j.id}
              id={j.id}
              votes={j.vote}
              text={j.text}
              upvote={() => this.handleVote(j.id, 1)}
              downvote={() => this.handleVote(j.id, -1)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
