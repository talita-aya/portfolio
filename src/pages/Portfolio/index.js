import React from "react";
import { useNavigate } from "react-router";

import "animate.css";
import "./style.css";
import Meus from './../../assets/backgroundWords/meus.svg';
import Projetos1 from './../../assets/backgroundWords/projetos1.svg';
import Projetos2 from './../../assets/backgroundWords/projetos2.svg';
import DownArrow from './../../assets/down arrow.svg';
import UTask from './../../assets/portfolio/utask.png';


function Index() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <header className="navbar">
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/sobre")}>Sobre</li>
          <li className="enabled">Portfólio</li>
          <li onClick={() => navigate("/contato")}>Contato</li>
        </ul>
      </header>

      <section className="title">
        <h1 className="portfolio-title animate__animated animate__fadeIn">PORTFÓLIO</h1>
      </section>

      <section className="portfolio-title-meus">
        <img className="animate__animated animate__fadeIn" src={Meus} alt="palavra background" />
      </section>
      
      <section className="portfolio-title-projetos">
        <img className="animate__animated animate__fadeIn" src={Projetos1} alt="palavra background" />
      </section>

      <section className="portfolio-title-projetos2">
        <img className="animate__animated animate__fadeIn" src={Projetos2} alt="palavra background" />
      </section>

      <section className="portfolio-down">
        <img className="animate__animated animate__fadeInDown" src={DownArrow} alt="seta para baixo" />
      </section>

      <section className="projects">
        <div className="project-container">
          <img src={UTask} alt="projeto" className="project-image"/>
          <p>Nome do projeto aqui</p>
        </div>
      </section>

    </div>
  );
}

export default Index;
