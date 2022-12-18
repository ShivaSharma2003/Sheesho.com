import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { UserLogout } from "../Actions/UserAuthAction";
import {RemoveShippingAddress} from '../Actions/ShippingAddressAction'

const AccountDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.Userlogin);
  const { success, LoggedInUser } = user;

  const SigninButtonHandler = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const LogoutButtonHandler = () => {
    dispatch(UserLogout());
    dispatch(RemoveShippingAddress())
    navigate("/login");
  };

  const AccountDropdownHandler = () => {
    const dropdownAvatar = document.getElementById("dropdownAvatar");
    dropdownAvatar.classList.toggle("hidden");
  };

  return (
    <>
      <div className="flex-col relative">
        <button
          id="dropdownUserAvatarButton"
          class="rounded-full md:mr-0 hover:text-pink-600  text-gray-500 cursor-pointer mx-4"
          type="button"
          onClick={AccountDropdownHandler}
        >
          <i class="fa-regular fa-user text-2xl" aria-hidden="true" />
          <h6>Account</h6>
        </button>
        <div
          id="dropdownAvatar"
          class="z-10 w-80  bg-white rounded transition-all duration-1000 ease-in-out  border-2 absolute hidden"
        >
          {success ? (
            <>
              <div className="text-gray-900 border-b-2 shadow-md text-left  ">
                <div className="flex w-full justify-between items-center h-20 border-b-2 px-3 hover:bg-gray-200 transition-all duration-500 cursor-default">
                  <div className="flex flex-col">
                    <h6 className="text-sm text-gray-600 font-bold m-0">
                      Your Profile
                    </h6>
                    <p className="text-xs text-gray-600 font-bold truncate m-0">
                      {LoggedInUser.email}
                    </p>
                  </div>
                  <img
                    src={LoggedInUser.ProfileImage}
                    alt=""
                    className=" rounded-full object-fill h-20 w-20 cursor-pointer px-2 py-2"
                  />
                </div>
                <div className="flex w-full justify-between items-center h-10 border-b-2 px-3 hover:bg-gray-200 transition-all duration-500 cursor-default">
                  <h6 className="text-md text-gray-600 font-bold m-0">
                    Your Orders
                  </h6>
                  <i
                    class="fa fa-shopping-bag px-2 py-2 text-gray-600"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="flex w-full justify-between items-center h-10 border-b-2 px-3 hover:bg-gray-200 transition-all duration-500 cursor-default">
                  <h6 className="text-md text-gray-600 font-bold m-0">
                    Settings
                  </h6>
                  <i
                    class="fa fa-gear px-2 py-2 text-gray-600"
                    aria-hidden="true"
                  ></i>
                </div>
                <button
                  className="w-full bg-pink-500 h-12 text-center text-white font-semibold text-lg"
                  onClick={LogoutButtonHandler}
                >
                  Sign Out
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="p-3 pb-2 text-sm text-gray-900 border-b-2 shadow-sm text-left">
                <div className="font-medium truncate text-lg ">Hello User</div>
                <div className="font-semibold truncate text-gray-500 text-xs">
                  To access your orders
                </div>
                <button
                  className="w-full bg-pink-500 h-12 text-center rounded-md my-2 text-white font-semibold text-lg"
                  type="button"
                  onClick={SigninButtonHandler}
                >
                  Sign In
                </button>
              </div>
              <LinkContainer to={"/orders"}>
                <div className="p-3 text-xl font-medium text-gray-500 cursor-pointer">
                  <i class="fa fa-shopping-bag" aria-hidden="true" />
                  &nbsp; My Orders
                </div>
              </LinkContainer>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AccountDropdown;
