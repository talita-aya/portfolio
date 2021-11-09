import React from 'react';
import { useNavigate } from 'react-router';

import './style.css';
import 'animate.css';
import HomeBackground from './../../assets/background.png';
import BackgroundName from './../../assets/background-name.svg';
import DownArrow from './../../assets/down arrow.svg';


function Index(){
  const navigate = useNavigate();

  return (
    <div className="container">
      <header className="navbar">
        <ul>
          <li className="enabled">Home</li>
          <li onClick={() => navigate('Sobre')}>Sobre</li>
          <li onClick={() => navigate('Portfolio')}>Portfólio</li>
          <li onClick={() => navigate('Contato')}>Contato</li>
        </ul>
      </header>

      <section className="image">
        <img src={HomeBackground} alt="background da home page" />
        <div className="shadow-image"></div>
      </section>

      <section className="title">
        <h1 className="main-title animate__animated animate__fadeIn">TALITA AYA</h1>
        <img className="animate__animated animate__fadeIn" src={BackgroundName} alt="nome background" />
      </section>

      <section className="down">
        <img className="animate__animated animate__fadeInDown" src={DownArrow} alt="seta para baixo" />
      </section>

    </div>
  );
}

export default Index;
