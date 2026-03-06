import React, { Component } from 'react';
import Food from './Food';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComponentWrapper from './ComponentWrapper';

class AppSection22 extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path='/food/:name'
            element={
              <ComponentWrapper>
                <Food name='Egg' />
              </ComponentWrapper>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppSection22;
