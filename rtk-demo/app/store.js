const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../features/cake/CakeSlice')
const  cake_slice = require( "./cake_slice")
const store = configureStore({
    reducer: {
        // cake: cakeReducer,
        cake:cake_slice

    },
})
module.exports = store