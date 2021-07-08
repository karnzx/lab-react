import React, { useState } from 'react';
import WordCard from './WordCard';
import './App.css'

const word = "HELLO";
const max_attempts = 3;
function App() {
  const [state, setState] = useState('')
  const [attempt, setAttempt] = useState(1)
  const gameController = p => {
    // console.log(p.completed)
    setAttempt(p.attempt)
    if (p.completed) {
      setState("GUESS WELL!")
    } else if (p.attempt > p.max_attempts) {
      setState("GAME OVER!!")
    }
    // console.log(state)
  }

  return (
    <div>
      <div className="topCard">
        <div>
          GUESS THE WORD !
        </div>
        <div>
          Max time to guess is {max_attempts}
        </div>
        <div>
          Have Fun!
        </div>
      </div>
      {
        <WordCard value={word} max_attempts={max_attempts} gameController={gameController} />
      }
      <div className="topCard">
        Guessed : {attempt - 1}
        <br></br>
        {state}
      </div>
    </div >
  );
}

export default App;
