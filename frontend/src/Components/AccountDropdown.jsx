import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

const AccountDropdown = () => {
  const navigate = useNavigate();

  const SignUpButtonHandler = () => {
    navigate("/signup");
  };

  const AccountDropdownHandler = () => {
    const dropdownAvatar = document.getElementById("dropdownAvatar");
    if (dropdownAvatar.classList.contains("hidden")) {
      dropdownAvatar.classList.remove("hidden");
    } else {
      dropdownAvatar.classList.add("hidden");
    }
  };
  return (
    <>
      <div className="flex-col relative">
        <button
          id="dropdownUserAvatarButton"
          class="rounded-full md:mr-0 hover:text-pink-600  text-gray-500 cursor-pointer mx-4"
          type="button"
          onClick={() => AccountDropdownHandler()}
        >
          <i class="fa-regular fa-user text-2xl" aria-hidden="true" />
          <h6>Account</h6>
        </button>
        <div
          id="dropdownAvatar"
          class="z-10 w-64  bg-white rounded border-2 absolute hidden"
        >
          <div class="p-3 pb-2 text-sm text-gray-900 border-b-2 shadow-sm text-left">
            <div className="font-medium truncate text-lg ">Hello User</div>
            <div class="font-semibold truncate text-gray-500 text-xs">
              To access your orders
            </div>
            <button
              className="w-full bg-pink-500 h-12 text-center rounded-md my-2 text-white font-semibold text-lg"
              onClick={SignUpButtonHandler}
            >
              Sign Up
            </button>
          </div>
          <LinkContainer to={"/orders"}>
            <div className="p-3 text-xl font-medium text-gray-500 cursor-pointer">
              <i class="fa fa-shopping-bag" aria-hidden="true" />
              &nbsp; My Orders
            </div>
          </LinkContainer>
        </div>
      </div>
    </>
  );
};

export default AccountDropdown;
