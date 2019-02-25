import React, { Component } from 'react'
import Card from './card';
import Footer from './footer';
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
            <div>
                <div className="fichas">
                    <Card name="FRANQUICIAS" date="MARTES, 27 FEBRERO" place="LIVE AQUA" image={fran} link="https://foroforbes.com/__old/franquicias/"/>
                    <Card name="30 PROMESAS" date="MARTES, 13 MARZO" place="WESTIN SANTA FE" image={promesas} link="https://foroforbes.com/30-promesas-2019/"/>
                    <Card name="SALUD" date="MIÉRCOLES, 23 MAYO" place="HACIENDA LOS MORALES" image={salud} link="https://foroforbes.com/__old/2018/index.html"/>
                    <Card name="MUJERES PODEROSAS" date="MARTES, 19 JUNIO" place="WESTIN SANTA FE" image={mujeres} link="https://foroforbes.com/__old/2018/index.html"/>
                    <Card name="FORO NEGOCIOS" date="LUNES, 17 SEPTIEMBRE" place="ST. REGIS" image={negocios} link="https://foroforbes.com/__old/foro-forbes/2018/"/>
                    <Card name="GAME CHANGERS" date="MARTES, 16 OCTUBRE" place="LIVE AQUA. CDMX" image={game} link="https://foroforbes.com/__old/2018/pr%C3%B3ximamente.html"/>
                    <Card name="ENERGÍA" date="NOVIEMBRE 6" place="LIVE AQUA URBAN RESORTS" image={solar} link="https://foroforbes.com/energias-2018/"/>
                    <div className="moreEvents">
                        <h3>MÁS EVENTOS</h3>
                        <button><a href="https://foroforbes.com/__old/2018/pr%C3%B3ximamente.html" target="_blank">GO THERE</a></button>
                    </div>
                    <div className="footer">
                        <Footer/>
                    </div>
                </div>
                
                
            </div>
            
            
        );
    }
}
export default Board;
