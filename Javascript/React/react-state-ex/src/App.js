import React, { Component } from 'react'
import Person from './Person';
import './App.css';

export default class App extends Component {
  state = {
    persons : [
      {name : "Max", city : "Essen", job : "Doctor" },
      {name : "Jalal", city : "Hamburg", job : "Dentist"},
      {name : "Saboor", city : "Berlin", job : "Dentist"}
    ],
    country : "Germany",
    Currency : "Euro"
  }
  changeData = () => {
    this.setState({
      persons :[
        {name : "Hamid", city : "Kabul", job : "Dentist" },
        {name : "Nasim", city : "Parwan", job : "Dentist"},
        {name : "Homayon", city : "Bamyan", job : "Dentist"}
      ],
      country : "Afghanistan"
    })

  }
  render() {
    return (
      <div className="App">
      <h1> this is React Class Component </h1>

      <Person name="Lars" city="Hannover" job="Web Designer" />
      <Person name={this.state.persons[0].name} city={this.state.persons[0].city} job={this.state.persons[0].job} />
      <Person name={this.state.persons[1].name} city={this.state.persons[1].city} job={this.state.persons[1].job} />
      <Person name={this.state.persons[2].name} city={this.state.persons[2].city} job={this.state.persons[2].job}>
      <button onClick={this.changeData}> Change data</button>
      </Person>
        
      </div>
    )
  }
}
