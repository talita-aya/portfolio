import React from 'react';

import './style.css';
import HomeBackground from './../../assets/background.png';

const index = () => {
  return (
    <div className="container">
      <header className="navbar">
        <ul>
          <li className="enabled">Home</li>
          <li>Sobre</li>
          <li>Portfólio</li>
          <li>Contato</li>
        </ul>
      </header>

      <section className="image">
        <img src={HomeBackground} alt="background da home page" />
        <div className="blur"></div>
      </section>

    </div>
  );
}

export default index;
