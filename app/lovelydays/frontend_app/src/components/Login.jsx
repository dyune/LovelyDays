import {useContext, useState} from "react";
import AuthContext from "./AuthProvider.jsx";

export default function Login() {
  console.log("ok")
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ showPassword, setShowPassword ] = useState(false);
  const { loginUser } = useContext(AuthContext);

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleShowPasswordChange(event) {
    event.preventDefault();
    setShowPassword((show) => !showPassword); // functional update
  }

  return <>
    <div className="hero bg-base-100 flex-grow flex-col items-center justify-center">
      <div className="hero-content">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="text-center px-9 py-3">
              <h1 className="text-2xl font-bold">Login and continue creating</h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input type="username"
                     placeholder="Username"
                     className="input input-bordered"
                     value={username}
                     onChange={handleUsernameChange}
                     required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <input type={showPassword ? "text" : "password"}
                       placeholder="Password"
                       className="grow"
                       required/>
                <span className="badge">
                  <button onClick={handleShowPasswordChange}
                          className="btn-accent">{showPassword ? "Hide" : "Show"}
                  </button>
                </span>
              </label>
              <label className="label flex items-center gap-2">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button onClick={loginUser} className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
}