import {
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAILS,
  SINGLE_PRODUCT_REQUEST,
  SINGLE_PRODUCT_SUCCESS,
  SINGLE_PRODUCT_FAILS,
} from "../Constant/ProductConstant";
import Axios from "../Axios";

export const ProductFetch = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_FETCH_REQUEST });
    const { data } = await Axios.get("/products/fashion");
    dispatch({ type: PRODUCT_FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_FETCH_FAILS, error: error });
  }
};

export const SingleProductFetch = (id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_PRODUCT_REQUEST });
    const { data } = await Axios.get(`/products/fashion/item/${id}`);
    dispatch({ type: SINGLE_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SINGLE_PRODUCT_FAILS, error: error });
  }
};
