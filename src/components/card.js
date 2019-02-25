import React, { Component } from 'react'
import './styles/card.css'

class Card extends Component {
    render(){
        return(
            <div className="cardTem" style={{backgroundImage:`url(${this.props.image})`}}>
                <div className="cartTemInfo">
                    <h2>{this.props.name}</h2>
                    <h5>FECHA</h5>
                    <h4>{this.props.date}</h4>
                    <h5>LUGAR</h5>
                    <h4>{this.props.place}</h4>
                    <button><a href={this.props.link}>GO THERE</a> </button>
                </div>
            </div>
        );
    }
}

export default Card;