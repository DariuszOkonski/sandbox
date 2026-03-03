import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dog from './Dog';

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<h1>Home</h1>} />
          <Route path='/dog' element={<Dog />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
