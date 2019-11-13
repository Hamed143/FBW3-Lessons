import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter  from '../components/counter';
import CounterOutput from '../components/counterOutput'

export class CounterContainer extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <Counter label = "Increment" clicked={this.props.onIncrement} />
                <Counter label = "Decrement" clicked={this.props.onDecrement} />  
                <Counter label = "Increment 5" clicked={this.props.onIncrement5} />
                <Counter label = "Decrement 5" clicked={this.props.onDecrement5} />  
                              
            </div>
        )
    }
}

const mapStatetoProps = (state) =>{
    return {
        ctr:state.counter
    }
}
const mapDispatchtoprops = (dispatch)=>{
    return {
        onIncrement: () => { dispatch({ type: 'CTR_INCREMENT'})},
        onDecrement: () => { dispatch({ type: 'CTR_DECREMENT'})},
        onIncrement5: () => { dispatch({ type: 'CTR_INCREMENT5'})},
        onDecrement5: () => { dispatch({ type: 'CTR_DECREMENT5'})},
    }
}
export default connect(mapStatetoProps,mapDispatchtoprops)(CounterContainer)
