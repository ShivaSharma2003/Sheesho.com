import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { UserLogin } from "../Actions/UserAuthAction";
import { Navigate } from "react-router-dom";
import Spinner from "../Components/Spinner";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const User = useSelector((state) => state.Userlogin);
  const { loading, success, error } = User;

  const LoginButtonHandler = (e) => {
    e.preventDefault();
    dispatch(UserLogin(Email, Password));
    setEmail("");
    setPassword("");
    document.getElementById("Email_input").value = "";
    document.getElementById("password_input").value = "";
  };

  return (
    <>
      <div className="w-screen grid place-items-center bg-pink-100 h-screen">
        {loading ? (
          <Spinner />
        ) : success ? (
          <Navigate to="/" replace={true} />
        ) : (
          <form
            action="submit"
            className="border-2 border-gray-200 shadow-md rounded h-fit bg-white p-3 w-96"
          >
            <h4 className="mx-2 font-bold text-pink-600 ">
              Login to Your Account
            </h4>
            <div className="flex flex-col mx-2 my-4">
              <label
                htmlFor="Email_input"
                className="text-gray-400 font-bold text-xs mb-1  "
              >
                Email
              </label>
              <input
                type="email"
                required
                id="Email_input"
                placeholder="jane@gmail.com"
                className="border-2 border-gray-200 shadow rounded py-1 px-2 focus:outline-none placeholder:text-gray-300 placeholder:font-semibold font-medium text-gray-500 text-sm h-10"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col mx-2 my-4">
              <label
                htmlFor="password_input"
                className="text-gray-400 font-bold text-xs mb-1"
              >
                Password
              </label>
              <input
                type="password"
                required
                id="password_input"
                placeholder="**********"
                className="border-2 border-gray-200 shadow rounded py-1 px-2  focus:outline-none placeholder:text-gray-300 placeholder:font-semibold font-medium text-gray-500 text-sm h-10"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && (
              <p className="text-gray-500 mx-3 mb-2 font-bold text-xs">
                Incorrect Email or Password
              </p>
            )}
            <div className="flex flex-wrap justify-between items-center mx-2 w-full ">
              <button
                type="button"
                value="submit"
                className="border-2 shadow bg-pink-500 hover:bg-pink-600 px-5 py-1 rounded-md text-white font-semibold "
                onClick={LoginButtonHandler}
              >
                Login
              </button>
              <LinkContainer to={"/recovery"}>
                <strong className="cursor-pointer font-bold text-pink-500 hover:text-pink-700 text-xs mx-2 ">
                  Forgot Passsword?
                </strong>
              </LinkContainer>
            </div>
            <div className="my-3">
              <p className="text-sm text-gray-400 font-semibold text-center">
                Not a customer.{" "}
                <LinkContainer to={"/signup"}>
                  <strong className="text-gray-500 cursor-pointer font-bold">
                    Create new Account
                  </strong>
                </LinkContainer>
              </p>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default LoginScreen;
