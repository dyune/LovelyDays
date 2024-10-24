import { useState } from 'react';
import Homepage from "./components/Homepage.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import HomeNavbar from "./components/HomeNavbar.jsx";
import PrivateComponent from "./components/PrivateComponent.jsx";
import LoggedInHome from "./components/LoggedInHome.jsx";
import {AuthProvider} from "./components/AuthProvider.jsx";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Router>
          <AuthProvider>
            <HomeNavbar />
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/home" element={
                <PrivateComponent>
                  <LoggedInHome/>
                </PrivateComponent>
              }/>
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </>
  )
}

export default App
