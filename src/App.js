import React from 'react';
import WordCard from './WordCard';

const word = "hello";
function App() {
  return (
    <div>
      {
        <WordCard value={word} />
      }
    </div>
  );
}

export default App;
