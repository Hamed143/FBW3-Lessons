import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions';

export class Home extends Component {
    handleRedirect=()=> {
        if(this.props.logedIn){
            return null
        }else{
            return <Redirect to='/'/>
        }
    }
    render() {
        return (
            <div>
                {this.handleRedirect()}
                <h1>Welcome Bruder</h1>
                <h2> {this.props.user.username} </h2>

                <button onClick={this.props.LogoutUser}>Lot Out</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.logedUser,
    logedIn: state.logedIn
})

const mapDispatchToProps = (dispatch) => ({
    LogoutUser: () => dispatch(logout())
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
