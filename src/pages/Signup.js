import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
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
    <div style={{
      display: "flex", justifyContent: "center", alignItems: "center",
      minHeight: "100vh", backgroundColor: "#f9fafb"
    }}>
      <div style={{
        backgroundColor: "#fff", padding: "30px", borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)", width: "100%", maxWidth: "400px"
      }}>
        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "16px",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  cursor: "pointer",
};

export default Signup;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function Signup() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail]     = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("https://movie-backend-3tsn.onrender.com/api/signup", {
//         username,
//         email,
//         password,
//       });

//       console.log("Signup successful:", response.data);
//       localStorage.setItem("user", JSON.stringify(response.data.user));
//       navigate("/login");
//     } catch (err) {
//       console.error("Signup error:", err.response?.data?.message || err.message);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSignup}>
//         <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
//         <br /><br />
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <br /><br />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <br /><br />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;
