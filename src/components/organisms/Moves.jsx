import * as React from 'react';
import '../game.css'
import SquareButton from '../atoms/SquareButton';

class Moves extends React.Component {
    constructor() {
        super();
        this.state = {
            desc: null
        };
    }
    
    render() {
        const desc = 'Move #' + this.props.id;
        return (
            <button className="info-button" onClick={() => this.props.jumpTo(this.props.id)}>{desc}</button>
        );
    }
}

  export default Moves;