import {
  Add_ShippingAddress_Fails,
  Add_ShippingAddress_Request,
  Add_ShippingAddress_Success,
  Remove_shipping_Address
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
    case Remove_shipping_Address:
        return {}
    default:
      return state;
  }
};

