import React from 'react';
import { useNavigate } from 'react-router';

import 'animate.css';
import './style.css';
import Sobre from './../../assets/backgroundWords/sobre.svg';
import Mim from './../../assets/backgroundWords/mim.svg';


function Index (){
  const navigate = useNavigate();

  return (
    <div className="container">
      <header className="navbar">
        <ul>
          <li onClick={() => navigate('/')}>Home</li>
          <li className="enabled">Sobre</li>
          <li onClick={() => navigate('/projetos')}>Portfólio</li>
          <li onClick={() => navigate('/contato')}>Contato</li>
        </ul>
      </header>

      <section className="about-title-sobre">
        <img className="animate__animated animate__fadeIn" src={Sobre} alt="palavra background" />
      </section>
      
      <section className="about-title-mim ">
        <img className="animate__animated animate__fadeIn" src={Mim} alt="palavra background" />
      </section>
     
      <section className="about-me-text animate__animated animate__fadeIn">
        <p>
          Olá,
          <br/>
          Meu nome é Talita, sou estudante de Engenharia de Computação na Universidade Tecnológica 
          Federal do Paraná (UTFPR) e uma grande apreciadora de arte.
        </p>

        <div className="call-to-action">
          <input onClick={() => navigate('/contato')} type="button" value="ENTRAR EM CONTATO" />
        </div>
      </section>

      
    </div>
  );
}

export default Index;
