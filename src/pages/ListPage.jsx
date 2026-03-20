import axios from "axios";
import { useEffect, useState } from "react";
import { useLoader } from "../context/LoaderContext";

import MoviesList from "../components/MoviesList";
import Loader from "../components/Loader";

const moviesUrl = "http://localhost:3000/movies";

export default function ListPage() {
  const [moviesList, setMoviesList] = useState([]);
  const { isLoading, setIsLoading } = useLoader();

  useEffect(() => {
    getMovies();
  }, []);

  function getMovies() {
    setIsLoading(true);
    axios
      .get(moviesUrl)
      .then((res) => {
        setMoviesList(res.data.result);
      })
      .finally(() => setIsLoading(false));
  }

  if (isLoading) return <Loader />;

  return (
    <>
      <section className="container">
        <h1>Movies List</h1>
        <MoviesList moviesList={moviesList}></MoviesList>
      </section>
    </>
  );
}
