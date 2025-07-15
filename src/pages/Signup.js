import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail]     = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://movie-backend-3tsn.onrender.com/api/signup", {
        username,
        email,
        password,
      });

      console.log("Signup successful:", response.data);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/login");
    } catch (err) {
      console.error("Signup error:", err.response?.data?.message || err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br /><br />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br /><br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br /><br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
