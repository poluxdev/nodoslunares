import React, { useState } from 'react';
import './CalculadoraNodos.css'; // Importa el archivo CSS
import AriesLibraInfo from './AriesLibraInfo';
import TauroEscorpioInfo from './TauroEscorpioInfo';
import GeminisSagitarioInfo from './GeminisSagitarioInfo';
import CancerCapricornioInfo from './CancerCapricornioInfo';
import LeoAcuarioInfo from './LeoAcuarioInfo';
import VirgoPiscisInfo from './VirgoPiscisInfo';
import LibraAriesInfo from './LibraAriesInfo';
import EscorpioTauroInfo from './EscorpioTauroInfo';
import SagitarioGeminisInfo from './SagitarioGeminisInfo';
import CapricornioCancerInfo from './CapricornioCancerInfo';
import AcuarioLeoInfo from './AcuarioLeoInfo';
import PiscisVirgoInfo from './PiscisVirgoInfo';


const nodesData = [
    { start: new Date('1930-06-19'), end: new Date('1932-01-06'), nodeSouth: 'Libra', nodeNorth: 'Aries' },
    { start: new Date('1932-01-07'), end: new Date('1933-07-25'), nodeSouth: 'Virgo', nodeNorth: 'Piscis' },
    { start: new Date('1933-07-26'), end: new Date('1935-02-12'), nodeSouth: 'Leo', nodeNorth: 'Acuario' },
    { start: new Date('1935-02-13'), end: new Date('1936-09-01'), nodeSouth: 'Cáncer', nodeNorth: 'Capricornio' },
    { start: new Date('1936-09-02'), end: new Date('1938-03-21'), nodeSouth: 'Géminis', nodeNorth: 'Sagitario' },
    { start: new Date('1938-03-22'), end: new Date('1939-10-09'), nodeSouth: 'Tauro', nodeNorth: 'Escorpión' },
    { start: new Date('1939-10-10'), end: new Date('1941-04-27'), nodeSouth: 'Aries', nodeNorth: 'Libra' },
    { start: new Date('1941-04-28'), end: new Date('1942-11-15'), nodeSouth: 'Piscis', nodeNorth: 'Virgo' },
    { start: new Date('1942-11-16'), end: new Date('1944-06-03'), nodeSouth: 'Acuario', nodeNorth: 'Leo' },
    { start: new Date('1944-06-04'), end: new Date('1945-12-22'), nodeSouth: 'Capricornio', nodeNorth: 'Cáncer' },
    { start: new Date('1945-12-23'), end: new Date('1947-07-11'), nodeSouth: 'Sagitario', nodeNorth: 'Géminis' },
    { start: new Date('1947-07-12'), end: new Date('1949-01-28'), nodeSouth: 'Escorpión', nodeNorth: 'Tauro' },
    { start: new Date('1949-01-29'), end: new Date('1950-08-17'), nodeSouth: 'Libra', nodeNorth: 'Aries' },
    { start: new Date('1950-08-18'), end: new Date('1952-03-06'), nodeSouth: 'Virgo', nodeNorth: 'Piscis' },
    { start: new Date('1952-03-07'), end: new Date('1953-09-23'), nodeSouth: 'Leo', nodeNorth: 'Acuario' },
    { start: new Date('1953-09-24'), end: new Date('1955-04-13'), nodeSouth: 'Cáncer', nodeNorth: 'Capricornio' },
    { start: new Date('1955-04-14'), end: new Date('1956-10-30'), nodeSouth: 'Géminis', nodeNorth: 'Sagitario' },
    { start: new Date('1956-10-31'), end: new Date('1958-05-20'), nodeSouth: 'Tauro', nodeNorth: 'Escorpión' },
    { start: new Date('1958-05-21'), end: new Date('1959-12-07'), nodeSouth: 'Aries', nodeNorth: 'Libra' },
    { start: new Date('1959-12-08'), end: new Date('1961-06-26'), nodeSouth: 'Piscis', nodeNorth: 'Virgo' },
    { start: new Date('1961-06-27'), end: new Date('1963-01-13'), nodeSouth: 'Acuario', nodeNorth: 'Leo' },
    { start: new Date('1963-01-14'), end: new Date('1964-08-02'), nodeSouth: 'Capricornio', nodeNorth: 'Cáncer' },
    { start: new Date('1964-08-03'), end: new Date('1966-02-19'), nodeSouth: 'Sagitario', nodeNorth: 'Géminis' },
    { start: new Date('1966-02-20'), end: new Date('1967-09-09'), nodeSouth: 'Escorpión', nodeNorth: 'Tauro' },
    { start: new Date('1967-09-10'), end: new Date('1969-03-29'), nodeSouth: 'Libra', nodeNorth: 'Aries' },
    { start: new Date('1969-03-30'), end: new Date('1970-10-16'), nodeSouth: 'Virgo', nodeNorth: 'Piscis' },
    { start: new Date('1970-10-17'), end: new Date('1972-05-05'), nodeSouth: 'Leo', nodeNorth: 'Acuario' },
    { start: new Date('1972-05-06'), end: new Date('1973-11-22'), nodeSouth: 'Cáncer', nodeNorth: 'Capricornio' },
    { start: new Date('1973-11-23'), end: new Date('1975-06-12'), nodeSouth: 'Géminis', nodeNorth: 'Sagitario' },
    { start: new Date('1975-06-13'), end: new Date('1976-12-29'), nodeSouth: 'Tauro', nodeNorth: 'Escorpión' },
    { start: new Date('1976-12-30'), end: new Date('1978-07-19'), nodeSouth: 'Aries', nodeNorth: 'Libra' },
    { start: new Date('1978-07-20'), end: new Date('1980-02-05'), nodeSouth: 'Piscis', nodeNorth: 'Virgo' },
    { start: new Date('1980-02-06'), end: new Date('1981-08-25'), nodeSouth: 'Acuario', nodeNorth: 'Leo' },
    { start: new Date('1981-08-26'), end: new Date('1983-03-14'), nodeSouth: 'Capricornio', nodeNorth: 'Cáncer' },
    { start: new Date('1983-03-15'), end: new Date('1984-10-01'), nodeSouth: 'Sagitario', nodeNorth: 'Géminis' },
    { start: new Date('1984-10-02'), end: new Date('1986-04-20'), nodeSouth: 'Escorpión', nodeNorth: 'Tauro' },
    { start: new Date('1986-04-21'), end: new Date('1987-11-08'), nodeSouth: 'Libra', nodeNorth: 'Aries' },
    { start: new Date('1987-11-09'), end: new Date('1989-05-29'), nodeSouth: 'Virgo', nodeNorth: 'Piscis' },
    { start: new Date('1989-05-30'), end: new Date('1990-12-15'), nodeSouth: 'Leo', nodeNorth: 'Acuario' },
    { start: new Date('1990-12-16'), end: new Date('1992-07-04'), nodeSouth: 'Cáncer', nodeNorth: 'Capricornio' },
    { start: new Date('1992-07-05'), end: new Date('1994-01-21'), nodeSouth: 'Géminis', nodeNorth: 'Sagitario' },
    { start: new Date('1994-01-22'), end: new Date('1995-08-11'), nodeSouth: 'Tauro', nodeNorth: 'Escorpión' },
    { start: new Date('1995-08-12'), end: new Date('1997-02-27'), nodeSouth: 'Aries', nodeNorth: 'Libra' },
    { start: new Date('1997-02-28'), end: new Date('1998-09-17'), nodeSouth: 'Piscis', nodeNorth: 'Virgo' },
    { start: new Date('1998-09-18'), end: new Date('2000-04-05'), nodeSouth: 'Acuario', nodeNorth: 'Leo' },
    { start: new Date('2000-04-06'), end: new Date('2001-10-24'), nodeSouth: 'Capricornio', nodeNorth: 'Cáncer' },
    { start: new Date('2001-10-25'), end: new Date('2003-05-13'), nodeSouth: 'Sagitario', nodeNorth: 'Géminis' },
    { start: new Date('2003-05-14'), end: new Date('2004-11-30'), nodeSouth: 'Escorpión', nodeNorth: 'Tauro' },
    { start: new Date('2004-12-01'), end: new Date('2006-06-19'), nodeSouth: 'Libra', nodeNorth: 'Aries' },
    { start: new Date('2006-06-20'), end: new Date('2008-01-07'), nodeSouth: 'Virgo', nodeNorth: 'Piscis' },
    { start: new Date('2008-01-08'), end: new Date('2009-07-27'), nodeSouth: 'Leo', nodeNorth: 'Acuario' },
    { start: new Date('2009-07-28'), end: new Date('2011-02-13'), nodeSouth: 'Cáncer', nodeNorth: 'Capricornio' },
    { start: new Date('2011-02-14'), end: new Date('2012-09-02'), nodeSouth: 'Géminis', nodeNorth: 'Sagitario' },
    { start: new Date('2012-09-03'), end: new Date('2014-03-22'), nodeSouth: 'Tauro', nodeNorth: 'Escorpión' },
    { start: new Date('2014-03-23'), end: new Date('2015-10-10'), nodeSouth: 'Aries', nodeNorth: 'Libra' },
    { start: new Date('2015-10-11'), end: new Date('2017-04-28'), nodeSouth: 'Piscis', nodeNorth: 'Virgo' },
    { start: new Date('2017-04-29'), end: new Date('2018-11-15'), nodeSouth: 'Leo', nodeNorth: 'Acuario' },
    { start: new Date('2018-11-16'), end: new Date('2020-06-04'), nodeSouth: 'Capricornio', nodeNorth: 'Cáncer' }
];

