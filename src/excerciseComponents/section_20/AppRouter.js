import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Dog from './Dog';
import About from './About';
import Contact from './Contact';
import Hater from './Hater';

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <Link to='/'>About</Link>
          <Link to='/dog'>Dog</Link>
          <Link to='/dog/hater'>Hater</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
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
