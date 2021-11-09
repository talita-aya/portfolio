import React from "react";
import { useNavigate } from "react-router";

import "animate.css";
import "./style.css";
import Contato1 from './../../assets/backgroundWords/contato1.svg';
import Contato2 from './../../assets/backgroundWords/contato2.svg';
import Instagram from './../../assets/instagram.svg';
import Email from './../../assets/email.svg';
import Github from './../../assets/github.svg';
import Linkedin from './../../assets/linkedin.svg';

function Index() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <header className="navbar">
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/sobre")}>Sobre</li>
          <li onClick={() => navigate("/portfolio")}>Portfólio</li>
          <li className="enabled">Contato</li>
        </ul>
      </header>

      <section className="title">
        <h1 className="contact-title animate__animated animate__fadeIn">ONDE ME ENCONTRAR</h1>
      </section>

      <section className="contact-title1">
        <img className="animate__animated animate__fadeIn" src={Contato1} alt="palavra background" />
      </section>
      
      <section className="contact-title2">
        <img className="animate__animated animate__fadeIn" src={Contato2} alt="palavra background" />
      </section>

      <section className="socials">
        <img src={Instagram} alt="redes sociais" />
        <img src={Linkedin} alt="redes sociais" />
        <img src={Github} alt="redes sociais" />
        <img src={Email} alt="redes sociais" />
      </section>
    </div>
  );
};

export default Index;
