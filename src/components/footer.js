import React, { Component } from 'react'
import './styles/footer.css'

class Footer extends Component{
    render(){
        return(
            <div className="pie">
                <h4><a href="#">FORO FORBES</a></h4>
                <h4><a href="#">AVISO DE PRIVACIDAD</a></h4>
                <h4><a href="#">CONTACTO</a></h4>
                <p>Foro Forbes 2018 | Todos los derecho reservados © www.foroforbes.com.mx</p>
            </div>
        );
    }
}

export default Footer;