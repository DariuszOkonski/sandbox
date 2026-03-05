import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Sardines from './Sardines';
import Soda from './Soda';
import Navbar from './Navbar';

class AppSection21 extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<VendingMachine />} />
          <Route path='/soda' element={<Soda />} />
          <Route path='/sardines' element={<Sardines />} />
          <Route path='/chips' element={<Chips />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppSection21;
