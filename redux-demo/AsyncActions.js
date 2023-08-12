const { default: axios } = require('axios');
const redux = require('redux');
// const axios = require('axios');
const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;
const thunkMiddleware = require('redux-thunk').default
const initialState = {
    loading:false,
    users: [],
    error: '',
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

// action functions
const fetchUsersRequest =()=>{
    return{
    type: FETCH_USERS_REQUESTED
    }
}
const fetchUsersSucceeded = (users)=> {
    return{
        type: FETCH_USERS_SUCCEEDED,
        payload: users
    }
}
const fetchUsersFailure = (error)=> {
    return{
        type: FETCH_USERS_FAILED,
        payload: error
    }
}
// reducers
const reducers = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUESTED:
            return{
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCEEDED:
            return{
                ...state,
                loading: false,
                users: action.payload
            }
        case FETCH_USERS_FAILED:
            return{
                ...state,
                loading: false,
                error:action.payload
            }
    }
}

// action creators
const fetchUsers = () => {
    return function (dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            //resource data for the user
            const users = response.data.map((user) => user.name)
            dispatch(fetchUsersSucceeded(users))
        })
        .catch((error)=>{
            dispatch(fetchUsersFailure(error.message))
        })

    }
}
// store 
const store = createStore(reducers, applyMiddleware(thunkMiddleware))
store.subscribe(()=> {
    console.log(store.getState())
})
store.dispatch(fetchUsers())

