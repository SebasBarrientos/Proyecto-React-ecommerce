import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import {ShoppingCartOutlined} from "@ant-design/icons"
import { Badge } from 'antd';
import { ProductContext } from "../../context/ProductContext/ProductState";

const Header = () => {
  const { token, logout } = useContext(UserContext);
  const {cart} = useContext(ProductContext)
  const navigate = useNavigate();

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart))
  },[cart])

  return (
    <div>
      Logo
      <Link to="/"> Home /</Link>
      <Link to="/products"> Products /</Link>
      {token ? (
        <>
          <Link to="/profile"> Profile /</Link>
          <Link to="/cart"> Cart <Badge count={cart.length} size="small"><ShoppingCartOutlined /></Badge> /</Link>
          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
            Logout /
          </button>
        </>
      ) : (
        <Link to="/login"> Login </Link>
      )}
    </div>
  );
};

export default Header;