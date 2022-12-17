import {
  Add_ShippingAddress_Fails,
  Add_ShippingAddress_Request,
  Add_ShippingAddress_Success,
} from "../Constant/ShippingConstant";

export const ShippingAddressReducer = (
  state = {},
  action
) => {
  switch (action.type) {
    case Add_ShippingAddress_Request:
      return { loading: true };
    case Add_ShippingAddress_Success:
      return { loading: false, ShippingAddress: action.payload, success: true };
    case Add_ShippingAddress_Fails:
      return { loading: false, success: false, error: action.error };
    default:
      return state;
  }
};

