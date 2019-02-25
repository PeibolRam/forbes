import React, { Component } from 'react';
import menuImg from './imgs/menu.png'
import logo from './imgs/logo-foroforbes-white.svg'
import fondo from './imgs/00-principal.jpg'
import './styles/nav.css'

import Card from './card'

class Navi extends Component{
    
    render(){
        return(
            <div className="header" style={{backgroundImage:`url(${fondo})`}}>
                <img src={logo} alt="" className="logoFor"/>
                <div className="nav">
                    <ul className="navbar">
                        <li><img src={menuImg} className="menuBtn"/>
                        <ul>
                            <li className="logoMenu"><img src={logo} /></li>
                            <li><a href="https://foroforbes.com/__old/franquicias/" target="_blank">FRANQUICIAS</a></li>
                            <li><a href="https://foroforbes.com/30-promesas-2019/" target="_blank">30 PROMESAS</a></li>
                            <li><a href="https://foroforbes.com/__old/2018/index.html" target="_blank">SALUD</a></li>
                            <li><a href="https://foroforbes.com/__old/2018/index.html" target="_blank">MUJERES PODEROSAS</a></li>
                            <li><a href="https://foroforbes.com/__old/foro-forbes/2018/" target="_blank">FORO NEGOCIOS</a></li>
                            <li><a href="https://foroforbes.com/__old/2018/pr%C3%B3ximamente.html" target="_blank">GAME CHANGERS</a></li>
                            <li><a href="https://foroforbes.com/energias-2018/" target="_blank">ENERGIA</a></li>
                            <li><a href="https://foroforbes.com/__old/2018/pr%C3%B3ximamente.html" target="_blank">MÁS EVENTOS</a></li>
                            <li><a href="https://foroforbes.com/__old/2018/contacto.html" target="_blank">CONTACTO</a></li>
                        </ul>
                        </li>
                    </ul>
                </div>
            </div>
            
        );
    }
}

export default Navi;