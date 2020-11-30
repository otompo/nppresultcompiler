import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer,
 } from './reducers/userReducers'
import {pollingResultsCreateReducer, pollingResultsListReducer, resultsListMyReducer } from './reducers/pollingResultReducer'


 
const reducer= combineReducers({
    
    // USER LOGIN
    userLogin:userLoginReducer,
    // USER REGISTER
    userRegister:userRegisterReducer,
    // USER DETAILS
    userDetails:userDetailsReducer,
    // USER UPDATE PROFILE
    userUpdateProfile:userUpdateProfileReducer,
   
    // USER LIST REDUCER
    userList: userListReducer,
    // USER DELETE REDUCER
    userDelete: userDeleteReducer,
    // USER LIST REDUCER
    userUpdate: userUpdateReducer,

    // POLLING STATION CREATE REDUCER
    pollingResultsCreate: pollingResultsCreateReducer,
    // POLLING STATION LIST REDUCER
    pollingResultsList: pollingResultsListReducer,
       
    resultsListMy:resultsListMyReducer
    

})

const cartItemsFormStorage = localStorage.getItem('cartItems') 
? JSON.parse(
    (localStorage.getItem('cartItems')) 
)
: []

const userInfoFromStorage = localStorage.getItem('userInfo') 
? JSON.parse(
    (localStorage.getItem('userInfo')) 
)
: null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') 
? JSON.parse(
    (localStorage.getItem('shippingAddress')) 
)
: {}


const paymentMethodFromStorage = localStorage.getItem('paymentMethod') 
? JSON.parse(
    (localStorage.getItem('paymentMethod')) 
)
: {}




const initialState = {
    cart: {
        cartItems: cartItemsFormStorage,
        shippingAddress:shippingAddressFromStorage,
        paymentMethod:paymentMethodFromStorage
    },
    userLogin : {userInfo: userInfoFromStorage}
}
const middleware = [thunk]

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))

export default store