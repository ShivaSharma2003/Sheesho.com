import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../Containers/CartItem";
import PriceContainer from "../Containers/PriceContainer";
import EmptyCart from "../Components/EmptyCart";
import { LinkContainer } from "react-router-bootstrap";

const CartScreen = () => {
  const Cart = useSelector((state) => state.Cart);
  const { CartItems, Quantity } = Cart;
  return (
    <>
      {Quantity === 0 && <EmptyCart />}
      {Quantity !== 0 && (
        <div className="grid h-fit w-full place-items-center my-4">
          <div className="my-2 h-full w-4/5 border-2 shadow-lg">
            <h5 className=" text-gray-600 font-semibold mb-2 mx-2 mt-2">
              Cart | {Quantity}{" "}
              {Quantity > 1 ? <span>Items</span> : <span>Item</span>}
            </h5>
            <div className="p-2 flex w-full h-full">
              <div className=" w-3/5 h-full">
                {CartItems.map((item) => (
                  <CartItem product={item}></CartItem>
                ))}
              </div>
              <PriceContainer product={CartItems} />
            </div>
          </div>
          <LinkContainer to={"/"}>
            <button className="h-10 w-48 border-2 my-2 border-pink-500 text-pink-500 rounded-sm text-center">
              Veiw More Products
            </button>
          </LinkContainer>
        </div>
      )}
    </>
  );
};

export default CartScreen;
