import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Profile() {
  const [user, setUser] = useState(null);
  const [watchlist, setWatchlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    if (!storedUser) {
      navigate("/login"); // redirect if not logged in
    } else {
      setUser(storedUser);
      setWatchlist(storedWatchlist);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Profile Page</h2>
      {user ? (
        <div>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={handleLogout} style={{ marginTop: "10px" }}>
            Logout
          </button>
        

          {/* Watchlist Section */}
<div style={{ marginTop: "30px" }}>
  <h3>My Watchlist</h3>
  {watchlist.length === 0 ? (
    <p>No movies added yet.</p>
  ) : (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gap: "20px",
        marginTop: "10px",
      }}
    >
      {watchlist.map((movie) => (
        <div key={movie.id} style={{ 
          textAlign: "center",
          backgroundColor: "#ebbd36",
          borderRadius: "10px",
          padding: "10px",
          transition: "transform 0.2s, box-shadow 0.2s",
          boxShadow: "0 2px 4px rgba(0,0,0,0.3)", 
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            style={{ borderRadius: "10px", width: "100%" }}
          />
          <h4 style={{ fontSize: "14px", color:"#F4F5F0" }}>{movie.title}</h4>
        </div>
      ))}
    </div>
  )}
</div>

        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}

export default Profile;
