import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Logout = () => {

  const { logoutUser } = useContext(AuthContext);

  logoutUser();

  return (
    <div>Logout!</div>
  )
}

export default Logout