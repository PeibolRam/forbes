import React, { Component } from 'react'
import './styles/footer.css'

class Footer extends Component{
    render(){
        return(
            <div className="pie">
                <div className="enlaces">
                    <h4><a href="https://foroforbes.com/__old/2018/index.html" target="_blank">FORO FORBES</a></h4>
                    <h4><a href="https://foroforbes.com/__old/2018/aviso-de-privacidad.html" target="_blank">AVISO DE PRIVACIDAD</a></h4>
                    <h4><a href="https://foroforbes.com/__old/2018/contacto.html" target="_blank">CONTACTO</a></h4> 
                </div>
                
                <p>Foro Forbes 2018 | Todos los derecho reservados © <a href="https://foroforbes.com/__old/2018/index.html" target="_blank">www.foroforbes.com.mx</a> </p>
            </div>
        );
    }
}

export default Footer;