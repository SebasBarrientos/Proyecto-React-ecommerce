import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import { UserContext } from "../../context/UserContext/UserState";
import { Link, useNavigate } from "react-router-dom";
import { Button, Empty, Card } from "antd";
import orderService from "../../services/OrderService";
const { Meta } = Card;
const URL_IMAGES = "http://localhost:3000/"
import { notification } from 'antd';



const Cart = () => {
  const { token, } = useContext(UserContext);
  if (token == "") {
   return (
   <div className="flex flex-col items-center text-center py-8">
   <h1 className="text-3xl font-bold text-gray-800">You must login to buy!</h1>
   <Link to="/login"> <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" type="primary">Login</button> </Link>
 </div>)
  }
  const { cart, clearCart, deleteProductFromCart } = useContext(ProductContext);
  const createOrder = (cart) => {
    orderService.createOrder(cart)
    clearCart()
    notification.success({
      message: 'Order succesful, check your Email'
    })
  }

  if (cart.length == 0) {
    return (
      <div className="mt-6">

        <Empty description={<span>Empty cart </span>}>
          <Button type="primary">
            <Link to="/products">Buy Now</Link>
          </Button>
        </Empty>
      </div>
    );
  }
  const [price, setPrice] = useState(0);
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((product) => {
      totalPrice += Number(product.price);
    });
    setPrice(totalPrice);
  };
  useEffect(() => {
    calculateTotalPrice();
  }, [cart])

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cart.map((product) => (
          <Card
            key={product._id}
            hoverable
            className="rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 pt-2 px-2"
            cover={<img alt={product.name}
              src={`${URL_IMAGES}${product.image}`} className=" inset-0 h-full w-full object-contain transition-transform duration-500 ease-in-out transform hover:scale-110" />}
          >
            <div className="flex justify-end">

              <button className="button bg-black text-white bold rounded p-1" onClick={() => deleteProductFromCart(product)}>  Delete  </button>
            </div>
            <Meta title={<span className="font-semibold text-lg">{product.name}</span>} description={<span className="text-gray-600">€{product.price}</span>} />
          </Card>
        ))}
      </div>
      <div className="flex justify-between mt-6">
      <div className=" text-2xl font-bold bg-white border-2  rounded-lg shadow-lg p-1 ">
          <h3>Total price: €{price}</h3>
        </div>
        <div className="flex justify-center ">
          <button className="mx-3 p-1 bg-black text-white border-none rounded-md shadow-md hover:bg-blue-800 danger rounded-md shadow-md"
            onClick={() => createOrder(cart)}>Create Order</button>
          <button  className="mx-3 p-1 bg-black text-white border-none rounded-md shadow-md hover:bg-red-800 danger rounded-md shadow-md"
            onClick={clearCart}>
            Clear Cart
          </button>
        </div>
        
      </div>
    </div>


  );
};

export default Cart;