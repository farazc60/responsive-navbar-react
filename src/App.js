import React from 'react';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>Welcome to My Website</h1>
        <p>This is a responsive and interactive navbar example in React with custom CSS.</p>
      </div>
    </div>
  );
}

export default App;