import React from 'react';
import{BrowserRouter,Route,Link} from 'react-router-dom';
import './App.css';

const Child=({match})=>
console.log('match is: ', match)||
(
<div>
<h3> the name is :{match.params.name}</h3>
</div>
)
function App() {
  return (
    <BrowserRouter>
    <div>
      <h1>Social Media Links</h1>
      <ul>
        <li><Link to='/facebook'>Facebook</Link></li>
        <li><Link to='/instagram'>Instagram</Link></li>
        <li><Link to='/telegram'>Telegram</Link></li>
        <li><Link to='/twiter' >Twitter</Link></li>
      </ul>
      <Route path='/:name' component={Child}/>
    </div>
    </BrowserRouter>
  );
}
export default App;