import {useContext, useState} from "react";
import {Navigate, Route} from "react-router-dom";
import Login from "./Login.jsx";
import AuthContext from "./AuthProvider.jsx";

export default function PrivateComponent({ children }) {
  const { user } = useContext(AuthContext);
  return <>
    {!user ? <Navigate to="/login"/> : children}
    </>
}