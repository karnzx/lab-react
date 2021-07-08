import React from 'react';
import WordCard from './WordCard';
import './App.css'

const word = "HELLO";
const max_attempts = 3;
function App() {
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
        <WordCard value={word} max_attempts={max_attempts} />
      }
    </div >
  );
}

export default App;
