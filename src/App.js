// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Introduccion from './components/Introduccion';  // Importa el componente Introduccion
import CalculadoraNodos from './components/CalculadoraNodos'; // Importa el componente CalculadoraNodos

function App() {
  return (
    <div className="container">
      <Introduccion />  {/* Agrega el componente Introduccion */}
      <CalculadoraNodos />  {/* Agrega el componente CalculadoraNodos */}
    </div>
  );
}

export default App;
