import React, { useState } from 'react';

const MoviesList = () => {
  const [movies, setMovies] = useState([
    { title: "The Shawshank Redemption", description: "A wrongly convicted banker fights for hope in prison.", id: 1 },
    { title: "The Godfather", description: "A powerful Mafia clan struggles for control after patriarch's decline.", id: 2 },
    { title: "The Dark Knight", description: "Batman faces a sadistic criminal who aims to break Gotham.", id: 3 },
    { title: "The Lord of the Rings: The Return of the King", description: "Frodo and Sam journey to destroy the One Ring.", id: 4 },
    { title: "Pulp Fiction", description: "Intertwined criminal stories with hitmen, gangsters, and a briefcase.", id: 5 }
  ]);

  const toggleDetails = (index) => {
    setMovies(
      movies.map((movie, i) =>
        i === index ? { ...movie, showDetails: !movie.showDetails } : movie
      )
    );
  };

  const removeMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <ul>
      {movies.map((movie, index) => (
        <li key={movie.id}>
          <span onClick={() => toggleDetails(index)}>{movie.title}</span>
          {movie.showDetails && <p>- {movie.description}</p>}
          <button onClick={() => removeMovie(movie.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;