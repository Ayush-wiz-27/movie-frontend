import React from "react";
import { Link, useNavigate } from "react-router-dom";



function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav
      style={{
        backgroundColor: "#ebbd36",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "18px" , color:"#F4F5F0"}}>
        🎬 Movie App
      </div>
      <div style={{ display: "flex", gap: "15px", textDecoration:"none" }}>
        <Link to="/home"style={{textDecoration:"none" ,color:"black"}}>Home</Link>
        {user ? (
          <>
            <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>
            Profile
            </Link>

            <button
              onClick={handleLogout}
              style={{
                background: "none",
                color: "red",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link  to="/login"style={{textDecoration:"none", color:"black"}}>Login</Link>
            <Link to="/signup" style={{textDecoration:"none", color:"black"}}>Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
