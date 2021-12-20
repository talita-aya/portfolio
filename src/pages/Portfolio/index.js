import React from "react";
import { useNavigate } from "react-router";

import "animate.css";
import "./style.css";
import Meus from './../../assets/backgroundWords/meus.svg';
import Projetos1 from './../../assets/backgroundWords/projetos1.svg';
import Projetos2 from './../../assets/backgroundWords/projetos2.svg';
import DownArrow from './../../assets/down arrow.svg';
import UTask from './../../assets/portfolio/utask.png';
import PortfolioPage from './../../assets/portfolio/portfolio.png';
import WeatherApp from './../../assets/portfolio/weather app.png';


function Index() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <header className="navbar">
        <ul>
          <li onClick={() => navigate("/portfolio")}>Home</li>
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
        <img className="animate__animated animate__fadeInDown" src={DownArrow} alt="seta para baixo" onClick={() => window.scrollTo(300, 700)} />
      </section>

      <section className="projects">
        <div className="project-container">
          <a target="_blank" href="https://github.com/talita-aya/uTask"><img src={UTask} alt="projeto" className="project-image"/></a>
          <p>UTask 2.0</p>
          <p className="subtitle">- desenvolvimento -</p>
        </div>

        <div className="project-container">
          <a target="_blank" href="https://github.com/talita-aya/portfolio"><img src={PortfolioPage} alt="projeto" className="project-image"/></a>
          <p>Meu Portfólio</p>
          <p className="subtitle">- design & desenvolvimento -</p>
        </div>

        <div className="project-container">
          <a target="_blank" href="https://www.figma.com/file/jaJ5z7E5s1PhdcbgKIVrSB/weather-app"><img src={WeatherApp} alt="projeto" className="project-image"/></a>
          <p>Weather App</p>
          <p className="subtitle">- design -</p>
        </div>
      </section>

    </div>
  );
}

export default Index;