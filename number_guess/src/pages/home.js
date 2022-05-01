import React from 'react';
import { useState } from 'react';





function Home(props) {
    //const 
//UseState to handle playerNum, gameNumber, numPlayed, and how many guess. 
  const [gameNumber, setGameNumber] = useState(props.gameNumber);
  const [disable, setDisable] = useState(false);
  const [gameMessage, setGameMessage] = useState(" ")
  const [playerNum, setPlayerNum] = useState(" ");
  const [playerCount, setPlayerCount] = useState(0);
  const [numPlayed, setNumPlayed] = useState([]);

  const playerGuessed = (n) => {
    setPlayerNum(n.target.value)
  }

  function visibleMessage(color) {
    const message = document.getElementById("game-message")
    const text = document.getElementById("game-text")
    message.style.visibility = "visible";
    message.style.backgroundColor = color;
    text.style.backgroundColor = color;
}

  const buttonPress = () => { 

    // change 4 to imported variable from settings route. 
    if(playerCount < props.maxGuess) {
        const pn =  parseInt(playerNum);
        const gn =  parseInt(gameNumber);
        if(pn===gn)
        {
            setGameMessage("You Win!");
            visibleMessage('green');
            setDisable(true);
        }else if (pn < gn)
        {
            setGameMessage("Higher!");
            
        }else {
            setGameMessage("Lower!");
        }
    //   console.log(playerNum)
    //   console.log(gameNum)
    } else {
      setGameMessage("Game Over!")
      visibleMessage('red')
      setDisable(true);
    }
    setPlayerCount(playerCount + 1)
    setNumPlayed([...numPlayed, playerNum])
    props.setNumPlayed([...numPlayed, playerNum])
    props.setPlayerCount(playerCount);
  } 

  function playAgain() {
    const message = document.getElementById("game-message")
    message.style.visibility = "hidden";
    setDisable(false);
    setGameMessage("");
    setPlayerCount(0);
    setNumPlayed([]);
    setGameNumber(Math.floor(Math.random() * 100) + 1);
  }

    return(
        <div>
        <h1> Pick a number </h1>
    <input disabled={disable} type='text' value={playerNum} onChange={playerGuessed}/>
    <button disabled={disable} className='guess' onClick={buttonPress} > Guess </button>
    
    
    <div id="game-message"> <div id="game-text"><h1> { gameMessage } </h1><button onClick={playAgain}>Play again?</button></div> </div>


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