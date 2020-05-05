import * as React from 'react';
import '../game.css';

const SingleSquare = (props) => {
    return (
        <button className={props.class} onClick={() => props.onClick()}>
            {props.value} 
        </button>
    );
}

export default SingleSquare;