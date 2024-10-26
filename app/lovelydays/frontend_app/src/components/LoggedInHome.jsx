import {useContext} from "react";
import AuthContext, {AuthProvider} from "./AuthProvider.jsx";

export default function LoggedInHome() {
    const { user } = useContext(AuthContext);

    console.log(user);
    console.log("balls");
    console.log(localStorage.getItem("token"));

    return <>
        {user ? <p>hi chat</p> : <h1>bye chat</h1>}
    </>

}