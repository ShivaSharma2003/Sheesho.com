import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PriceContainer = () => {
  const product = useSelector((state) => state.Cart);
  const user = useSelector((state) => state.Userlogin);
  const { success } = user;
  const { CartItems } = product;
  const navigate = useNavigate();

  const ProceedButtonHandler = (e) => {
    e.preventDefault();
    if (success) {
      navigate("/checkout/address");
    } else {
      navigate('/login')
    }
  };

  return (
    <>
      <div className="shadow-md p-2 m-2 h-56 w-2/5 border-2">
        <h4 className="text-gray-600">Price Details</h4>
        <div className="flex justify-between border-b-2">
          <h5 className="text-gray-500">
            ${CartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
          </h5>
          <h5 className="text-gray-500">'</h5>
        </div>
        <div className="flex justify-between my-2">
          <h4 className="text-gray-600">Order Total</h4>
          <h4 className="text-gray-600">
            ${CartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
          </h4>
        </div>
        <div className="flex items-center justify-center h-10 w-full">
          <button
            className="bg-pink-600 h-full w-full text-white font-medium text-xl rounded-md"
            onClick={ProceedButtonHandler}
          >
            Click to Proceed
          </button>
        </div>
      </div>
    </>
  );
};

export default PriceContainer;
