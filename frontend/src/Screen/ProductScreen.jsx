import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SingleProductFetch } from "../Actions/ProductFetchAction";
import Spinner from "../Components/Spinner";
import Error from "../Components/Error";
import { Favorite } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { AddtoCart } from "../Actions/CartAction";
import { useNavigate } from "react-router-dom";

const ProductScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  // -------------------------------------------------------------
  const [FavoriteClicked, setFavoriteClicked] = useState(false);
  const FavoriteButtonHandler = () => {
    if (FavoriteClicked) {
      setFavoriteClicked(false);
    } else {
      setFavoriteClicked(true);
    }
  };

  // ---------------------------------------------------------------
  const SingleProduct = useSelector((state) => state.SingleProduct);
  const { loading, error, product } = SingleProduct;
  useEffect(() => {
    dispatch(SingleProductFetch(id));
  }, [dispatch, id]);

  // ---------------------------------------------------------------
  const AddToCartButtonHandler = (e) => {
    e.preventDefault();
    navigate("/checkout/cart");
    dispatch(AddtoCart(product));
  };

  const BuyNowButtonHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : product ? (
        <>
          <div className="grid place-items-center w-full h-full p-4">
            <div className="h-full w-4/5">
              <div className=" grid grid-cols-2 h-3/4 gap-3">
                <div className="h-3/4 relative">
                  <div className=" h-full mb-3">
                    <img
                      src={product.images}
                      alt=""
                      className="object-fill h-full w-full"
                    />
                  </div>
                  <div className=" absolute top-5 right-3">
                    <IconButton onClick={FavoriteButtonHandler}>
                      {FavoriteClicked ? (
                        <Favorite className="text-pink-600" />
                      ) : (
                        <FavoriteBorderOutlinedIcon className="text-pink-600" />
                      )}
                    </IconButton>
                  </div>
                  <div className="h-20">
                    <div className="flex items-center justify-center h-full">
                      <button
                        className="border-2 h-12 w-44 rounded-md mr-1 border-black text-black font-semibold text-lg"
                        onClick={AddToCartButtonHandler}
                      >
                        <i class="fa fa-shopping-cart" aria-hidden="true" />
                        &nbsp; Add to Cart
                      </button>
                      <button
                        className="border-2 h-12 w-44 rounded-md ml-1 bg-pink-600 text-white font-semibold text-lg"
                        onClick={BuyNowButtonHandler}
                      >
                        <i class="fa fa-shopping-bag" aria-hidden="true" />
                        &nbsp; Buy Now
                      </button>
                    </div>
                  </div>
                </div>

                <div className="h-3/4">
                  <div className="border-2 h-54 py-2 px-2 rounded-md mb-3">
                    <h4 className="text-gray-500 text-xl">{product.name}</h4>
                    <h3 className="mb-3 font-bold">${product.price}</h3>
                    <div className="flex items-baseline">
                      <div className="flex items-center justify-center rounded-2xl bg-green-600 w-16 h-8 text-gray-100 px-2 py-1 text-lg ">
                        {product.avg_rating}&nbsp;
                        <i
                          className="fa fa-star text-sm text-gray-100"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <span className="text-gray-500 text-sm font-semibold inline">
                        &nbsp;{product.review_count} reviews
                      </span>
                    </div>
                    <div className=" bg-gray-100 rounded-lg text-gray-500 px-2 py-1 text-sm font-medium my-3 w-fit">
                      Free Delivery
                    </div>
                  </div>
                  <div className="border-2 h-24 w-full py-2 px-2 mb-3">
                    <h4 className=" text-gray-700 text-lg font-bold mb-3">
                      Select Size
                    </h4>
                    <div className="rounded-2xl border-2 border-pink-600 text-center text-sm text-pink-600 inline px-4 py-2 bg-pink-100 cursor-pointer">
                      Free Size
                    </div>
                  </div>
                  <div className="border-2 h-fit w-full py-2 px-2 mb-3">
                    <h4 className="text-gray-700 text-lg font-bold">
                      Product Details
                    </h4>
                    <h6 className="text-gray-500">Name : {product.name}</h6>
                    <h6 className="text-gray-500">
                      Title : {product.sub_title}
                    </h6>
                    <h6 className="text-gray-500">Brand : {product.brand}</h6>
                    <h6 className="text-gray-500">Model : {product.model}</h6>
                    <h6 className="text-gray-500">Color : {product.color}</h6>
                    <h6 className="text-gray-500">
                      Availability : {product.availability}
                    </h6>
                    <h6 className="text-gray-500">
                      Available Size :{" "}
                      {product.available_sizes === ""
                        ? "Free Size"
                        : product.available_sizes}
                    </h6>
                  </div>
                  <div className="border-2 h-fit w-full py-2 px-2 mb-3">
                    <h4 className="text-gray-700 text-lg font-bold">
                      Description
                    </h4>
                    <p className="text-start text-gray-500 font-medium">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        error && <Error />
      )}
    </>
  );
};

export default ProductScreen;
