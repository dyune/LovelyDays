import {Route, Routes, useLocation} from "react-router-dom";
import Homepage from "./Homepage.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

export default function AnimatedRoutes() {

  const location = useLocation();
  return <>
    <Routes location={location} key={location.key}>
      console.log(location)
      <Route path="/" element={<Homepage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  </>
}