function getLunarNodes(birthDate) {
    const date = new Date(birthDate);
    const period = nodesData.find(({ start, end }) => date >= start && date <= end);

    if (period) {
        return {
            nodeSouth: period.nodeSouth,
            nodeNorth: period.nodeNorth
        };
    } else {
        return {
            nodeSouth: 'Desconocido',
            nodeNorth: 'Desconocido'
        };
    }
}

function CalculadoraNodos() {
    const [date, setDate] = useState('');
    const [nodeSouth, setNodeSouth] = useState('');
    const [nodeNorth, setNodeNorth] = useState('');

    const calculateNodes = (e) => {
        e.preventDefault();
        const nodes = getLunarNodes(date);
        setNodeSouth(nodes.nodeSouth);
        setNodeNorth(nodes.nodeNorth);
    };

    return (
        <div>
            <h2 className="centered-title">Calcula tus nodos lunares aquí</h2>
            <form onSubmit={calculateNodes}>
                <div className="form-group">
                    <label htmlFor="date">Introduce tu fecha de nacimiento :</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        className="form-control"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Calcular</button>
            </form>
            <div id="result" className="mt-3">
                <p id="node-south"><strong>Nodo Sur:</strong> {nodeSouth}</p>
                <p id="node-north"><strong>Nodo Norte:</strong> {nodeNorth}</p>

                {nodeSouth === 'Aries' && nodeNorth === 'Libra' && <AriesLibraInfo />}
                {nodeSouth === 'Tauro' && nodeNorth === 'Escorpión' && <TauroEscorpioInfo />}
                {nodeSouth === 'Géminis' && nodeNorth === 'Sagitario' && <GeminisSagitarioInfo />}
                {nodeSouth === 'Cáncer' && nodeNorth === 'Capricornio' && <CancerCapricornioInfo />}
                {nodeSouth === 'Leo' && nodeNorth === 'Acuario' && <LeoAcuarioInfo />}
                {nodeSouth === 'Virgo' && nodeNorth === 'Piscis' && <VirgoPiscisInfo />}
                {nodeSouth === 'Libra' && nodeNorth === 'Aries' && <LibraAriesInfo />}
                {nodeSouth === 'Escorpión' && nodeNorth === 'Tauro' && <EscorpioTauroInfo />}
                {nodeSouth === 'Sagitario' && nodeNorth === 'Géminis' && <SagitarioGeminisInfo />}
                {nodeSouth === 'Capricornio' && nodeNorth === 'Cáncer' && <CapricornioCancerInfo />}
                {nodeSouth === 'Acuario' && nodeNorth === 'Leo' && <AcuarioLeoInfo />}
                {nodeSouth === 'Piscis' && nodeNorth === 'Virgo' && <PiscisVirgoInfo />}


            </div>
        </div>
    );
}

export default CalculadoraNodos;