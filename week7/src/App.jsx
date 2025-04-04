import { useEffect, useState } from "react";
import axios from "axios";
import Watchlist from "./watchlist";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [showWatchlist, setShowWatchlist] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular?api_key=2993d064f9608273325bbc41faec9f86")
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  const addToWatchlist = (movie) => {
    if (!watchlist.find((m) => m.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  return (
    <div>
    <title>Movies</title>
      <button onClick={() => setShowWatchlist(!showWatchlist)}>
        {showWatchlist ? "Go to Movies" : "Go to Watchlist"}
      </button>

      {showWatchlist ? (
        <Watchlist watchlist={watchlist} />
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <h2>{movie.original_title}</h2>
              <img width={100} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
              <p>{movie.release_date}</p>
              <button onClick={() => addToWatchlist(movie)}>Add to Watchlist</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
