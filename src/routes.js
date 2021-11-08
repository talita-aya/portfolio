import { Routes, Route } from 'react-router';
import React from 'react';

import Home from './pages/HomePage/index';

function routes() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>} />
    </Routes>
  );
}

export default routes;
