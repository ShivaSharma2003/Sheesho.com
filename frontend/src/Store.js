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

const CartItemFromStorage = localStorage.getItem("CartItem")
  ? JSON.parse(localStorage.getItem("CartItem"))
  : [];

const LoggedinUserFromStorage = localStorage.getItem("loggedInUser")
  ? JSON.parse(localStorage.getItem("loggedInUser"))
  : {};

const reducer = combineReducers({
  Product: ProductFetchReducer,
  SingleProduct: SingleProductReducer,
  Cart: CartReducer,
  UserSignup: UserSignUpReducer,
  Userlogin: UserLoginReducer,
  UserDetailsReducer: UserDetailsReducer,
});

const InitialState = {
  Cart: { CartItem: CartItemFromStorage },
  UserLogin: { LoggedInUser: LoggedinUserFromStorage },
};

const middleware = [thunk];

const store = configureStore(
  { reducer },
  InitialState,
  composeWithDevTools(applyMiddleware(middleware))
);

export default store;
