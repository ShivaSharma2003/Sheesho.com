import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { AddPaymentDetails } from "../Actions/PaymentDetailsAction";

const PaymentScreen = () => {
  // Initializing Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Price Details -----------------------------------
  const Tax = Math.random() * 50;
  const DeliveryFees = Math.random() * 50;
  const PackagingFees = Math.random() * 50;
  const Discount = Math.random() * 10;

  //   Payment Method
  const [PaymentMethod, setPaymentMethod] = useState();

  // Redux States of Cart Product-----------------------
  const product = useSelector((state) => state.Cart);
  const { CartItems } = product;

  // Redux States of Logged In User-----------------------
  const user = useSelector((state) => state.Userlogin);
  const { success } = user;

  // Redux States of Shipping Address-------------------
  const Address = useSelector((state) => state.ShippingAddress);
  const { ShippingAddress } = Address;

  // Total Price -------------------------------------
  const TotalPrice = CartItems.reduce(
    (acc, item) =>
      acc + item.price + Tax + DeliveryFees + PackagingFees - Discount,
    0
  )

  // UseEffect Hook -----------------------------------
  useEffect(() => {
    if (!success) {
      navigate("/login");
    }
    if (success && CartItems.length === 0) {
      navigate("/");
    }

    if (!ShippingAddress) {
      navigate("/checkout/address");
    }
  }, [CartItems, ShippingAddress, navigate, success]);

  //   Cash Method Proceed Button Handler --------------------
  const CashMethodProceedButtonHandler = (e) => {
    e.preventDefault();
    dispatch(
      AddPaymentDetails(
        PaymentMethod,
        Tax,
        DeliveryFees,
        PackagingFees,
        TotalPrice,
        Discount
      )
    );
    navigate("/checkout/summary");
  };

  //   Stripe Method Proceed Button Handler --------------------
  const StripeMethodProceedButtonHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="flex w-full h-full flex-wrap justify-center align-top p-4">
        <div className="border-r-2 w-5/12 mx-3 px-4 py-3 flex flex-col">
          <div className="w-full justify-between flex flex-row">
            <h5 className="text-lg text-gray-700 font-bold ">Payment Method</h5>
            <span className="flex flex-row items-center h-10 ">
              <i class="fa fa-shield text-blue-200 fa-xl" aria-hidden="true" />
              &nbsp;
              <span className="flex flex-col text-xxs font-bold text-gray-400">
                <span>100% SAFE</span>
                <span>PAYMENTS</span>
              </span>
            </span>
          </div>
          <div className=" h-full py-2 border-t-2">
            <div className="h-15 w-full rounded-md px-3 py-2 flex items-center justify-between shadow-md my-2">
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="Cash"
                  className="w-5 h-5 mx-2"
                  value="Cash"
                  onChange={(e) => setPaymentMethod("cash")}
                  checked={PaymentMethod === "cash"}
                />
                <label
                  htmlFor="Cash"
                  className="font-bold text-gray-400 text-lg"
                >
                  Cash On Delivery
                </label>
              </div>
              <div>
                <i class="fa-solid fa-sack-dollar fa-lg text-green-600"></i>
              </div>
            </div>
            <div className="h-15 w-full rounded-md px-3 py-2 flex items-center justify-between shadow-md my-2">
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="stripe"
                  className="w-5 h-5 mx-2"
                  value="Stripe"
                  onChange={(e) => setPaymentMethod("stripe")}
                  checked={PaymentMethod === "stripe"}
                />
                <label
                  htmlFor="stripe"
                  className="font-bold text-gray-400 text-lg "
                >
                  Stripe
                </label>
              </div>
              <div>
                <i class="fa-solid fa-credit-card fa-lg text-blue-600"></i>
              </div>
            </div>
            <div className="h-15 w-full rounded-md px-3 py-2 flex items-center justify-between shadow-md my-2">
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="Walet"
                  className="w-5 h-5 mx-2"
                  value="Stripe"
                  onChange={(e) => setPaymentMethod("walet")}
                  checked={PaymentMethod === "walet"}
                  disabled
                />
                <label
                  htmlFor="Walet"
                  className="font-bold text-gray-400 text-lg"
                >
                  Walet
                </label>
              </div>
              <div>
                <i class="fa-solid fa-wallet fa-lg text-pink-600"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-3 w-3/12">
          <h5 className="text-lg text-gray-700 font-bold">Price Details</h5>
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
                ${PackagingFees.toFixed(2)}
              </h5>
            </div>
            <div className="flex flex-row justify-between">
              <h5 className="text-gray-600 text-sm font-bold">Tax :</h5>
              <h5 className="text-sm text-gray-600 font-bold">
                ${Tax.toFixed(2)}
              </h5>
            </div>
            <div className="flex flex-row justify-between">
              <h5 className="text-gray-600 text-sm font-bold">
                Delivery Fees :{" "}
              </h5>
              <h5 className="text-sm text-gray-600 font-bold">
                ${DeliveryFees.toFixed(2)}
              </h5>
            </div>
            <div className="flex flex-row justify-between">
              <h5 className="text-sm text-pink-500 font-bold">Discount : </h5>
              <h5 className="text-sm text-pink-500 font-bold">
                ${Discount.toFixed(2)}
              </h5>
            </div>
          </div>
          <div className="flex justify-between my-2">
            <h4 className="text-lg text-gray-700 font-bold">Order Total</h4>
            <h4 className="text-lg text-gray-700 font-bold">${TotalPrice.toFixed(2)}</h4>
          </div>

          {PaymentMethod === "cash" && (
            <button
              className="h-12 w-full bg-pink-500 hover:bg-pink-600 text-lg font-semibold text-white rounded"
              onClick={CashMethodProceedButtonHandler}
            >
              Continue
            </button>
          )}
          {PaymentMethod === "stripe" && (
            <button
              className="h-12 w-full bg-pink-500 hover:bg-pink-600 text-lg font-semibold text-white rounded"
              onClick={StripeMethodProceedButtonHandler}
            >
              Proceed to pay
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentScreen;
