import {
  Place_Order_Request,
  Place_Order_Success,
  Place_Order_Fails,
} from "../Constant/PlaceOrderConstant";

export const PlaceOrderReducer = (
  state = {},
  action
) => {
  switch (action.type) {
    case Place_Order_Request:
      return { loading: true };
    case Place_Order_Success:
      return { loading: false, Order: action.payload, OrderPlaced: true };
    case Place_Order_Fails:
      return { loading: false, error: action.error, OrderPlaced: false };
    default:
      return state;
  }
};

