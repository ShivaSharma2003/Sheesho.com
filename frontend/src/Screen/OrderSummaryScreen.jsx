import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PlaceOrder } from "../Actions/PlaceOrderAction";
import Spinner from "../Components/Spinner";
import Error from "../Components/Error";

const OrderSummaryScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux States -------------------------------------------------------
  const AccountState = useSelector((state) => state.Userlogin);
  const CartState = useSelector((state) => state.Cart);
  const ShippingDetailsState = useSelector((state) => state.ShippingAddress);
  const PaymentDetailsState = useSelector((state) => state.PaymentDetails);
  const placeOrder = useSelector((state) => state.PlaceOrder);

  // Destructuring State ------------------------------------------------
  const { success } = AccountState;
  const { ShippingAddress } = ShippingDetailsState;
  const { PaymentDetails } = PaymentDetailsState;
  const { CartItems, Quantity } = CartState;
  const { OrderPlaced, loading, error } = placeOrder;

  // UseEffect Hook -----------------------------------
  useEffect(() => {
    if (!success) {
      navigate("/login");
    }
    if (success && CartItems.length === 0) {
      navigate("/");
    }

    if (!ShippingAddress) {
      navigate("/checkout/payment");
    }
    if (OrderPlaced) {
      navigate("/checkout/greetings");
    }
  }, [CartItems, OrderPlaced, ShippingAddress, navigate, success]);

  // Place Order Button Handler--------------------------------------------
  const PlaceOrderButtonHandler = (e) => {
    e.preventDefault();
    console.log("place order button clicked");
    dispatch(
      PlaceOrder(
        CartItems,
        ShippingAddress.Mobilenumber,
        ShippingAddress.HouseNumber,
        ShippingAddress.Street,
        ShippingAddress.Pincode,
        ShippingAddress.City,
        ShippingAddress.State,
        ShippingAddress.Landmark,
        PaymentDetails.PaymentMethod,
        PaymentDetails.TotalPrice,
        PaymentDetails.Tax,
        PaymentDetails.PackagingCharge,
        PaymentDetails.DeliveryCharge,
        PaymentDetails.Discount,
        ShippingAddress.BillerName
      )
    );
  };

  return (
    <>
      {!success ? (
        navigate("/login")
      ) : (
        <>
          {loading ? (
            <Spinner></Spinner>
          ) : (
            error && <Error message={error.message} />
          )}
          <>
            <div className="flex w-full h-full flex-wrap justify-center align-top p-4">
              <div className="border-r-2 w-5/12 mx-3 px-4 py-3 flex flex-col">
                <h5 className="text-lg text-gray-700 font-bold ">
                  Product Details
                </h5>
                <div className=" h-full py-2 border-t-2">
                  {CartItems.map((product) => (
                    <>
                      <div className="border-2 shadow-md p-2">
                        <div className="flex flex-row border-b-2 pb-2">
                          <div className="mx-2">
                            <img
                              src={product.images}
                              alt=""
                              className="h-24 w-24 object-fill"
                            />
                          </div>
                          <div>
                            <h5 className="text-gray-600 text-lg font-bold">
                              {product.name}
                            </h5>
                            <h5 className="text-gray-600 text-base font-semibold">
                              Size : Free Size
                            </h5>

                            <h5 className="text-lg text-gray-600 font-bold">
                              ${product.price.toFixed(2)}
                            </h5>
                          </div>
                        </div>
                        <div className="flex w-full justify-end m-0 pt-2">
                          <h5 className="text-right font-bold text-sm text-pink-500">
                            Delivery Charge :{" "}
                            {(PaymentDetails.DeliveryCharge / Quantity).toFixed(
                              2
                            )}{" "}
                            $
                          </h5>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
                <h5 className="text-lg text-gray-700 font-bold mt-2">
                  Delivery Address
                </h5>
                <div className=" h-full py-2 border-t-2">
                  <div className="border-2 shadow-md p-2 flex flex-col ">
                    <div className="my-2">
                      <h5 className="text-gray-600 text-lg font-bold m-0">
                        {ShippingAddress.BillerName}
                      </h5>
                    </div>
                    <div className="px-2">
                      <h5 className="text-gray-600 text-base font-semibold m-0">
                        {ShippingAddress.HouseNumber},&nbsp;{" "}
                        {ShippingAddress.Street},&nbsp;
                        {ShippingAddress.Landmark},&nbsp;
                        {ShippingAddress.Pincode}
                      </h5>
                      <h5 className="text-gray-600 text-base font-medium m-0">
                        {ShippingAddress.City} , {ShippingAddress.State}
                      </h5>
                    </div>
                    <div className="my-2 px-2">
                      <h5 className="text-gray-600 text-lg font-bold m-0">
                        {ShippingAddress.Mobilenumber}
                      </h5>
                    </div>
                  </div>
                </div>
                <h5 className="text-lg text-gray-700 font-bold mt-2">
                  Payment Method
                </h5>
                <div className=" h-full w-full py-1 border-2 px-4 shadow flex flex-row justify-between items-center">
                  <h5 className="text-gray-600 text-lg font-bold">
                    {PaymentDetails.PaymentMethod}
                  </h5>
                  {PaymentDetails.PaymentMethod === "cash" ? (
                    <i className="fa-solid fa-sack-dollar fa-lg text-green-600"></i>
                  ) : (
                    <i className="fa-solid fa-credit-card fa-lg text-blue-600"></i>
                  )}
                </div>
              </div>
              <div className="flex flex-col py-3 w-3/12">
                <h5 className="text-lg text-gray-700 font-bold">
                  Price Details
                </h5>
                <div className="flex flex-col border-b-2">
                  {CartItems.map((product) => (
                    <div className="flex flex-row justify-between">
                      <h5 className="text-gray-600 text-sm font-bold">
                        {product.name} :{" "}
                      </h5>
                      <h5 className="text-sm text-gray-600 font-bold">
                        ${product.price.toFixed(2)}
                      </h5>
                    </div>
                  ))}
                  <div className="flex flex-row justify-between">
                    <h5 className="text-gray-600 text-sm font-bold">
                      Packaging Fees :
                    </h5>
                    <h5 className="text-sm text-gray-600 font-bold">
                      ${PaymentDetails.PackagingCharge.toFixed(2)}
                    </h5>
                  </div>
                  <div className="flex flex-row justify-between">
                    <h5 className="text-gray-600 text-sm font-bold">Tax :</h5>
                    <h5 className="text-sm text-gray-600 font-bold">
                      ${PaymentDetails.Tax.toFixed(2)}
                    </h5>
                  </div>
                  <div className="flex flex-row justify-between">
                    <h5 className="text-gray-600 text-sm font-bold">
                      Delivery Fees :{" "}
                    </h5>
                    <h5 className="text-sm text-gray-600 font-bold">
                      ${PaymentDetails.DeliveryCharge.toFixed(2)}
                    </h5>
                  </div>
                  <div className="flex flex-row justify-between">
                    <h5 className="text-sm text-pink-500 font-bold">
                      Discount :{" "}
                    </h5>
                    <h5 className="text-sm text-pink-500 font-bold">
                      ${PaymentDetails.Discount.toFixed(2)}
                    </h5>
                  </div>
                </div>
                <div className="flex justify-between my-2">
                  <h4 className="text-lg text-gray-700 font-bold">
                    Order Total
                  </h4>
                  <h4 className="text-lg text-gray-700 font-bold">
                    ${PaymentDetails.TotalPrice.toFixed(2)}
                  </h4>
                </div>

                <button
                  className="h-12 w-full bg-pink-500 hover:bg-pink-600 text-lg font-semibold text-white rounded"
                  onClick={PlaceOrderButtonHandler}
                >
                  Place Order
                </button>
              </div>
            </div>
          </>
        </>
      )}
    </>
  );
};

export default OrderSummaryScreen;
