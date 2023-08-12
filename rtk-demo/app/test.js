const store = require('./store')
const {increment,decrement,addList} = require("./cake_slice").cakeActions
console.log('initial state', store.getState())
const unSubscribe = store.subscribe(()=> {
    console.log('updated state', store.getState())
})

// store.dispatch(increment)

store.dispatch(addList(1))
store.dispatch(addList(2))
store.dispatch(addList(3))
store.dispatch(addList(4))
unSubscribe()
