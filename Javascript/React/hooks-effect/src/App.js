// import React, { Component } from 'react'
import './App.css'
// export default class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//        counter:0
//     }
//   }
//   render() {
//     return (
//       <div className="App">
//         <p>You clicked {this.state.counter} times
//            <button onClick={()=>this.setState({counter:this.state.counter +1})}>
//             CLICK ME
//           </button>
//         </p>
//       </div>
//     )
//   }
// }
//////////////////////////////////////////////////////
import React,{useState} from 'react';
export default function App() {
 const [counter,setCounter]=useState(0)
 const[food,setFood]=useState(['Banana']);
 const[color,setColor]=useState("lightgreen");
 document.body.style.background=color;
 return (
   <div className="App">
     <p>
       You clicked {counter} times
       </p>
       <button onClick={()=>setCounter(counter +1)}>
         CLICK ME !!!
       </button>
       <div>
         <button onClick={()=>setColor("red")}>RED</button>
         <button onClick={()=>setColor("green")}>GREEN</button>
         <button onClick={()=>setColor("blue")}>BLUE</button>
       </div>
   </div>
 )
}