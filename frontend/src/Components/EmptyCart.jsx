import React from "react";
import { LinkContainer } from "react-router-bootstrap";

const EmptyCart = () => {
  return (
    <>
      <div className="h-full w-full grid place-items-center ">
        <div>
          <img
            src="https://images.meesho.com/images/pow/empty-cart.png"
            alt="https://images.meesho.com/images/pow/empty-cart.png"
          />
          <h6 className="text-gray-600 text-center my-2">Your Cart is Empty</h6>
          <LinkContainer to={"/"}>
            <button className="h-10 w-full border-2 my-2 border-pink-500 text-pink-500 rounded-sm text-center">
              Veiw Products
            </button>
          </LinkContainer>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
