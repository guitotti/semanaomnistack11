//no React, componente é uma função que retorna HTML, e pode ter funcionalidades JS, CSS...
// JSK (JavaScript XML) -> é o HTML integrado dentro do JS

import React from 'react';

import './global.css';

import Routes from './routes';

function App() {
  return (
      <Routes />
  );
}

export default App;
