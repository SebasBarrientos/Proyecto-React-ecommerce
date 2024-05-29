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
  return (
    <div>
      <p> {user.name}</p>
      <p> {user.email}</p>
    </div>
  );
};

export default Profile;