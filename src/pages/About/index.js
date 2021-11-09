import React from 'react';
import { useNavigate } from 'react-router';

import 'animate.css';


function Index (){
  const navigate = useNavigate();

  return (
    <div className="container">
      <header className="navbar">
        <ul>
          <li onClick={() => navigate('/')}>Home</li>
          <li className="enabled">Sobre</li>
          <li onClick={() => navigate('/Portfolio')}>Portfólio</li>
          <li onClick={() => navigate('/Contato')}>Contato</li>
        </ul>
      </header>
    </div>
  );
}

export default Index;
