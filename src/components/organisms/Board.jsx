import * as React from 'react';
import '../game.css';
import Square from '../molecules/Square';

class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            history: [{
                squares: Array(9).fill(null)
              }]
        };
        this.updateHistory = this.updateHistory.bind(this);
    }

    updateHistory(id) {
        const history = this.state.history.slice(0, this.props.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (this.props.result || squares[id]) {
            return false;
        }
        squares[id] = this.props.isNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
        });
        this.props.set4NextStep(history.length);
        this.props.calculateWinner(squares);
        return true;
    }

    renderSquare(i, square) {
        return (
            <Square
                id={i}
                value={square} 
                updateHistory={this.updateHistory}
            />
        );
    }
    render() {
        const history = this.state.history.slice(0, this.props.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0, squares[0])}
                    {this.renderSquare(1, squares[1])}
                    {this.renderSquare(2, squares[2])}
                </div>
                <div className="board-row">
                    {this.renderSquare(3, squares[3])}
                    {this.renderSquare(4, squares[4])}
                    {this.renderSquare(5, squares[5])}
                </div>
                <div className="board-row">
                    {this.renderSquare(6, squares[6])}
                    {this.renderSquare(7, squares[7])}
                    {this.renderSquare(8, squares[8])}
                </div>
            </div>
        );
    }
}

export default Board;