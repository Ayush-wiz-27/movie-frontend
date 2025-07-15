import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const API_KEY = "8f3283ca7d286719b4c58c93c3b7bf21";
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

    axios
      .get(URL)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error("Failed to fetch movie details", err));
  }, [id]);

  const addToWatchlist = () => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    const isAlreadyInList = watchlist.some((item) => item.id === movie.id);

    if (!isAlreadyInList) {
      watchlist.push(movie);
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
      setAdded(true);
    } else {
      alert("Already in watchlist!");
    }
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        style={{ borderRadius: "10px", marginBottom: "20px", Color:"#F4F5F0"}}
      />
      <p><strong>Overview:</strong> {movie.overview}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> {movie.vote_average}</p>
      
      <button onClick={addToWatchlist} disabled={added} style={{ marginTop: "20px" }}>
        {added ? "Added to Watchlist ✅" : "➕ Add to Watchlist"}
      </button>
    </div>
  );
}

export default MovieDetail;

