import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import { Spin, Card } from "antd";
import { useNavigate } from "react-router-dom";
const URL_IMAGES = "http://localhost:3000/"


const Product = () => {
  const navigate = useNavigate()
  const { products, addCart } = useContext(ProductContext);
  const productsList = products.product
  if (products.length == 0) {
    return (
      <div className="flex justify-center flex-column">
        <Spin size="large" />
        <img src="../../../src\assets/mapache-pedro-pé.gif" alt="Logo de ecommerce" className="h-20 mr-4 rounded-3xl" />
      </div>
    )

  }

  return (

    <div className="flex flex-wrap justify-center bg-gray-300">
      {productsList.map((product) => (
        <div className="flex font-sans m-3 bg-white rounded p-2 w-[550px] ">
          <div className="flex-none w-48 relative">
            <img
              alt={product.name}
              src={`${URL_IMAGES}${product.image}`}
              className="inset-0 h-full w-full object-contain transition-transform duration-500 ease-in-out transform py-2 hover:scale-110"
            />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-2xl font-semibold text-slate-900">
                {product.name}
              </h1>
              <div className="text-lg font-semibold text-slate-500">
                €{product.price}
              </div>
              <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                {product.description}
              </div>
            </div>
            <div className="flex items-baseline  mb-3 pb-3 border-b border-slate-200">
            </div>
            <div className="flex space-x-4 mb-6 text-sm font-medium">
              <div className="flex-auto flex space-x-4">
                <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="button" onClick={() => addCart(product)}>
                  Add to Cart
                </button>
                <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button" onClick={() => { addCart(product), navigate("/cart") }}>
                  Buy now
                </button>
              </div>
            </div>
            <p className="text-sm text-slate-700">
              Free shipping on all EU orders.
            </p>
          </form>
        </div>
      ))}
    </div>
  );
};

export default Product;