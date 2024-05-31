import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import { Spin, Button, Card } from "antd";
const { Meta } = Card;

const URL_IMAGES = "http://localhost:3000/"


const Product = () => {
  const { products, addCart } = useContext(ProductContext);
  console.log(products);
  const productsList = products.product
  console.log(productsList);
  if (products.length == 0) {
    return <Spin size="large" />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    {productsList.map((product) => (
      <Card //HACER FLIP PARA LAS IMAGENES
        key={product._id}
        hoverable
        className="rounded-lg shadow-lg"
        cover={
          <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
            <img 
              alt={product.name} 
              src={`${URL_IMAGES}${product.image}`} 
              className="inset-0 h-full w-full object-contain transition-transform duration-500 ease-in-out transform hover:scale-110" 
            />
          </div>
        }
      > 
        <Meta title={product.name} description={`€${product.price}`} />
        <div className="mt-4 flex justify-center">
          <Button type="primary" onClick={() => addCart(product)}>
            Add to Cart
          </Button>
        </div>
      </Card>
    ))}
  </div>
  );
};

export default Product;