import axios from "axios";
import { useEffect, useState } from "react";

const moviesUrl = "http://localhost:3000/movies";

export default function HomePage() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  function getMovies() {
    axios.get(moviesUrl).then((res) => {
      setMoviesList(res.data.result);
    });
  }
  return (
    <>
      <h1>Hello</h1>
      {moviesList.map((movie) => (
        <div key={movie.id} className="card">
          <img src={movie.image} className="card-img-top" alt={movie.title} height="500" />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.abstract}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{movie.director}</li>
            <li className="list-group-item">{movie.release_year}</li>
            <li className="list-group-item">{movie.genre}</li>
          </ul>
        </div>
      ))}
    </>
  );
}
