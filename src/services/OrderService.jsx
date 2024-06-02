import axios from "axios"

const API_URL = "http://localhost:3000/orders";

const createOrder =async (cart)=>{
    const productsIds = cart.map(product=>product.id)
    const token = localStorage.getItem("token")
    await axios.post(API_URL,{ProductId:productsIds},{
        headers:{
           Authorization:token 
        }
    })
}

const orderService ={
    createOrder
}

export default orderService