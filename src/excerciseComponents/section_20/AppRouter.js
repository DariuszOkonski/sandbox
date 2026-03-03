import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dog from './Dog';
import About from './About';
import Contact from './Contact';
import Hater from './Hater';

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<About />} />
          <Route path='/dog' element={<Dog />} />
          <Route path='/dog/hater' element={<Hater />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
