import React, { Component } from 'react'
import Card from './card';
import './tablero.css'

class Board extends Component {
    render() {
        return (
            <div className="fichas">
                <Card/>
                <Card/>
                
            </div>
            
        );
    }
}

export default Board;