const redux = require('redux');
const createStore = redux.createStore
const produce = require('immer').produce
const initialState = {
    name:'vishwas',
    address:{
        street: '123 Main St',
        city:'Boston',
        state: 'MA'
    },
}
const STREET_UPDATED = 'STREET_UPDATED';

function updatestreet(street){
    return{
        type: STREET_UPDATED,
        payload: street
    }
}

const reducer = (state= initialState , action)=>{
    switch(action.type){
        case STREET_UPDATED:
            // return{
            //     ...state,
            //     address:{
            //         ...state.address,
            //         street: action.payload
            //     }
            // }
            return produce(state, (draft) => {
                draft.address.street = action.payload
            })
            default: {
                return state
            }
    }
}
const store = createStore(reducer);
console.log('initial state', store.getState())
const unSubscribe = store.subscribe(()=> {
console.log('updated state', store.getState())
})
store.dispatch(updatestreet('245 richards street'))
unSubscribe();