import React,{useState,useEffect} from 'react'
import "./App.css";
import App from './App';

export default function Hooks() {
   const [value,setValue]=useState('');
   const [counter,setCounter]=useState(0);
   useEffect(()=>{
       document.title=`You clicked ${counter} times`;
   });
   return (
       <div className="App">
           <form onSubmit={(e)=>{e.preventDefault();}}>
               <label>Please Write your Name!!! </label>
               <input onChange={(e)=>setValue(e.target.value)} type="text"/>
           </form>
           <p>{value}</p>
           <p>You clicked {counter} times</p>
           <button onClick={()=>setCounter(counter +2)}>
               CLICK ME
           </button>
          <App/>
       </div>
   )
}