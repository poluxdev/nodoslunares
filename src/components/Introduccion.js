// src/components/Introduccion.js
import React from 'react';
import './Introduccion.css';
import earthImage from '../assets/tierra.png'; // Asegúrate de que la imagen esté en esta ubicación

function Introduccion() {
  return (
    <div className="introduccion-container">
      <h4 className="alert-heading">¿Qué son los nodos lunares?</h4>
      <p>
        En astrología, los nodos lunares son dos puntos matemáticos en la órbita de la Luna alrededor de la Tierra. 
        Se llaman Nodo Norte y Nodo Sur, y tienen significados específicos en la carta natal de una persona. 
        Estos nodos no son cuerpos celestes físicos, sino puntos donde la órbita de la Luna cruza la eclíptica, 
        que es el camino aparente del Sol a través del cielo.
      </p>
      <p>
        <strong>Nodo Norte:</strong> Representa el camino hacia el crecimiento y la evolución. Es visto como el 
        "destino" o el área de la vida en la que una persona está llamada a desarrollarse y aprender. Se relaciona 
        con las cualidades y habilidades que uno debe cultivar para avanzar en la vida.
      </p>
      <p>
        <strong>Nodo Sur:</strong> Indica las habilidades y patrones de comportamiento que una persona trae de vidas 
        pasadas o de su pasado en esta vida. Se asocia con las áreas de la vida que son familiares y cómodas, pero 
        que pueden ser limitantes si no se equilibran con el Nodo Norte.
      </p>
      <p>
        En la carta natal, estos nodos se interpretan para proporcionar información sobre el camino evolutivo del 
        individuo y las lecciones kármicas que puede estar enfrentando.
      </p>
<br></br>
      <div className="graphic-container">
        <div className="orbit"></div>
        <div className="ecliptic"></div>
        <div className="node node-north"></div>
        <div className="node node-south"></div>
        <img src={earthImage} alt="Earth" className="earth" />
        <div className="label label-north">Nodo Norte</div>
        <div className="label label-south">Nodo Sur</div>
      </div>
    </div>
  );
}

export default Introduccion;
