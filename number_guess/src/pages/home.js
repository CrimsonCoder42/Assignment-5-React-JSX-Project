import React from 'react';
import { useState } from 'react';
import useVisible from '../hook/visible';


let gameNum = Math.floor(Math.random() * 100) + 1;

function Home(props) {
    //const 
//UseState to handle playerNum, gameNumber, numPlayed, and how many guess. 
  const [gameNumber, setGameNumber] = useState(props.gameNumber);
  const [gameMessage, setGameMessage] = useState(" ")
  const [playerNum, setPlayerNum] = useState(" ");
  const [playerCount, setPlayerCount] = useState(0);
  const [numPlayed, setNumPlayed] = useState([]);

  const [] = useVisible();

  const playerGuessed = (n) => {
    setPlayerNum(n.target.value)
  }

  const buttonPress = () => { 

    // change 4 to imported variable from settings route. 
    if(playerCount < props.maxGuess) {
        const pn =  parseInt(playerNum);
        const gn =  parseInt(gameNumber);
        if(pn===gn)
        {
            setGameMessage("You Win!");
        }else if (pn < gn)
        {
            setGameMessage("Higher!");
        }else {
            setGameMessage("Lower!");
        }
      
      console.log(playerNum)
      console.log(gameNum)
    } else {
      setGameMessage("Game Over!")
    }
    setPlayerCount(playerCount + 1)
    setNumPlayed([...numPlayed, playerNum])
    props.setNumPlayed([...numPlayed, playerNum])
    props.setPlayerCount(playerCount);
  } 


    return(
        <div>
        <h1> Pick a number </h1>
    <input type='text' value={playerNum} onChange={playerGuessed}/>
    <button className='guess' onClick={buttonPress} > Guess </button>
    
    {/* Change div color and make appear depending on win or loss */}
    <div id="game-message"> <div id="game-text"><h1> { gameMessage } </h1><button>Play again?</button></div> </div>
    {/* have Play Again button reset game but not stats  */}


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