import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game'


const App = () => {
    const [gameId, setGameId] = useState(1);
    return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />
}

export default App

