import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Sardines from './Sardines';
import Soda from './Soda';
import Navbar from './Navbar';
import Message from './Message';

class AppSection21 extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <Message>
                <VendingMachine />
              </Message>
            }
          />
          <Route
            path='/soda'
            element={
              <Message>
                <Soda />
              </Message>
            }
          />
          <Route
            path='/sardines'
            element={
              <Message>
                <Sardines />
              </Message>
            }
          />
          <Route
            path='/chips'
            element={
              <Message>
                <Chips />
              </Message>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppSection21;
