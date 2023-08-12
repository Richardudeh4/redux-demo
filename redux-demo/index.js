const redux = require('redux'); 
const bindActionCreator = redux.bindActionCreators
const CombineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger()
const createStore = redux.createStore


const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';


const initialCakeState = {
    numberofCakes: 10,
  
}


//beginning of orderCake action
function orderCake(){
    return{
        type: CAKE_ORDERED,
        payload: 1,
    }
}
// beginning of restockCake action 
function restockCake(payload=1){
    return{
        type: CAKE_RESTOCKED,
        payload: payload
    }
}
// end of orderCake action
const initialIcecreamState ={
    numberofIcecream: 20
}
function orderIcecream(){
    return{
        type: ICECREAM_ORDERED,
        payload: 1
    }
}
function restockIcecream(payload=1){
    return{
        type: ICECREAM_RESTOCKED,
        payload: payload
    }
}



// beginning of  cake reducer 
const CakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                numberofCakes: state.numberofCakes - 1,
            
            }
        case CAKE_RESTOCKED:
            return{
                ...state,
                numberofCakes: state.numberofCakes + action.payload,
            }
            default:
                return state
    }
}

// end of cake  reducer
const IcecreamReducer = (state= initialIcecreamState, action)=> {
    switch(action.type){
        case ICECREAM_ORDERED:
            return {
                ...state,
                numberofIcecream: state.numberofIcecream - 1
            }
        case ICECREAM_RESTOCKED: 
            return{
                ...state,
                numberofIcecream : state.numberofIcecream + action.payload
            }
    }
}

// const rootReducer = CombineReducers({
//     cake: CakeReducer,
//     iceCream : IcecreamReducer
// })
// beginning of store 
// const store = createStore(rootReducer);
// console.log('initial state', store.getState())
// const unSubscribe = store.subscribe(()=> 
//     console.log('update state', store.getState())
// )
// // store.dispatch(orderCake())
// // store.dispatch(orderCake())
// // store.dispatch(orderCake())
// // store.dispatch(restockCake(13))
// const actions = bindActionCreator({ orderCake, restockCake, orderIcecream, restockIcecream}, store.dispatch) 
// actions.orderCake() 
// actions.orderCake() 
// actions.orderCake() 
// actions.restockCake(3)
// actions.orderIcecream()
// actions.orderIcecream()
// actions.orderIcecream()
// actions.restockIcecream(1)
// unSubscribe();
const Cakestore = createStore(CakeReducer, applyMiddleware(logger));
console.log('initial state', Cakestore.getState())
const CakeunSubscribe = Cakestore.subscribe(()=> 
    console.log('update state', Cakestore.getState())
)
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(13))
const Cakeactions = bindActionCreator({ orderCake, restockCake, orderIcecream, restockIcecream}, Cakestore.dispatch) 
Cakeactions.orderCake() 
Cakeactions.orderCake() 
Cakeactions.orderCake() 
Cakeactions.restockCake(3)
Cakeactions.orderIcecream()
Cakeactions.orderIcecream()
Cakeactions.orderIcecream()
Cakeactions.restockIcecream(1)
CakeunSubscribe();


const Icecreamstore = createStore(IcecreamReducer);
console.log('initial state', Icecreamstore.getState())
const unSubscribe = Icecreamstore.subscribe(()=> 
    console.log('update state', Icecreamstore.getState())
)
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(13))
const actions = bindActionCreator({ orderCake, restockCake, orderIcecream, restockIcecream}, Icecreamstore.dispatch) 
actions.orderCake() 
actions.orderCake() 
actions.orderCake() 
actions.restockCake(3)
actions.orderIcecream()
actions.orderIcecream()
actions.orderIcecream()
actions.restockIcecream(1)
unSubscribe();
