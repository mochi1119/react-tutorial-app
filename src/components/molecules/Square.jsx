import * as React from 'react';
import '../game.css';
import SquareButton from '../atoms/SquareButton';

class Square extends React.Component {
    constructor() {
      super();
      this.state = {
        value: null
      };
      this.clickSquare = this.clickSquare.bind(this);
    }

    clickSquare() {
        const isUpdate = this.props.updateHistory(this.props.id);
        if(isUpdate) {
            this.setState({
                value: this.props.isNext ? 'X' : 'O'
            });
        }
    }

    render() {
        return (
            <SquareButton class='square' value={this.props.value} onClick={this.clickSquare} />
        );
    }
}

export default Square;