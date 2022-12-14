import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constant/CartConstant";

export const CartReducer = (state = { CartItems: [], Quantity: 0 }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const Item = action.payload;
      const existItem = state.CartItems.find((x) => x._id === Item._id);
      if (existItem) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          CartItems: [...state.CartItems, Item],
          Quantity: state.CartItems.length + 1,
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        CartItems: state.CartItems.filter((x) => x._id !== action.payload),
        Quantity: state.CartItems.length - 1,
      };
    default:
      return state;
  }
};
