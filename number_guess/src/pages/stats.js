import React from "react"
import Home from './home';


const Stats = (props) => {
    return(
        // # guessed correctly & Average number of guesses needed 
    <div>
    <h1> Stats </h1>
    <p> Guesses Made: { props.playerCount } </p>
    <p> Average: { props.average } </p>
    
    </div>)
}

export default Stats;