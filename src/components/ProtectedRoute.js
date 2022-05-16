import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "/Users/sarthakjain/Desktop/DEV/REACTLEARNING/React_Firebase_Auth_Tutorial-master/src/context/UserAuthContext.js";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
