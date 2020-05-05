import * as React from 'react';
import '../game.css';
import SingleSquare from '../atoms/SingleSquare';

class Square extends React.Component {
    constructor() {
      super();
      this.state = {
        value: null,
      };
    }
    render() {
      return (
        <SingleSquare value={this.props.value} onClick={() => this.props.onClick()} />
      );
    }
}

export default Square;