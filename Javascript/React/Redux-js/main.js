// Here we import redux and take the method createStore
const redux = require('redux');
const createStore = redux.createStore;

//the first value for our store
const firstStore = {
    name: 'Hessam',
    address: 'Hamburg',
    job: 'Pilot'
}

const reducer = (state = firstStore,action) => {
    if(action.type === 'CHANGE_NAME'){
        return({
            ...state,
            name: action.value
        })
    }
    if(action.type === 'CHANGE_ADDRESS'){
        return({
            ...state,
            address: action.value
        })
    }
    return state
}

//Create store with the redux function createStore
const store = createStore(reducer)
console.log(store.getState())

store.subscribe(() =>{

    console.log('Store has been updated',store.getState())

})

// Dispatch Actions
store.dispatch({
    type: 'CHANGE_NAME',
    value: 'Hamed'
})
console.log(store.getState())

store.dispatch({
    type: 'CHANGE_ADDRESS',
    value: 'Berlin'
})
console.log(store.getState())