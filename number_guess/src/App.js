import {React, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

import Navbar from "./components/navbar"
import Home from './pages/home';
import Settings from './pages/settings';
import Stats from './pages/stats';

// change 100 by importing from settings route 
let gameNum = Math.floor(Math.random() * 100) + 1;

function App() {

  const [gameNumber, setGameNumber] = useState(gameNum);
  const [playerCount, setPlayerCount] = useState(0);
  const [maxGuess, setMaxGuess] = useState(4);
  const [numPlayed, setNumPlayed] = useState([]);
  const [endRange, setEndRange]=useState(100);
  const average =()=>{
    const num = numPlayed.length;
    const avg = num/playerCount;;
    console.log ("average:", avg);
    return avg;
  }
  return (
    
    <Router>
    <div>
      <Navbar />
    <div className="App">
    
      <Routes>
      <Route path="/" element={ <Home gameNumber={gameNumber} setPlayerCount={setPlayerCount} setNumPlayed ={setNumPlayed} maxGuess={maxGuess}/> } />
      <Route path="/settings" element={ <Settings maxGuess={maxGuess} setMaxGuess={maxGuess} endRange={endRange} setEndRange={setEndRange}/> }/>
      <Route path="/stats" element={ <Stats playerCount={playerCount} average={average()}/> }/>
      </Routes>

    </div>
    </div>
    </Router>
)}


export default App;
