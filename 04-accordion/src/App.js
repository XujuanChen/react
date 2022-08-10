import React, {useState} from 'react';
import './index.css';
import Question from './Question'

function App() {
  return (
    <main>
      <div className="title">
        <h2>Questions</h2>
        <div className="underline"></div>
      </div>
      <Question />
    </main>
  );
}

export default App;
