import {useContext} from "react";
import AuthContext, {AuthProvider} from "./AuthProvider.jsx";

export default function LoggedInHome() {
  const { user } = useContext(AuthContext);
  return <>
    {user ? <p>hi chat</p> : <h1>bye chat</h1>}
  </>

}