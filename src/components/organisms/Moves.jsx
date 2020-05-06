import * as React from 'react';
import '../game.css'
import { MoveButton } from '../atoms/Button';

class Moves extends React.Component {
    constructor() {
        super();
        this.state = {
            desc: null
        };
    }
    
    render() {
        var list = [];
        for(var step = 1; step <= this.props.stepNumber; step++) {
            if (step === 9) { // 9手目は表示させない
                break;
            }
            const desc = 'Move #' + (step);
            list.push(
                <li key={step}>
                    <MoveButton class="info-button" id={step} value={desc} onClick={this.props.jumpTo} />
                </li>
            );
        }
        
        return (
            <>
                <MoveButton key={0} class="info-button" id={0} value={'Reset'} onClick={this.props.jumpTo} />
                <ol>{list}</ol>
            </>
        );
    }
}

  export default Moves;