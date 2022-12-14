import React from "react";
import { useDispatch } from "react-redux";
import { RemoveFromCart } from "../Actions/CartAction";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const RemoveButtonHandler = (e) => {
    e.preventDefault()
    dispatch(RemoveFromCart(product._id));
  };

  return (
    <>
      <div className="h-56 border-2 shadow-md w-full flex px-4 py-2 my-2">
        <div>
          <img
            src={product.images}
            alt=""
            className="h-40 w-40 object-fill border-2 rounded-lg"
          />
        </div>
        <div className="mx-2 w-full">
          <div className="flex justify-between">
            <h5 className="text-gray-700 h-7 leading-7 overflow-hidden">{product.name}</h5>
            <button
              className="text-center text-lg flex items-center text-pink-600"
              onClick={RemoveButtonHandler}
            >
              REMOVE
            </button>
          </div>
          <div>
            <h6 className="text-gray-600">Size : Free Size</h6>
            <h6 className="text-gray-600">Brand : {product.brand}</h6>
            <h6 className="text-gray-600">Color : {product.color}</h6>
            <h6 className="text-gray-700">Price : ${product.price}</h6>
          </div>
          <div className="flex justify-between border-t-2 my-4 py-2">
            <h6 className="text-gray-600">Model : {product.model}</h6>
            <h6 className="text-gray-600">Free Delivery by Sheesho</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
