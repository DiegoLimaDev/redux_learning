const redux = require('redux')
const produce = require('immer').produce
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducer = redux.combineReducers
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware

const cake_ordered = 'cake_ordered'
const cake_restocked = 'cake_restocked'
const icecream_ordered = 'icecream_ordered'
const icecream_restocked = 'icecream_restocked'

const orderCake = (qty=1) => {
    return {
        type: cake_ordered,
        payload: qty  
    }
}

const restockCake = (qty = 1) => {
    return {
        type: cake_restocked,
        payload: qty,
    }
}

const orderIcecream = (qty = 1) => {
    return {
        type: icecream_ordered,
        payload: qty  
    }
}

const restockIcecream = (qty = 1) => {
    return {
        type: icecream_restocked,
        payload: qty,
    }
}


const cakesInitialState = {
    numOfCakes: 10
}

const icecreamInitialState = {
    numOfIcecreams: 20
}

const cakeReducer = (state = cakesInitialState, action) => {
    switch(action.type){
        case cake_ordered:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }
            // return produce(cakesInitialState, (draft)=> {
            //     draft.numOfCakes -= action.payload
            // })
        case cake_restocked:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state
    }
}

const icecreamReducer = (state = icecreamInitialState, action) => {
    switch(action.type){
        case icecream_ordered:
            return {
                ...state,
                numOfIcecreams: state.numOfIcecreams - action.payload
            }
        case icecream_restocked:
            return {
                ...state,
                numOfIcecreams: state.numOfIcecreams + action.payload
            }
    
        default:
            return state
    }
}

const rootReducer = combineReducer({
    cake: cakeReducer,
    icecream: icecreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('initial state:', store.getState())

// const unsubscribe = store.subscribe(()=>console.log('updated state:', store.getState()))

const actions = bindActionCreators({orderCake, restockCake, orderIcecream, restockIcecream}, store.dispatch)
actions.orderCake(1)
actions.orderCake(1)
actions.orderCake(1)
actions.restockCake(3)
actions.orderIcecream(1)
actions.orderIcecream(1)
actions.restockIcecream(2)


// unsubscribe()