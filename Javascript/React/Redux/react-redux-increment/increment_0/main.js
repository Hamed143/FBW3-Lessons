const redux = require('redux');
const createStore = redux.createStore;
// Redux
// 
// reducer
function counter (state = 0, action){
    switch(action.type) {
        case 'INCREMENT':
        return state + 1;
        case 'DECREMENT':
        return state - 1;
        default:
        return state;
    }
}

// store { subscribe, dispatch, getState }
let store = createStore(counter); //expose store with registered counter

// subscribe 
function printState() {
    console.log(store.getState());
}
store.subscribe(printState);

// actions
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});

store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'DECREMENT'});

store.dispatch({type: null});