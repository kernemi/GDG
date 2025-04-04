import React from "react";

function Watchlist({ watchlist }) {
  return (
    <div>
     <title>Watchlist</title>
      <h1>My Watchlist</h1>
      {watchlist.length === 0 ? <p>No movies added yet.</p> : null}
      {watchlist.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.original_title}</h2>
          <img width={100} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
          <p>{movie.release_date}</p>
        </div>
      ))}
    </div>
  );
}

export default Watchlist;
