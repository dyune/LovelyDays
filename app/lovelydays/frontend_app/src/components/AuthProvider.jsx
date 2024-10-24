import {useState, createContext} from "react";

const AuthContext = createContext(undefined);
export default AuthContext;
export function AuthProvider({ children }) {
  const [ user, setUser ] = useState({user:"joe"});
  const [ tokens, setTokens] = useState(null);

  async function loginUser(e){
    e.preventDefault();
  }
  function logoutUser(e){
    e.preventDefault();
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