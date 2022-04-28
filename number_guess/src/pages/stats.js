import React from "react"
import Home from './home';


const Stats = (props) => {
    return(
    
    <div>
    <h1> Stats </h1>
    <p> Guesses Made: { props.playerCount } </p>
    <p> Average: { props.average } </p>
    
    </div>)
}

export default Stats;