import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { ShoppingCartOutlined } from "@ant-design/icons"
import { Badge, Button} from 'antd';
import { ProductContext } from "../../context/ProductContext/ProductState";

const Header = () => {
  const { token, logout } = useContext(UserContext);
  const { cart } = useContext(ProductContext)
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          
          <img src="../../../src\assets/mapache-pedro-pé.gif" alt="Logo de ecommerce" className="h-10 mr-4 rounded-3xl" />
          <nav className="flex space-x-4">
            <Link to="/" className="hover:text-blue-500">Home</Link>
            <Link to="/products" className="hover:text-blue-500">Products</Link>
          </nav>
        </div>
        <div className="flex justify-between items-center">

          <div className="flex items-center me-3">

            {token && (
              <>
                <Link to="/profile" className="hover:text-blue-500 me-3">My profile</Link>
                <Link to="/cart" className="flex items-center hover:text-blue-500">
                  Cart<Badge count={cart.length} size="small" offset={[0, -5]}><ShoppingCartOutlined className="ml-1" />
                  </Badge></Link>
              </>
            )}
          </div>
          <div>
            {token ?
              (<Button type="primary" onClick={() => { logout(); navigate("/login") }}>Logout</Button>)
              : (<Link to="/login"> <Button type="primary">Login</Button> </Link>)}
          </div>
        </div>
      </div>
    </div>);
};

export default Header;