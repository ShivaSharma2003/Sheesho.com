import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AddShippingAddress } from "../Actions/ShippingAddressAction";

const AddressScreen = () => {
  // Hooks initialized --------------------------
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Contact Input-----------------------------------
  const [Name, setName] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");

  // Address Input-----------------------------------
  const [HouseNumber, setHouseNumber] = useState("");
  const [StreetName, setStreetName] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [pincode, setpincode] = useState("");
  const [Landmark, setLandmark] = useState("");

  // Redux States of Logged In User-----------------------
  const user = useSelector((state) => state.Userlogin);
  const { success } = user;

  // Redux States of Cart Product-----------------------
  const product = useSelector((state) => state.Cart);
  const { CartItems } = product;

  // Redux States of Shipping Address-------------------
  const Address = useSelector((state) => state.ShippingAddress);
  const { ShippingAddress } = Address;

  // Total Price -------------------------------------
  const TotalPrice = CartItems.reduce(
    (acc, item) => acc + item.price,
    0
  ).toFixed(2);

  // UseEffect Hook -----------------------------------
  useEffect(() => {
    if (!success) {
      navigate("/login");
    }
    if (success && CartItems.length === 0) {
      navigate("/");
    }

    if (ShippingAddress) {
      navigate("/checkout/payment");
    }
  }, [CartItems, ShippingAddress, navigate, success]);

  // Save Shipping Address Button Handler ---------------
  const SaveAddressButtonHandler = (e) => {
    e.preventDefault();
    // dispatching action function -----------------------
    dispatch(
      AddShippingAddress(
        Name,
        MobileNumber,
        HouseNumber,
        StreetName,
        pincode,
        City,
        State,
        Landmark
      )
    );

    // Reset Values of Inputs ----------------------
    document.getElementById("input_name").value = "";
    document.getElementById("input_mobile").value = "";
    document.getElementById("input_house").value = "";
    document.getElementById("Road_Name").value = "";
    document.getElementById("Pincode").value = "";
    document.getElementById("City").value = "";
    document.getElementById("State").value = "";
    document.getElementById("Landmark").value = "";
    // Reset Shipping Address States
    setName("");
    setMobileNumber("");
    setHouseNumber("");
    setCity("");
    setLandmark("");
    setState("");
    setStreetName("");
    setpincode("");
  };

  if (Address.success) {
    navigate("/checkout/payment");
  }

  return (
    <>
      <div className="flex w-full h-full flex-wrap justify-center align-top p-4">
        <div className="border-r-2 w-5/12 mx-3 px-4 py-3 flex flex-col">
          <h5 className="text-lg text-gray-700 font-bold ">
            Select Delivery Address
          </h5>
          <div className="border-2 shadow-sm rounded-md h-full py-2 px-4">
            <form className="flex flex-col">
              <div className="flex w-full h-10 items-center">
                <i
                  className="fa fa-phone mr-2 fa-lg text-pink-500"
                  aria-hidden="true"
                />
                <h3 className="text-xl text-gray-600 font-bold m-0">
                  Contact Details
                </h3>
              </div>
              <input
                type="text"
                id="input_name"
                name="input_name"
                required
                placeholder="Name"
                className="h-10 placeholder:text-lg placeholder:font-semibold border-b-2 shadow-sm  my-2 px-2 py focus:outline-none text-md font-semibold text-gray-500"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="tel"
                name="input_mobile"
                id="input_mobile"
                required
                placeholder="Mobile Number"
                className="h-10 placeholder:text-lg placeholder:font-semibold border-b-2 shadow-sm  my-2 px-2 py focus:outline-none text-md font-semibold text-gray-500"
                onChange={(e) => setMobileNumber(e.target.value)}
              />
              <div className="flex w-full h-10 items-center">
                <i
                  class="fa fa-location-dot mr-2 text-pink-500 fa-lg"
                  aria-hidden="true"
                />
                <h3 className="text-xl text-gray-600 font-bold m-0">Address</h3>
              </div>

              <input
                type="text"
                name="input_house"
                id="input_house"
                required
                placeholder="House no. / Building Name"
                className="h-10 placeholder:text-lg placeholder:font-semibold border-b-2 shadow-sm  my-3 px-2 py focus:outline-none text-md font-semibold text-gray-500"
                onChange={(e) => setHouseNumber(e.target.value)}
              />
              <input
                type="text"
                name="Road_Name"
                id="Road_Name"
                required
                placeholder="Street Name / Area"
                className="h-10 placeholder:text-lg placeholder:font-semibold border-b-2 shadow-sm  my-2 px-2 py focus:outline-none text-md font-semibold text-gray-500"
                onChange={(e) => setStreetName(e.target.value)}
              />
              <input
                type="text"
                name="Pincode"
                id="Pincode"
                required
                placeholder="Pincode"
                className="h-10 placeholder:text-lg placeholder:font-semibold border-b-2 shadow-sm  my-2 px-2 py focus:outline-none text-md font-semibold text-gray-500"
                onChange={(e) => setpincode(e.target.value)}
              />
              <span className="w-full flex justify-between">
                <input
                  type="text"
                  name="City"
                  id="City"
                  required
                  placeholder="City"
                  className="h-10 placeholder:text-lg placeholder:font-semibold border-b-2 shadow-sm  my-2 px-2 py focus:outline-none text-md font-semibold text-gray-500"
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  type="text"
                  name="State"
                  id="State"
                  required
                  placeholder="State"
                  className="h-10 placeholder:text-lg placeholder:font-semibold border-b-2 shadow-sm  my-2 px-2 py focus:outline-none text-md font-semibold text-gray-500"
                  onChange={(e) => setState(e.target.value)}
                />
              </span>
              <input
                type="text"
                name="Landmark"
                id="Landmark"
                placeholder="Landmark (optional)"
                className="h-10 placeholder:text-lg placeholder:font-semibold border-b-2 shadow-sm  my-2 px-2 py focus:outline-none text-md font-semibold text-gray-500"
                onChange={(e) => setLandmark(e.target.value)}
              />
              <p className="h-4 text-pink-500 font-bold text-xs m-0">
                * All Feilds are required
              </p>
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-700 transition-all duration-700 text-white rounded text-lg font-semibold h-12 my-4"
                onClick={SaveAddressButtonHandler}
                disabled={
                  Name &&
                  MobileNumber &&
                  StreetName &&
                  HouseNumber &&
                  City &&
                  State &&
                  pincode !== ""
                    ? false
                    : true
                }
              >
                Save Address and Continue
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col py-3 w-3/12">
          <h5 className="text-lg text-gray-700 font-bold">Price Details</h5>
          <div className="flex flex-col border-b-2">
            {CartItems.map((product) => (
              <div className="flex flex-row justify-between">
                <h5 className="text-gray-600 text-sm font-bold">
                  {product.name} :{" "}
                </h5>
                <h5 className="text-sm text-gray-600 font-bold">
                  ${product.price.toFixed(2)}
                </h5>
              </div>
            ))}
          </div>
          <div className="flex justify-between my-2">
            <h4 className="text-lg text-gray-700 font-bold">Order Total</h4>
            <h4 className="text-lg text-gray-700 font-bold">${TotalPrice}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressScreen;
