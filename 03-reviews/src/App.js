import React from 'react';
import './index.css';
import Review from './Review';

function App() {
  return (
    <main>
      <div className='title'>
        <h2>Review</h2>
        <div className='underline'></div>
      </div>
      <Review />
    </main>
  );
}

export default App;
