import axios from "axios";
import { useEffect, useState } from "react";
import MoviesList from "../../components/MoviesList";

const moviesUrl = "http://localhost:3000/movies";

export default function ListPage() {
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
      <section className="container">
        <h1>Movies List</h1>
        <MoviesList moviesList={moviesList}></MoviesList>
      </section>
    </>
  );
}
