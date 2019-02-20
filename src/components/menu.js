import React, { Component } from 'react';
import './styles/menu.css'
import logo from './imgs/logo-foroforbes-white.svg'

class Menu extends Component{
    render(){
        return(
            <div className="menuDesp">
                <div className="cabMenu">
                    <img src={logo} alt="" className=""/>
                    <button>X</button>
                </div>
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
            </div>
            
        );
    }
}