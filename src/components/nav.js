import React, { Component } from 'react';
import menuImg from './imgs/menu.png'
import logo from './imgs/logo-foroforbes-white.svg'
import './styles/nav.css'

import Card from './card'

class Navi extends Component{
    render(){
        return(
            <div className="header">
                <img src={logo} alt="" className="logoFor"/>
                <ul className="nav">
                    <li><img src={menuImg} alt="Menu" className="menuImg"/>
                    
                    </li>
                </ul>    
            </div>
            
        );
    }
}

export default Navi;