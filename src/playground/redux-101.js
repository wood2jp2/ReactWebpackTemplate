import {createStore} from 'redux'

const store = createStore( (state = {count: 0}, action) => {

    switch (action.type) {
        case "INCREMENT":
            const incrementBy = typeof action.incrementBy === 'number' ? 
                action.incrementBy : 
                1
            return {
                count: state.count+incrementBy
            };
        case "DECREMENT": 
            const decrementBy = typeof action.decrementBy === 'number' ? 
                action.decrementBy : 
                1
            return {
                count: state.count-decrementBy
            };
        case "SET":
            return {
                count: action.number
            }
        case "RESET":
            return {
                count: 0
            };
        default: 
            return state
    }
})

// const unsubscribe = store.subscribe(() => console.log(store.getState()))
store.subscribe(() => console.log(store.getState()))
store.dispatch({
    type: "INCREMENT",
    incrementBy: 5
})

// unsubscribe()

store.dispatch({
    type: "INCREMENT"
})

store.dispatch({
    type: "RESET"
})

store.dispatch({
    type: "DECREMENT",
    decrementBy: 23
})

store.dispatch({
    type: "SET",
    number: 191
})