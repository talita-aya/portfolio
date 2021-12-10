import { Routes, Route } from 'react-router';
import React from 'react';

import Home from './pages/HomePage/index';
import About from './pages/About/index';
import Portfolio from './pages/Portfolio/index';
import Contact from './pages/Contact/index';

function routes() {
  return (
    <Routes>
      <Route exact path='/portfolio' element={<Home/>} />
      <Route exact path='/sobre' element={<About/>} />
      <Route exact path='/projetos' element={<Portfolio/>} />
      <Route exact path='/contato' element={<Contact/>} />
    </Routes>
  );
}

export default routes;
