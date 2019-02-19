import React, { Component } from 'react';
import menu from './imgs/menu.png'
import logo from './imgs/logo-foroforbes-white.svg'
import './styles/nav.css'

import Card from './card'

class Navi extends Component{
    render(){
        return(
            <div className="header">
                <img src={logo} alt="" className="logoFor"/>
                <ul className="nav">
                    <li><img src={menu} alt="Menu" className="menuImg"/>
                    <ul>
                        <li> <a href="#"> FRANQUICIAS </a></li>
                        <li> <a href="#"> 30 PROMESAS </a></li>
                        <li> <a href="#"> SALUD </a></li>
                        <li> <a href="#"> MUJERES PODEROSAS </a></li>
                        <li> <a href="#"> FORO NEGOCIOS </a></li>
                        <li> <a href="#"> GAME CHANGERS </a></li>
                        <li> <a href="#"> ENERGÍA </a></li>
                        <li> <a href="#"> MÁS EVENTOS </a></li>
                        <li> <a href="#"> CONTACTO </a></li>
                    </ul>
                    </li>
                </ul>    
            </div>
            
        );
    }
}

export default Navi;