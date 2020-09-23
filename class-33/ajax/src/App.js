import React from 'react';
import './App.css';
import Swapi from './swapi';
import Todo from './todo';
import Planets from './planets';

function App() {

  return (
    <div className="App">
      <h1>Load Data!!!!</h1>
      <Todo />
      <Swapi />
     <Planets />
    </div>
  );
}

export default App;
