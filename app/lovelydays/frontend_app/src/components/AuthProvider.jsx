import {useState, createContext} from "react";
import {useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const AuthContext = createContext(undefined);
export default AuthContext;
export function AuthProvider({ children }) {
    const [ user, setUser ] = useState();
    const [ tokens, setTokens] = useState(null);

    const navigate = useNavigate();

    async function loginUser(e) {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:8000/auth/token/obtain/", { // wait for API call
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({username: e.target.username.value, password: e.target.password.value}) // convert to JSON format
            })

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
    function logoutUser(e){
        e.preventDefault();
        localStorage.removeItem("tokens");
        setTokens(null);
        setUser(null);
        navigate("/login/");
    }

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