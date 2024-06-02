import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Spin } from "antd";

const Profile = () => {
  const { getLoggedUserInfo, user, token } = useContext(UserContext);

  useEffect(() => {
    getLoggedUserInfo();
  }, [token]);

  if (!user) {
    return <Spin size="large" />;
  }

  const renderOrders = () => {
    return user.Orders.map((order, index) => (
      <div key={index} className="border rounded-lg shadow-lg p-4 mb-4">
        <h2 className="text-lg font-bold mb-2">Order {index + 1}</h2>
        <ul className="list-disc pl-4">
          {order.Products.map((product, productIndex) => (
            <li key={productIndex}>{product.name}</li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <div className="container mx-auto p-4">
      {console.log(user)}
      <h1 className="text-2xl font-bold mb-4">User profile</h1>
      <div className="bg-white rounded-lg shadow-lg p-4">
        <p className="text-lg font-semibold mb-2">Name:</p>
        <p>{user.name}</p>
        <p className="text-lg font-semibold mb-2">Email:</p>
        <p>{user.email}</p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Your orders</h2>
        {renderOrders()}
      </div>
    </div>
  );
};

export default Profile;
