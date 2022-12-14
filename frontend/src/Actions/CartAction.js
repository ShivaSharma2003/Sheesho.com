import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constant/CartConstant";

export const AddtoCart = (data) => (dispatch, getstate) => {
  dispatch({
    type: ADD_TO_CART,
    payload: data,
  });
  const {
    Cart: { CartItems },
  } = getstate();

  localStorage.setItem("CartItem", JSON.stringify(CartItems));
};

export const RemoveFromCart = (id) => (dispatch, getstate) => {
  dispatch({ type: REMOVE_FROM_CART, payload: id });

  const {
    Cart: { CartItems },
  } = getstate();

  localStorage.setItem("CartItem", JSON.stringify(CartItems));
};
