import React, { Component } from 'react'
import Card from './card';
import './styles/tablero.css'

class Board extends Component {
    render() {
        return (
            <div className="fichas" id="root">
                <Card name="FRANQUICIAS" date="MARTES, 27 FEBRERO" place="LIVE AQUA"/>
                <Card name="30 PROMESAS" date="MARTES, 13 MARZO" place="WESTIN SANTA FE"/>
                <Card name="SALUD" date="MIÉRCOLES, 23 MAYO" place="HACIENDA LOS MORALES"/>
                <Card name="MUJERES PODEROSAS" date="MARTES, 19 JUNIO" place="WESTIN SANTA FE"/>
                <Card name="FORO NEGOCIOS" date="LUNES, 17 SEPTIEMBRE" place="ST. REGIS"/>
                <Card name="GAME CHANGERS" date="MARTES, 16 OCTUBRE" place="LIVE AQUA. CDMX"/>
                <Card name="ENERGÍA" date="NOVIEMBRE 6" place="LIVE AQUA URBAN RESORTS"/>
                <div className="moreEvents">
                    <h3>MÁS EVENTOS</h3>
                    <button>GO THERE</button>
                </div>
            </div>
            
        );
    }
}

export default Board;