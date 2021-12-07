import React from 'react';
import { useNavigate } from 'react-router';

import './style.css';
import 'animate.css';
import HomeBackground from './../../assets/background.png';
import BackgroundName from './../../assets/backgroundWords/talita.svg';
import DownArrow from './../../assets/down arrow.svg';


function Index(){
  const navigate = useNavigate();

  return (
    <div className="container">
      <header className="navbar">
        <ul>
          <li className="enabled">Home</li>
          <li onClick={() => navigate('/sobre')}>Sobre</li>
          <li onClick={() => navigate('/portfolio')}>Portfólio</li>
          <li onClick={() => navigate('/contato')}>Contato</li>
        </ul>
      </header>

      <section className="image">
        <img src={HomeBackground} alt="background da home page" />
        <div className="shadow-image"></div>
      </section>

      <section className="title">
        <h1 className="main-title animate__animated animate__fadeIn">TALITA AYA</h1>
        <div className="image">
          <img className="animate__animated animate__fadeIn" src={BackgroundName} alt="nome background" />
        </div>
      </section>

    </div>
  );
}

export default Index;
