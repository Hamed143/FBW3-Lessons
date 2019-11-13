import {loadState} from '../Storage';
let initialState = {
    usersArray: [
        {
            id: 1,
            username: 'Hessam',
            age: 99,
            password:'hessam143'
        },
        {
            id: 2,
            username: 'Ali',
            age: 120,
            password:'ali420' 
        }
    ],
    logedIn: false,
    logedUser: {}
}
let defaulState = loadState();
if(defaulState ===null){
    console.log('Empty LocalStorage')
}
else{
    initialState = defaulState;
    console.log(initialState)
}

const usersReducer = (state = initialState,action) => {
    switch(action.type){
        case 'LOGIN_ACTION':
        let success = false;
        let logedUser = {};
        state.usersArray.forEach((user) => {
            if(user.username === action.username && user.password === action.password){
                success = true;
                logedUser = user;
            }
        })
        return {
            ...state,
            logedIn: success,
            logedUser: logedUser
        }
        case 'REGISTER_ACTION':
        let newUserArray = [...state.usersArray];
        let newID = newUserArray.length + 1;
        let newUser ={
            id: newID,
            ...action.userinfo
            // ,username: action.userinfo.username,
            // password: action.userinfo.password,
            // age: action.userinfo.age
        }
        newUserArray.push(newUser)
        return({
            usersArray: newUserArray,
            logedIn: true,
            logedUser: newUser
        })
        case 'LOGOUT_ACTION':
        return({
            ...state,
            logedIn: false,
            logedUser: {}
        })
        default:
        return state
    }
}
export default usersReducer;