import React from "react";
import { ProductFetch } from "../Actions/ProductFetchAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Components/Spinner";
import ProductCard from "../Containers/ProductCard";
import Error from "../Components/Error";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const Product = useSelector((state) => state.Product);
  const { loading, error, product } = Product;

  useEffect(() => {
    dispatch(ProductFetch());
  }, [dispatch]);

  return (
    <>
      {loading && <Spinner />}
      {error && <Error />}
      {product && (
          <div className="grid md:grid-cols-4 sm:grid-cols-2 xl:grid-cols-5 2xl:grid-cols-6 my-4 mx-3 gap-3 ">
          {product.map((product) => (
            <ProductCard product={product} key={product._id}/>
          ))}
        </div>
      )}
    </>
  );
};

export default HomeScreen;
