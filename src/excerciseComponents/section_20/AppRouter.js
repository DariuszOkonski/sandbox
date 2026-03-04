import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Dog from './Dog';
import About from './About';
import Contact from './Contact';
import Hater from './Hater';
import './AppRouter.css';

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <NavLink to='/'>About</NavLink>
          <NavLink end to='/dog'>
            Dog
          </NavLink>
          <NavLink to='/dog/hater'>Hater</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/dog' element={<Dog />} />
          <Route path='/dog/hater' element={<Hater />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
