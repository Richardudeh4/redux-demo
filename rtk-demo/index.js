const store = require('./app/store')
const cakeActions = require('./features/cake/CakeSlice').cakeActions
console.log('initial state', store.getState())
const unSubscribe = store.subscribe(()=> {
    console.log('updated state', store.getState())
})
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(4))
unSubscribe()