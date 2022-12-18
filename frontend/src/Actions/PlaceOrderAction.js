import {
  Place_Order_Request,
  Place_Order_Success,
  Place_Order_Fails,
} from "../Constant/PlaceOrderConstant";
import axios from "../Axios";

export const PlaceOrder =
  (
    OrderItem,
    MobileNumber,
    HouseNumber,
    StreetName,
    Pincode,
    City,
    State,
    Landmark,
    PaymentMethod,
    TotalPrice,
    TaxPrice,
    PackagingCharge,
    DeliveryCharge,
    Discount,
    BillerName,
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: Place_Order_Request });
      const order = {
        OrderItem: OrderItem,
        MobileNumber: MobileNumber,
        HouseNumber: HouseNumber,
        StreetName: StreetName,
        Pincode: Pincode,
        City: City,
        State: State,
        Landmark: Landmark,
        PaymentMethod: PaymentMethod,
        TotalPrice: TotalPrice,
        TaxPrice: TaxPrice,
        PackagingCharge: PackagingCharge,
        DeliveryCharge: DeliveryCharge,
        Discount: Discount,
        BillerName: BillerName,
      };
      const { Userlogin: {LoggedInUser} } = getState();
      const config = {
        headers: { Authorization: `Bearer ${LoggedInUser.token}` },
      };
      const { data } = await axios.post("/orders/placeorder", order, config);
      dispatch({ type: Place_Order_Success, payload: data });
    } catch (error) {
      dispatch({ type: Place_Order_Fails, error: error });
    }
  };
