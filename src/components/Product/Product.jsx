import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import { Spin, Card } from "antd";
import { useNavigate } from "react-router-dom";
const URL_IMAGES = "http://localhost:3000/"


const Product = () => {
  const navigate = useNavigate()
  const { products, addCart } = useContext(ProductContext);
  console.log(products);
  const productsList = products.product
  console.log(productsList);
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
              {/* <div className="space-x-2 flex text-sm">
                <label>
                  <input className="sr-only peer" name="size" type="radio" value="xs" checked />
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    XS
                  </div>
                </label>
                <label>
                  <input className="sr-only peer" name="size" type="radio" value="s" />
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    S
                  </div>
                </label>
                <label>
                  <input className="sr-only peer" name="size" type="radio" value="m" />
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    M
                  </div>
                </label>
                <label>
                  <input className="sr-only peer" name="size" type="radio" value="l" />
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    L
                  </div>
                </label>
                <label>
                  <input className="sr-only peer" name="size" type="radio" value="xl" />
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    XL
                  </div>
                </label>
              </div> */}
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
              {/* <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </button> */}
            </div>
            <p className="text-sm text-slate-700">
              Free shipping on all EU orders.
            </p>
          </form>
        </div>


        // <Card //HACER FLIP PARA LAS IMAGENES
        //   key={product._id}
        //   hoverable
        //   className="rounded-lg shadow-lg"
        //   cover={
        //     <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
        //       <img 
        //         alt={product.name} 
        //         src={`${URL_IMAGES}${product.image}`} 
        //         className="inset-0 h-full w-full object-contain transition-transform duration-500 ease-in-out transform hover:scale-110" 
        //       />
        //     </div>
        //   }
        // > 
        //   <Meta title={product.name} description={`€${product.price}`} />
        //   <div className="mt-4 flex justify-center">
        //     <Button type="primary" onClick={() => addCart(product)}>
        //       Add to Cart
        //     </Button>
        //   </div>
        // </Card>
      ))}
    </div>
  );
};

export default Product;