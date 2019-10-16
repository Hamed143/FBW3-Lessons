import React, { Component } from 'react'
import Ctime from './Ctime'
export default class Clocks extends Component {

    constructor(props){
        super(props);
        this.state = {
            countries:['Asia/Kabul','Europe/Berlin','Australia/Brisbane'],
            time: new Date()
        }
    }
    componentDidMount(){
        this.timer=setInterval(
            () => this.tick(), 1000
        );
    }
    tick = () => {
        this.setState({time:new Date()})
    }
    render() {
        return (
            <div>
                <Ctime time={this.state.time} timezone={this.state.countries[1]} />
            </div>
        )
    }
}
