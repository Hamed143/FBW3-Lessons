import React,{Component} from 'react';
import TableHeader from './Components/TableHeader';
import TableBody from './Components/TableBody';
import './App.css';

class App extends Component {

state ={
  List: [
    {id:1, name: "Ali", age:29, email:"Ali@dci.com"},
    {id:2, name: "Roman", age:39, email:"Roman@dci.com"},
    {id:3, name: "Mujtaba", age:49, email:"Mujtaba@dci.com"},
    {id:4, name: "Farzad", age:59, email:"Farzad@dci.com"},
  ]
}

render() {
  return (
    <div className="App">
    <table>
      <thead>
        <tr>
          <TableHeader list={this.state.List} />
        </tr>
      </thead>
      <tbody>
        <TableBody list={this.state.List}/>
      </tbody>
    </table>
    </div>
  );
  }
}
export default App;
