import {combineReducers , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension';
import {ProductFetchReducer , SingleProductReducer} from './Reducers/ProductFetchReducer'
import {CartReducer} from './Reducers/CartReducer'


const CartItemFromStorage = localStorage.getItem('CartItem') ? localStorage.getItem('CartItem' , JSON.parse) : []

const reducer = combineReducers({
    Product : ProductFetchReducer,
    SingleProduct : SingleProductReducer,
    Cart : CartReducer,
})

const InitialState = {
    CartItem : CartItemFromStorage
}

const middleware = [thunk]

const store = configureStore(
    {reducer},
    InitialState,
    composeWithDevTools(applyMiddleware(middleware))
)

export default store