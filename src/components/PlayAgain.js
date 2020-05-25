import React from 'react';

const PlayAgain = props => {
return <div className = "game-done">
<div
    style = {{color : props.gameStatus === 'won' ? 'green' : 'red' }}
    className= 'message'>
    {props.gameStatus === 'won' ? 'Well done' : 'Game Over'}
</div>
<button onClick = {props.onClick}>Play Again</button>
</div>
}

export default PlayAgain;