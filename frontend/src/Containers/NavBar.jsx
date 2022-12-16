import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import AccountDropdown from "../Components/AccountDropdown";

const NavBar = () => {
  return (
    <>
      <nav className="h-16 w-screen grid grid-cols-3 border-2 shadow-sm px-4 py-2 bg-white">
        <LinkContainer to={"/"}>
          <div>
            <h1 className="text-pink-600 font-sans font-bold cursor-pointer m-0">
              Sheesho
            </h1>
          </div>
        </LinkContainer>
        <div className="w-full">
          <form
            action="search"
            className="border-2 border-gray-400 rounded-lg py-1 flex items-center px-2 h-10 w-full"
          >
            <i
              class="fa fa-search text-xl text-gray-400"
              aria-hidden="true"
            ></i>
            <input
              type="search"
              className=" outline-none mx-2 font-semibold w-full"
              placeholder="Search"
            />
          </form>
        </div>
        <div className="flex items-center w-full justify-center">
          <AccountDropdown />
          <LinkContainer to={"/cart"}>
            <span className="mx-4 text-center text-gray-500 cursor-pointer">
              <i class="fa fa-shopping-cart text-2xl" aria-hidden="true"></i>
              <h6>Cart</h6>
            </span>
          </LinkContainer>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
