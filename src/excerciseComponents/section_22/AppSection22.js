import React, { Component } from 'react';
import Food from './Food';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComponentWrapper from './ComponentWrapper';
import Meal from './Meal';
import FoodSearch from './FoodSearch';

class AppSection22 extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FoodSearch />} />
          <Route
            path='/food/:name'
            element={
              <ComponentWrapper>
                <Food name='Egg' />
              </ComponentWrapper>
            }
          />
          <Route path='/food/:foodName/drink/:drinkName' element={<Meal />} />
          <Route path='*' element={<h1>NOT FOUND!!!</h1>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppSection22;
