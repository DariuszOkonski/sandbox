import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FoodSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(evt) {
    this.setState({ query: evt.target.value });
  }

  handleClick() {
    alert('Saved your food to db!!!');
    this.props.navigate('/');
  }

  render() {
    return (
      <div>
        <h1>Search for a food</h1>
        <input
          type='text'
          placeholder='search for a food'
          value={this.state.query}
          onChange={this.handleChange}
        />
        <Link to={`/food/${this.state.query}`}>Go!</Link>
        <div>
          <button onClick={this.handleClick}>Save new food!</button>
        </div>
      </div>
    );
  }
}

export default FoodSearch;
