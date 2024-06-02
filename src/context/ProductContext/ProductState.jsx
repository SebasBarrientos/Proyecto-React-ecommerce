import { createContext, useReducer } from "react";
import axios from "axios"
import ProductReducer from "./ProductReducer.jsx"

const cart = JSON.parse(localStorage.getItem("cart")) || []
const token = localStorage.getItem("token")
const initialState = {
  products: [],
  cart: cart
};

const API_URL = "http://localhost:3000/products";

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get(API_URL);
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });
    return res;
  };

  const addCart = (product) => {
    dispatch({
      type: "ADD_CART",
      payload: product
    })
  }

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART"
    })
  }
  const deleteProductFromCart = async (product) => {
    const newCart = state.cart
    const indexProduct = await newCart.findIndex(item => item === product)
    await newCart.splice(indexProduct, 1)
    dispatch({
      type: "DELETE_FROM_CART",
      payload: newCart
    })
  }
  const addProductsToDB = async (formData) => {
    await axios.post(API_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token
      }
    });
  };
  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        getProducts,
        addCart,
        clearCart,
        deleteProductFromCart,
        addProductsToDB
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
