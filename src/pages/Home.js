import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const API_KEY = "8f3283ca7d286719b4c58c93c3b7bf21";
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    axios
      .get(URL)
      .then((res) => {
        console.log("Fetched movies:", res.data.results);
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.error("Failed to fetch movies", err);
      });
  }, []);

  return (
    <div style={{ padding: "20px", color:"Bright Black" }}>
      <h1 >Popular Movies</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "20px",
          
        }}
      > 

        {movies
  .filter((movie) => movie.poster_path)
  .map((movie) => {
    return (
      <Link
        to={`/movie/${movie.id}`}
        key={movie.id}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div 
        style={{ 
          textAlign: "center",
          backgroundColor: "#1e1e1e",
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
            style={{ borderRadius: "10px", width: "100%", marginBottom: "10px"}}
          />
          <h3 style={{ fontSize: "14px", color:"#F4F5F0"}}>{movie.title}</h3>
        </div>
      </Link>
    );
  })}

      </div>
    </div>
  );
}

export default Home;


