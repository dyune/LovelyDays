import {useContext, useEffect, useState} from "react";
import AuthContext, {AuthProvider} from "./AuthProvider.jsx";

export default function LoggedInHome() {
    const { user, tokens, logoutUser, updateToken } = useContext(AuthContext);
    const [ profile, setProfile ] = useState([]);

    useEffect(() => { getProfile() }, [])

    async function getProfile() {
        let response = await fetch('http://127.0.0.1:8000/auth/profile', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization':'Bearer ' + String(tokens.access)
            }
        })
        let data = await response.json()
        if(response.status === 200){
            setProfile(data)
        } else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }
    }
    return <>
        {user ? <p>hi {profile.first_name} {profile.last_name}</p> : <h1>bye chat</h1>}
    </>

}