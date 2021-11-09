import React from 'react';

import './style.css';
import 'animate.css';
import HomeBackground from './../../assets/background.png';
import BackgroundName from './../../assets/background-name.svg';
import DownArrow from './../../assets/down arrow.svg';

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
        <div className="shadow-image"></div>
      </section>

      <section className="title">
        <h1 className="main-title animate__animated animate__fadeIn">TALITA AYA</h1>
        <img src={BackgroundName} alt="nome background" />
      </section>

      <section className="down">
        <img className="animate__animated animate__fadeInDown" src={DownArrow} alt="seta para baixo" />
      </section>

    </div>
  );
}

export default index;
