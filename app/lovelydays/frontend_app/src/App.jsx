import { useState } from 'react';
import Homepage from "./components/Homepage.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import HomeNavbar from "./components/HomeNavbar.jsx";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedRoutes from "./components/AnimatedRoutes.jsx";
import LocationProvider from "./components/LocationProvider.jsx";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Router>
          <HomeNavbar />
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
