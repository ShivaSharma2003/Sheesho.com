import {
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAILS,
  SINGLE_PRODUCT_REQUEST,
  SINGLE_PRODUCT_SUCCESS,
  SINGLE_PRODUCT_FAILS,
} from "../Constant/ProductConstant";

export const ProductFetchReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case PRODUCT_FETCH_REQUEST:
      return { loading: true, product: [] };
    case PRODUCT_FETCH_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_FETCH_FAILS:
      return { loading: false, error: action.payload };
    default:
      return { state };
  }
};

export const SingleProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case SINGLE_PRODUCT_REQUEST:
      return { loading: true, product: {} };
    case SINGLE_PRODUCT_SUCCESS:
      return { loading: false, product: action.payload };
    case SINGLE_PRODUCT_FAILS:
      return { loading: false , error: action.payload };
    default:
      return state;
  }
};
