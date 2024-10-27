import {useContext, useEffect, useState} from "react";
import AuthContext, {AuthProvider} from "./AuthProvider.jsx";

export default function LoggedInHome() {
    const { user, tokens, logoutUser, updateToken } = useContext(AuthContext);
    const [ profile, setProfile ] = useState([]);

    useEffect(() => { getUser() }, [])

    async function getUser() {
        console.log("balls")
        console.log(tokens.access)
        console.log(user)
        console.log("bells")
        const response = fetch(
            'http://127.0.0.1:8000/auth/profile/',
            {
                method:'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':'JWT ' + tokens.access
                }
            }
        )
        if (response.status === 200) {
            const data = await response.json();
            setProfile(data);
        } else if (response.status === 401 || response.status === 'Unauthorized') {
            logoutUser();
        }
    }
    // console.log(user);
    // console.log("balls");
    // console.log(localStorage.getItem("token"));
    // console.log(tokens);
    return <>
        {user ? <p>hi {profile.first_name} {profile.last_name}</p> : <h1>bye chat</h1>}
    </>

}