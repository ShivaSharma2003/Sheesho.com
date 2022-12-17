import {
  Add_PaymentDetails_Fails,
  Add_PaymentDetails_Succes,
  Add_PaymentDetails_request,
} from "../Constant/PaymentDetailsConstant";

export const PaymentDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case Add_PaymentDetails_request:
      return { loading: true };
    case Add_PaymentDetails_Succes:
      return { loading: false, PaymentDetails: action.payload };
    case Add_PaymentDetails_Fails:
      return { loading: false, error: action.error };
    default:
      return state;
  }
};
