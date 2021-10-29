import React from 'react';

import './App.css';
import Instagram from './assets/instagram.svg';

function App() {
  return (
    <div className="container">
      <h1>COMING SOON</h1>

      <footer>
        <a target="_blank" href="https://www.instagram.com/talita.aya/">
          <img src={Instagram} alt="instagram logo" />
          @talita.aya
        </a>
      </footer>
    </div>
  );
}

export default App;
