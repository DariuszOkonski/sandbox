import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

const MealWrapper = () => {
  const params = useParams();

  return <Meal {...params} />;
};

class Meal extends Component {
  render() {
    return (
      <div>
        <h1>Meal</h1>
        <p>Food name: {this.props.foodName}</p>
        <p>Drink name: {this.props.drinkName}</p>
      </div>
    );
  }
}

export default MealWrapper;
