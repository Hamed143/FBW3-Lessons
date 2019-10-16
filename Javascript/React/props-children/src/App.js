import React from 'react';
import Person from './Person';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Props Children</h1>
    <Person class="green" name="Hamed" city="Hamburg" job="Web Developer">
    My name is Hamed and living in Hamburg
    </Person>
    <Person name="Hessam" city="Hamburg" job="Web Developer"/>
    <Person name="Ali" city="Hamburg" job="Web Developer"/>
    <Person class="blue" name="Jafar" city="Hamburg" job="Web Developer">
    <h2>My name is Jafar and my job is web Developer</h2>
    <h4> I like Javascript</h4>
    </Person>

    </div>
  
  );
}

export default App;
