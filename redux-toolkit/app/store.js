const configureStore = require('@reduxjs/toolkit').configureStore
const { getDefaultMiddleware } = require('@reduxjs/toolkit')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const cakeReducer = require('../features/cakes/cakeSlice')
const icecreamReducer = require('../features/icecreams/icecreamSlice')
const userReducer = require('../features/users/userSlice')

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

module.exports = store