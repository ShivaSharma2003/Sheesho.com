import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
  ProductFetchReducer,
  SingleProductReducer,
} from "./Reducers/ProductFetchReducer";
import { CartReducer } from "./Reducers/CartReducer";
import {
  UserDetailsReducer,
  UserLoginReducer,
  UserSignUpReducer,
} from "./Reducers/UserAuthReducer";
import { ShippingAddressReducer } from "./Reducers/ShippingAddressReducer";
import {PaymentDetailsReducer} from './Reducers/PaymentDetailReducer'

const CartItemFromStorage = localStorage.getItem("CartItem")
  ? JSON.parse(localStorage.getItem("CartItem"))
  : [];

const LoggedinUserFromStorage = localStorage.getItem("loggedInUser")
  ? JSON.parse(localStorage.getItem("loggedInUser"))
  : {};

const ShippingAddressFromStrorage = localStorage.getItem("ShippingAddress")
  ? JSON.parse(localStorage.getItem("ShippingAddress"))
  : {};

const reducer = combineReducers({
  Product: ProductFetchReducer,
  SingleProduct: SingleProductReducer,
  Cart: CartReducer,
  UserSignup: UserSignUpReducer,
  Userlogin: UserLoginReducer,
  UserDetails: UserDetailsReducer,
  ShippingAddress: ShippingAddressReducer,
  PaymentDetails : PaymentDetailsReducer,
});

const InitialState = {
  Cart: { CartItem: CartItemFromStorage },
  UserLogin: { LoggedInUser: LoggedinUserFromStorage },
  ShippingAddress: { ShippingAddress: ShippingAddressFromStrorage },
};

const middleware = [thunk];

const store = configureStore(
  { reducer },
  InitialState,
  composeWithDevTools(applyMiddleware(middleware))
);

export default store;
