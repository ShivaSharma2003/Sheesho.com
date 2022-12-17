import {
  Add_PaymentDetails_Fails,
  Add_PaymentDetails_Succes,
  Add_PaymentDetails_request,
} from "../Constant/PaymentDetailsConstant";

export const AddPaymentDetails =
  (paymentMethod, tax, deliveryFees, PackagingFees, TotalPrice, Discount) =>
  (dispatch) => {
    try {
      dispatch({ type: Add_PaymentDetails_request });
      const PaymentDetails = {
        PaymentMethod: paymentMethod,
        Tax: tax,
        DeliveryCharge: deliveryFees,
        PackagingCharge: PackagingFees,
        TotalPrice: TotalPrice,
        Discount: Discount,
      };

      dispatch({ type: Add_PaymentDetails_Succes, payload: PaymentDetails });
    } catch (error) {
      dispatch({ type: Add_PaymentDetails_Fails, payload: error });
    }
  };
