import React, { useState } from 'react';
import './App.css';



let gameNum = Math.floor(Math.round * 100) + 1

function App() {

  const [gameNumber, setGameNumber] = useState();
  const [playerNum, setPlayerNum] = useState(" ");
  const [playerCount, setPlayerCount] = useState(0);
  const [numPlayed, setNumPlayed] = useState([]);

  const playerGuessed = (n) => {
    setPlayerNum(n.target.value)
  }

  const buttonPress = () => { 
    setPlayerCount(playerCount + 1)
    setNumPlayed([...numPlayed, playerNum])
  } 
  
  return (
    <div className="App">
      <h1> Guess a number </h1>
      
      <input type='text' value={playerNum} onChange={playerGuessed}/>
      <button className='guess' onClick={buttonPress} > Guess </button>

      <div className="stats">
      
       <p> Guesses made: {playerCount} </p>
       <p> Numbers tried:  </p>
       <ul> {numPlayed.map((item, index) => {
          return <li> {item} </li>
          })} </ul>
       
    
      </div>
    </div>
)}


export default App;
