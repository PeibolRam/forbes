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
                        <li><img src={menuImg} alt="" className="menuBtn"/>
                        <ul>
                            <li className="itemIni"><img src={logo} alt="" /></li>
                            <li><a href="#" >FRANQUICIAS</a></li>
                            <li><a href="#" >30 PROMESAS</a></li>
                            <li><a href="#" >SALUD</a></li>
                            <li><a href="#" >MUJERES PODEROSAS</a></li>
                            <li><a href="#" >FORO NEGOCIOS</a></li>
                            <li><a href="#" >GAME CHANGERS</a></li>
                            <li><a href="#" >ENERGIA</a></li>
                            <li><a href="#" >MÁS EVENTOS</a></li>
                            <li><a href="#" >CONTACTO</a></li>
                        </ul>
                        </li>
                    </ul>
                </div>
            </div>
            
        );
    }
}

export default Navi;