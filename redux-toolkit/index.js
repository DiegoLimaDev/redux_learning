const store = require('./app/store')
const { icecreamActions } = require('./features/icecreams/icecreamSlice')
const {cakeActions} = require('./features/cakes/cakeSlice')
const { fetchUsers } = require('./features/users/userSlice')

// console.log("Initial state:", store.getState())

const unsubscribe = store.subscribe(()=>{
    console.log('updated state: ', store.getState())
})

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))

// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restocked(2))

store.dispatch(fetchUsers())

unsubscribe()
