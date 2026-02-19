import axios from 'axios';
import { Component } from 'react';
import Card from './Card';
import './Deck.css';

const API_BASE_URL = 'https://www.deckofcardsapi.com/api/deck';

class Deck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: null,
      drawn: [],
    };

    this.getCard = this.getCard.bind(this);
  }

  async componentDidMount() {
    const deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
    this.setState({ deck: deck.data });
  }

  async getCard() {
    const id = this.state.deck.deck_id;

    try {
      const cardUrl = `${API_BASE_URL}/${id}/draw`;
      const cardRes = await axios.get(cardUrl);

      if (!cardRes.data.success) {
        throw new Error('No card remaining!');
      }

      const card = cardRes.data.cards[0];
      this.setState((prevState) => ({
        drawn: [
          ...prevState.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.value} of ${card.suit}`,
          },
        ],
      }));
    } catch (error) {
      alert(error);
    }
  }

  render() {
    const cards = this.state.drawn.map((c) => (
      <Card image={c.image} name={c.name} key={`${c.name}-${c.id}`} />
    ));

    return (
      <div>
        <h1 className='Deck-title'>Card Dealer</h1>
        <h2 className='Deck-title subtitle'>A little demo made with React</h2>

        <button className='Deck-btn' onClick={this.getCard}>
          Get Card!
        </button>
        <div className='Deck-cardarea'>{cards}</div>
      </div>
    );
  }
}

export default Deck;
