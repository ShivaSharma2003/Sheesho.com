import React from "react";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

const Success = () => {
  const SignUpUser = useSelector((state) => state.UserSignup);
  const { User } = SignUpUser;
  return (
    <>
      <div className="w-fit h-20 border-2 shadow-lg bg-white grid place-items-center px-3">
        <h5 className="font-bold text-md text-gray-600">
          We've just send a verification link to{" "}
          <span className=" text-pink-500 underline cursor-pointer">
            {User.email}
          </span>{" "}
          to verify you email address.
        </h5>
        <p className="text-sm font-bold text-gray-600">
          or{" "}
          <LinkContainer to={"/login"}>
            <strong className=" cursor-pointer text-pink-500 font-bold text-sm">
              Click here
            </strong>
          </LinkContainer>{" "}
          to login
        </p>
      </div>
    </>
  );
};

export default Success;
