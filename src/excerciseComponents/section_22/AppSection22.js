import React, { Component } from 'react';
import Food from './Food';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

class AppSection22 extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/food/:name' element={<Food name='Egg' />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppSection22;
