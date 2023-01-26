const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const initialState = {
    loading: false,
    user: [],
    error: ''
}

const fetch_users_requested = 'fetch_users_requested'
const fetch_users_succeeded = 'fetch_users_succeeded'
const fetch_users_failed = 'fetch_users_failed'

const fetchUsersRequest = () => {
    return {
        type: fetch_users_requested
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: fetch_users_succeeded,
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: fetch_users_failed,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case fetch_users_requested:
            return {
                ...state,
                loading: true,
            }
        case fetch_users_succeeded:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case fetch_users_failed:
            return {
                ...state,
                loading: false,
                user: [],
                erroe: action.payload
            }
    }
}

const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
            const users = res.data.map((e)=> e.id)
            dispatch(fetchUsersSuccess(users))
        }).catch((error)=>{
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(()=> {
    console.log(store.getState())
})
store.dispatch(fetchUsers())