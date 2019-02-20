import React, { Component } from 'react'
import './styles/card.css'

class Card extends Component {
    
    render(){
        return(
            <div className="cardTem" style={{backgroundImage:`url(${this.props.image})`}}>
                <div className="cartTem--info">
                    <h3>{this.props.name}</h3>
                    <h5>FECHA</h5>
                    <h4>{this.props.date}</h4>
                    <h5>LUGAR</h5>
                    <h4>{this.props.place}</h4>
                    <button>GO THERE</button>
                </div>
            </div>
        );
    }
}

export default Card;