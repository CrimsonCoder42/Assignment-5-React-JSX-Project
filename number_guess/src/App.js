import React, { useState } from 'react';
import './App.css';



function App() {

  const [playerNum, setPlayerNum] = useState("");
  const [playerCount, setPlayerCount] = useState(0);
  const [numPlayed, setNumPlayed] = useState([]);

  const buttonPress = ( ) => { 
    setPlayerCount(playerCount + 1)
    setNumPlayed([...numPlayed], playerNum)
  } 

  const playerGuessed = (n) => {
    setPlayerNum(n.target.value)
  }
  return (
    <div className="App">
      <h1> Guess a number </h1>
      
      <input type='text' value={playerNum} onChange={playerGuessed}/>
      <button className='guess' onClick={buttonPress} > Guess </button>

      <div className="stats">
      
       <p> Guesses made: {playerCount} </p>
       <p> 
        Numbers tried: 
        {numPlayed.map((item, index) => {
          return <p key={index}>{item}</p>
          
        })}
        </p>
      </div>

    </div>
  );
}

export default App;
