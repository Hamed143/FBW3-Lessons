import React from 'react';
import Inputfield from './inputField';
import './App.css';
import User from './Components/User';
import SearchResult from './SearchResult';

function App() {
  return (
    <div className="App">
     <p>User Search</p>
     <hr/>
<Inputfield />
<SearchResult/>
​
    </div>
  );
}
export default App;