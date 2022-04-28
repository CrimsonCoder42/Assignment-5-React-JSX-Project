import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';


import Home from './pages/home';
import Settings from './pages/settings';
import Stats from './pages/stats';

// change 100 by importing from settings route 
let gameNum = Math.floor(Math.random() * 100) + 1;

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/settings" element={ <Settings /> }/>
      <Route path="/stats" element={ <Stats /> }/>
      </Routes>

    </div>
    </Router>
)}


export default App;
