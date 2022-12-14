import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <LinkContainer to={`/product/${product._id}`}>
      <div className="h-fit w-full border-2 border-gray-300 bg-white p-2 shadow-md rounded-md relative ">
        <div>
          <img
            src={product.images}
            alt={""}
            className="object-fill h-48 w-full cursor-pointer"
          />
        </div>
        <div>
          <h6 className="text-start h-6 leading-6 overflow-hidden text-gray-400 cursor-pointer">
            {product.name}
          </h6>
        </div>
        <div className="flex items-baseline">
          <h5 className=" text-2xl font-mono font-bold cursor-pointer">
            {product.price}
            <span className=" font-mono">$</span>&nbsp;
          </h5>
          <span className=" text-gray-400 text-sm font-medium ">onwards</span>
        </div>
        <div className=" bg-gray-100 rounded-lg text-gray-500 px-2 py-1 text-sm font-medium my-3 w-fit cursor-pointer">
          Free Delivery
        </div>
        <div className="flex items-baseline">
          <div className="flex items-center justify-center rounded-2xl bg-green-600 w-16 h-8 text-gray-100 px-2 py-1 text-lg cursor-pointer">
            {product.avg_rating}&nbsp;
            <i
              className="fa fa-star text-sm text-gray-100"
              aria-hidden="true"
            ></i>
          </div>
          <span className="text-gray-500 text-sm font-semibold">
            &nbsp;{product.review_count} reviews
          </span>
        </div>
      </div>
    </LinkContainer>
  );
};

export default ProductCard;
