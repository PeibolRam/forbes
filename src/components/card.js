import React, { Component } from 'react'
import './card.css'

class Card extends Component {
    render(){
        return(
            <div className="cardTem">
                <h3>nameCard</h3>
                <h5>FECHA</h5>
                <h4>date</h4>
                <h5>LUGAR</h5>
                <h4>place</h4>
                <button>GO THERE</button>
            </div>
        );
    }
}

export default Card;