import {useState, createContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const AuthContext = createContext(undefined);
export default AuthContext;
export function AuthProvider({ children }) {
    const [ user, setUser ] = useState(() => { return localStorage.getItem("tokens") || null; });
    const [ tokens, setTokens ] = useState(() => { return localStorage.getItem("tokens") || null; });
    const [ loading, setLoading ] = useState(false);
    const navigate = useNavigate();

    async function loginUser(e) {
        e.preventDefault();

        try {
            // await for API call
            const response = await fetch(
                "http://127.0.0.1:8000/auth/token/obtain/",
                {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json"
                    },
                    body: JSON.stringify({username: e.target.username.value, password: e.target.password.value}) // convert to JSON format
                    }
            )

            let data = await response.json(); // wait for response

            if (data) { // authenticated, set tokens from response
                localStorage.setItem("tokens", JSON.stringify(data)); // store as tokens
                // console.log(localStorage.getItem("tokens"));
                setTokens(data);
                setUser(jwtDecode(data.access)); // get access token, then decode to user info
                navigate("/home");
            }
            else {
                alert("Failed login");
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    function logoutUser(){
        localStorage.removeItem("tokens");
        setTokens(null);
        setUser(null);
        navigate("/login/");
    }

    async function updateToken() {
        try {
            const tokenValue = JSON.stringify({"refresh" : tokens?.refresh});
            console.log(tokenValue);
            const response = await fetch(
                "http://127.0.0.1:8000/auth/token/refresh/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: tokenValue // if token exists, access refresh or else return undefined
                }
            )
            if (response.status === 200) {
                const data = await response.json();
                setTokens(data);
                setUser(jwtDecode(data.access));
                localStorage.setItem("tokens", JSON.stringify(data));
            } else {
                logoutUser()
            }
            if (loading) {
                setLoading(false);
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect( () => { // runs after render, and after any changes to the dependency list below
        if (loading) {
            console.log("refreshed tokens while loading")
            updateToken();
        }
        const REFRESH_TIMER = 1000 * 4 * 60;
        let interval = setInterval( () => {
                if (tokens) {
                    updateToken();
                    console.log("refreshed while active")
                    console.log(tokens);
                }
            }, REFRESH_TIMER
        )
        return () => clearInterval(interval); // cleanup function provided to React, runs this before running
                                                    // useEffect again
    }, [tokens, loading] // dependency list below
    )

    let contextData = {
        user: user,
        tokens: tokens,
        loginUser: loginUser,
        logoutUser: logoutUser
    }

    return <>
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    </>
}