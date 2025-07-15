import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import page components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import MovieDetail from "./pages/MovieDetail";
import { Navigate } from "react-router-dom";


// Import Navbar
import Navbar from "./components/Navbar";

function App() {
  return (
  <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "#F4F5F0" }}>
    <Router>
      <Navbar /> 

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
