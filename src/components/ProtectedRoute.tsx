import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import { useLocation } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {

const location = useLocation();
// console.log(location.pathname)
const { isAuthenticated } = React.useContext(AuthContext);
  if (isAuthenticated==='false' && location.pathname!='/login') {
    return <Navigate to="/login" />;
  }
  return children;
};
