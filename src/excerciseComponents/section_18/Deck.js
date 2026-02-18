import axios from 'axios';
import { Component } from 'react';

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
    const cardUrl = `${API_BASE_URL}/${id}/draw`;
    const cardRes = await axios.get(cardUrl);

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
  }

  render() {
    return (
      <div>
        <h1>Card Dealer</h1>

        <button onClick={this.getCard}>Get Card!</button>
      </div>
    );
  }
}

export default Deck;
