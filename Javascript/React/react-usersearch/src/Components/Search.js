import React, { Component } from 'react'
import User from './Components/User'
​
export default class SearchResult extends Component {
    constructor(props) {
        super(props) 
        this.state = { 
           users: [
              { id: 1, name: 'Wasif',  email: 'wasif@email.com' },
              { id: 2, name: 'Ali',    email: 'ali@email.com' },
              { id: 3, name: 'Saad',   email: 'saad@email.com' },
              { id: 4, name: 'Asad',   email: 'asad@email.com' }
           ]
        }
     }
    render() {
        return (
            <div>
            <table>
                <tbody>
                {this.state.users.map((item,i)=>{
                    return(
                        <User/> 
                    )
                })}
                   
                </tbody>
            </table>
            </div>
        )
    }
}