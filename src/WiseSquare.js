import React, { Component } from 'react'
import './WiseSquare.css';

class WiseSquare extends Component {
    handleMouseEnter() {
        let messages = [
            "A smooth sea never made a skilled sailor.",
            "The comeback is always greater than the setback.",
            "Educating the mind without educating the heart is no education at all"
        ]
        let rIndex = Math.floor(Math.random() * messages.length);
        console.log(messages[rIndex]);
    }
    render () {
        return (
            <div>
                <h1>The Sage</h1>
                <div 
                    className="WiseSquare"
                    onMouseEnter={this.handleMouseEnter}>
                    <h2>🧙🏻‍♂️</h2>
                </div>
            </div>
            
        )
    }
}

export default WiseSquare;