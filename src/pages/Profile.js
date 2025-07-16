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
      navigate("/login");
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
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>👤 Profile Page</h2>
      {user ? (
        <div>
          <div style={{ backgroundColor: "#f4f4f4", padding: "15px", borderRadius: "10px" }}>
            <p><strong>📧 Email:</strong> {user.email}</p>
            <button
              onClick={handleLogout}
              style={{
                marginTop: "10px",
                padding: "8px 16px",
                borderRadius: "5px",
                backgroundColor: "#ff4d4d",
                color: "white",
                border: "none",
                cursor: "pointer"
              }}
            >
              Logout
            </button>
          </div>

          <div style={{ marginTop: "30px" }}>
            <h3 style={{ marginBottom: "10px" }}>🎬 My Watchlist</h3>
            {watchlist.length === 0 ? (
              <p>No movies added yet.</p>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                  gap: "20px"
                }}
              >
                {watchlist.map((movie) => (
                  <div
                    key={movie.id}
                    style={{
                      textAlign: "center",
                      backgroundColor: "#fff",
                      borderRadius: "10px",
                      padding: "10px",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.2s"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt={movie.title}
                      style={{ borderRadius: "10px", width: "100%" }}
                    />
                    <h4 style={{ fontSize: "14px", marginTop: "8px" }}>{movie.title}</h4>
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

