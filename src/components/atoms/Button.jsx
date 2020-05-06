import * as React from 'react';
import '../game.css';

// メソッド引数なし
export const SingleSquare = (props) => {
    return (
        <button className={props.class} onClick={() => props.onClick()}>
            {props.value} 
        </button>
    );
}

// メソッド引数あり
export const MoveButton = (props) => {
    return (
        <button className={props.class} onClick={() => props.onClick(props.id)}>
            {props.value} 
        </button>
    );
}