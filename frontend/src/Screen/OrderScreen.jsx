import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OrderScreen = () => {
  // Hooks initialized
  const navigate = useNavigate();
  // Redux States -------------------------------------------------------
  const AccountState = useSelector((state) => state.Userlogin);
  const placeOrder = useSelector((state) => state.PlaceOrder);

  // Destructuring State ------------------------------------------------
  const { success } = AccountState;
  const { OrderPlaced } = placeOrder;
  
  useEffect(() => {
    if (!success) {
      navigate("/login");
    }
  }, [OrderPlaced, navigate, success]);

  return (
    <>
    
    </>
  );
};

export default OrderScreen;
