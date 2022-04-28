import React from 'react';
import { useState } from 'react';


let gameNum = Math.floor(Math.random() * 100) + 1;

function Home() {

//UseState to handle playerNum, gameNumber, numPlayed, and how many guess. 
  const [gameNumber, setGameNumber] = useState(gameNum);
  const [gameMessage, setGameMessage] = useState(" ")
  const [playerNum, setPlayerNum] = useState(" ");
  const [playerCount, setPlayerCount] = useState(0);
  const [numPlayed, setNumPlayed] = useState([]);

  const playerGuessed = (n) => {
    setPlayerNum(n.target.value)
  }

  const buttonPress = () => { 

    // change 4 to imported variable from settings route. 
    if(playerCount < 4) {
      parseInt(playerNum) === parseInt(gameNum) ? (setGameMessage("You Win!")) : (setGameMessage("Try Again!"))
      console.log(playerNum)
      console.log(gameNum)
    } else {
      setGameMessage("Game Over!")
    }
    setPlayerCount(playerCount + 1)
    setNumPlayed([...numPlayed, playerNum])
  } 


    return(
        <div>
    <input type='text' value={playerNum} onChange={playerGuessed}/>
    <button className='guess' onClick={buttonPress} > Guess </button>

    <div id="game-message"> <div id="game-text"><h1> { gameMessage } </h1><button>Play again?</button></div> </div>

    <div className="stats">
     <p> Game Message: { gameMessage } </p>
     <p> Game Number: { gameNumber } </p>
     <p> Guesses Made: { playerCount } </p>
     <p> Numbers Tried  </p>
     <ul> {numPlayed.map((item, index) => {
        return <li key={index}> {item} </li>
        })} </ul>
    </div>


    </div>
    )
}

export default Home;