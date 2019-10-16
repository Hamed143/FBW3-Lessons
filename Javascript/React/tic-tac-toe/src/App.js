import React from 'react';
import Square from './Components/Square';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Square value="X" />
      <Square value="X" />
      <Square value="O" />
      <Square value="O" />
      <Square value="O" />
      <Square value="X" />
    </React.Fragment>
    
  );
}

export default App;
