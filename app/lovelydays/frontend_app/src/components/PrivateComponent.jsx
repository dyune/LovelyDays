import {useState} from "react";
import {Navigate, Route} from "react-router-dom";
import Login from "./Login.jsx";

export default function PrivateComponent({ children }) {
  const [ user, setUser ] = useState(null);
  return <>
    {!user ? <Navigate to="/login"/> : children}
    </>
}