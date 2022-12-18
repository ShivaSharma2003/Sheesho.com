import {
  Add_ShippingAddress_Fails,
  Add_ShippingAddress_Request,
  Add_ShippingAddress_Success,
  Remove_shipping_Address,
} from "../Constant/ShippingConstant";

export const AddShippingAddress =
  (name, mobileNumber, HomeNumber, street, pincode, city, state, landmark) =>
  (dispatch, getstate) => {
    try {
      dispatch({ type: Add_ShippingAddress_Request });
      const data = {
        BillerName: name,
        Mobilenumber: mobileNumber,
        HouseNumber: HomeNumber,
        Street: street,
        Pincode: pincode,
        City: city,
        State: state,
        Landmark: landmark,
      };
      dispatch({ type: Add_ShippingAddress_Success, payload: data });
      const {
        ShippingAddress: { ShippingAddress },
      } = getstate();
      localStorage.setItem("ShippingAddress", JSON.stringify(ShippingAddress));
    } catch (error) {
      dispatch({ type: Add_ShippingAddress_Fails, error: error });
    }
  };

export const RemoveShippingAddress = () => (dispatch) => {
  dispatch({ type: Remove_shipping_Address });
  localStorage.removeItem("ShippingAddress");
};
