import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import { Spin, Button, Card } from "antd";

const { Meta } = Card;
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
      <Card
        key={product._id}
        hoverable
        className="rounded-lg shadow-lg"
        cover={<img alt={product.name} src={product.image} className="h-48 w-full object-cover" />}
      >
        <Meta title={product.name} description={`$${product.price}`} />
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