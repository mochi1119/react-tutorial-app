import * as React from 'react';
import '../game.css';
import Board from '../organisms/Board';
import Moves from '../organisms/Moves';


class Game extends React.Component {
    constructor() {
      super();
      this.state = {
        isNext: true,
        stepNumber: 0,
        result: null
      };
      this.jumpTo = this.jumpTo.bind(this);
      this.set4NextStep = this.set4NextStep.bind(this);
      this.calculateWinner = this.calculateWinner.bind(this);
    }

    jumpTo(step) {
        this.setState({
          stepNumber: step,
          xIsNext: (step % 2) ? false : true,
        });
    }

    set4NextStep(step){
        this.setState({
            stepNumber: step,
            isNext: !this.state.isNext,
        });
    }

    calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                this.setState({
                    result: squares[a]
                });
            }
        }
    }

    render() {
        let status;
        const result = this.state.result;
        if (result) {
            status = 'Winner: ' + result;
        } else if (!result && this.state.stepNumber === 9) {
            status = 'Draw'; 
        } else {
            status = 'Next player: ' + (this.state.isNext ? 'X' : 'O');
        }
    
        return (
            <div className="game">
            <div className="game-board">
                <div className="status">{status}</div>
                <Board
                    isNext = {this.state.isNext}
                    result = {this.state.result}
                    stepNumber={this.state.stepNumber}
                    set4NextStep={this.set4NextStep}
                    calculateWinner={this.calculateWinner}
                />
            </div>
            <div className="game-info">
                {/* <Moves history={history} jumpTo={this.jumpTo} /> */}
            </div>
            </div>
        );
    }
}

  export default Game;