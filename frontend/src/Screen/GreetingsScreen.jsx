import React from "react";
import { LinkContainer } from "react-router-bootstrap";

const GreetingsScreen = () => {
  return (
    <>
      <div className="h-full grid content-center justify-items-center  w-screen">
        <div className="border-2 flex-col border-pink-500 shadow-2xl w-3/4 h-fit py-2 text-pink-500 flex justify-center items-center rounded-lg">
          <h4>Thanks For Shopping</h4>
          <h6>
            You can check your Orders
            <LinkContainer to="/orders">
              <strong className="text-pink-700 cursor-pointer"> Here</strong>
            </LinkContainer>
            .
          </h6>
        </div>
      </div>
    </>
  );
};

export default GreetingsScreen;
