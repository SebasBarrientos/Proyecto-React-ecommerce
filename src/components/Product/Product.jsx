import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import { Spin } from "antd";

const Product = () => {
  const { products,addCart } = useContext(ProductContext);

  if (products.length == 0) {
    return <Spin size="large" />;
  }

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button onClick={()=>addCart(product)}>Add cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;