import {React, useState} from "react"


// settings can't be changed via input 
const Settings = (props) => {
    const [maxGuess, setMaxGuess]=useState(props.maxGuess);
    const [endRange, setEndRange]=useState(props.endRange);
    const setMaxGuessClick=()=>{
        props.setMaxGuess(maxGuess);
    }
    const setEndRangeClick=()=>{
        props.setEndRange(maxGuess);
    }
    return(<div>
    
        <h1> Settings </h1>
        <p>Max Guesses: <input type='text' value={props.maxGuess} value={maxGuess}/></p>
        <p><button onClick={setMaxGuessClick}>Change</button></p>
        <p>End Range: <input type='text' value={props.endRange} value={endRange}/></p>
        <p><button onClick={setEndRangeClick}>Change</button></p>
        </div>
    )
}

export default Settings;