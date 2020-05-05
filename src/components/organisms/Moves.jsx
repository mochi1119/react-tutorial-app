import * as React from 'react';
import '../game.css'

class Moves extends React.Component {
    constructor() {
        super();
        this.state = {
            desc: null
        };
    }
    
    render() {
        return (
            this.props.history.map((step, move) => {
                const desc = move ? 'Move #' + move : 'Game start';
                return (
                    <li key={move}> 
                        <button className="info-button" onClick={() => this.props.jumpTo(move)}>{desc}</button>
                    </li>
                )
            })
        )
    }
}

  export default Moves;