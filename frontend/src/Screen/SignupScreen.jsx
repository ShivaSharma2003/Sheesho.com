import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { UserSignUp } from "../Actions/UserAuthAction";
import Spinner from "../Components/Spinner";
import SuccessContainer from "../Components/SuccessContainer";

const SignupScreen = () => {
  const dispatch = useDispatch();
  const [firstName, setfirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  if (
    firstName === "" &&
    LastName === "" &&
    Email === "" &&
    Password === "" &&
    ConfirmPassword === ""
  ) {
    document.getElementsByClassName("submit_button").disabled = true;
  } else {
    document.getElementsByClassName("submit_button").disabled = false;
  }

  const SignUpUser = useSelector((state) => state.UserSignup);
  const { success, loading, error } = SignUpUser;

  const SignupButtonHandler = (e) => {
    e.preventDefault();
    const Name = firstName.concat(" ", LastName);
    if (!(Password !== ConfirmPassword)) {
      dispatch(UserSignUp(Name, Email, Password));
      setfirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      document.getElementById("Firstname_input").value = "";
      document.getElementById("Lastname_input").value = "";
      document.getElementById("Email_input").value = "";
      document.getElementById("password_input").value = "";
      document.getElementById("confirmPassword_input").value = "";
    } else {
      alert("password not matched");
    }
  };

  return (
    <>
      <div className="w-screen grid place-items-center bg-pink-100 h-screen">
        {loading ? (
          <Spinner></Spinner>
        ) : success ? (
          <SuccessContainer />
        ) : (
          <form
            action="submit"
            className="border-2 border-gray-200 shadow-md rounded w-fit h-fit bg-white p-3"
          >
            <h4 className="mx-2 font-bold text-pink-600 ">
              Create New Account
            </h4>
            {error && (
              <p className="text-gray-500 mx-2 mb-0 font-bold text-xs text-center">
                Email address already exist. Try Login
              </p>
            )}
            <div className="flex flex-wrap flex-row mb-4 mt-3 w-full ">
              <div className="flex flex-col mx-2">
                <label
                  htmlFor="Firstname_input"
                  className="text-gray-400 font-bold text-xs mb-1 "
                >
                  First Name
                </label>
                <input
                  type="text"
                  required
                  id="Firstname_input"
                  className="border-2 rounded border-gray-200 shadow px-2 py-1 focus:outline-none placeholder:text-gray-300 placeholder:font-semibold font-medium text-gray-500 text-sm h-10"
                  placeholder="jane"
                  onChange={(e) => setfirstName(e.target.value)}
                />
              </div>
              <div className="flex flex-col mx-2">
                <label
                  htmlFor="Lastname_input"
                  className="text-gray-400 font-bold text-xs mb-1 "
                >
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  id="Lastname_input"
                  className="border-2 border-gray-200 shadow rounded px-2 py-1 focus:outline-none placeholder:text-gray-300 placeholder:font-semibold font-medium text-gray-500 text-sm h-10"
                  placeholder="dey"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
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
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-gray-200 shadow rounded py-1 px-2 focus:outline-none placeholder:text-gray-300 placeholder:font-semibold font-medium text-gray-500 text-sm h-10"
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
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 border-gray-200 shadow rounded py-1 px-2  focus:outline-none placeholder:text-gray-300 placeholder:font-semibold font-medium text-gray-500 text-sm h-10"
              />
            </div>
            <div className="flex flex-col mx-2 my-4">
              <label
                htmlFor="confirmPassword_input"
                className="text-gray-400 font-bold text-xs mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                required
                id="confirmPassword_input"
                placeholder="**********"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border-2 border-gray-200 shadow rounded py-1 px-2 focus:outline-none placeholder:text-gray-300 placeholder:font-semibold font-medium text-gray-500 text-sm h-10"
              />
            </div>
            <div className="relative h-4 mx-3">
              {ConfirmPassword === "" ? (
                <></>
              ) : Password !== ConfirmPassword ? (
                <p className=" text-red-600 font-bold text-xs absolute bottom-0">
                  Password not Matched
                </p>
              ) : (
                <p className=" text-green-600 font-bold text-xs absolute bottom-0">
                  Password Matched
                </p>
              )}
            </div>
            <div className="flex flex-wrap justify-between items-center mx-2">
              <button
                type="button"
                value="submit"
                onClick={SignupButtonHandler}
                className="border-2 submit_button shadow bg-pink-500 hover:bg-pink-600 px-2 py-1 rounded-md text-white font-semibold cursor-pointer"
              >
                Create New Account
              </button>
              <p className="text-sm text-gray-400 font-semibold m-0">
                Already a customer.{" "}
                <LinkContainer to={"/login"}>
                  <strong className="text-gray-500 cursor-pointer font-bold">
                    Login Here
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

export default SignupScreen;
