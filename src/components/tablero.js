import React, { Component } from 'react'
import Card from './card';
import fran from './imgs/01-franquicias.jpg';
import solar from './imgs/04-energiasolar.jpg';
import salud from './imgs/05-salud.jpg';
import mujeres from './imgs/06-mujerespoderosas.jpg';
import negocios from './imgs/07-foronegocios.jpg';
import promesas from './imgs/08-agroalimentario.jpg';
import game from './imgs/09-gamechangers.jpg';
import './styles/tablero.css'

class Board extends Component {
    render() {
        return (
            <div className="fichas" id="root">
                <Card name="FRANQUICIAS" date="MARTES, 27 FEBRERO" place="LIVE AQUA" image={fran}/>
                <Card name="30 PROMESAS" date="MARTES, 13 MARZO" place="WESTIN SANTA FE" image={promesas}/>
                <Card name="SALUD" date="MIÉRCOLES, 23 MAYO" place="HACIENDA LOS MORALES" image={salud}/>
                <Card name="MUJERES PODEROSAS" date="MARTES, 19 JUNIO" place="WESTIN SANTA FE" image={mujeres}/>
                <Card name="FORO NEGOCIOS" date="LUNES, 17 SEPTIEMBRE" place="ST. REGIS" image={negocios}/>
                <Card name="GAME CHANGERS" date="MARTES, 16 OCTUBRE" place="LIVE AQUA. CDMX" image={game}/>
                <Card name="ENERGÍA" date="NOVIEMBRE 6" place="LIVE AQUA URBAN RESORTS" image={solar}/>
                <div className="moreEvents">
                    <h3>MÁS EVENTOS</h3>
                    <button>GO THERE</button>
                </div>
            </div>
            
        );
    }
}
export default Board;
