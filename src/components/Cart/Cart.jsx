import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import { Link } from "react-router-dom";
import { Button, Empty, Card } from "antd";
// import orderService from "../../services/OrderService";
const { Meta } = Card;
const Cart = () => {
  const { cart , clearCart} = useContext(ProductContext);

  if (cart.length == 0) {
    return (
      <Empty description={<span>Empty cart </span>}>
        <Button type="primary">
          <Link to="/products">Buy Now</Link>
        </Button>
      </Empty>
    );
  }
  return (
 <div className="p-6 bg-gray-100 min-h-screen">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cart.map((product) => (
          <Card
            key={product._id}
            hoverable
            className="rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            cover={<img alt={product.name} src={product.image} className="h-48 w-full object-cover" />}
          >
            <Meta title={<span className="font-semibold text-lg">{product.name}</span>} description={<span className="text-gray-600">${product.price}</span>} />
          </Card>
          
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Button type="danger" onClick={clearCart} className="bg-black text-white border-none rounded-md shadow-md hover:bg-gray-800danger ounded-md shadow-md">
          Clear Cart
        </Button>
      </div>
      {/* <button onClick={()=> {        orderService.createOrder(cart)        clearCart()        }}>Create Order</button> */}
    </div>


  );
};

export default Cart;