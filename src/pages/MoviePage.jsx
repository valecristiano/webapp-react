import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLoader } from "../context/LoaderContext";

import Movie from "../components/Movie";
import Reviews from "../components/Reviews";
import ReviewForm from "../components/ReviewForm";
import Loader from "../components/Loader";

const productsApi = "http://localhost:3000/movies";

export default function MoviePage() {
  const { id } = useParams();

  const [movie, setMovie] = useState();

  const { isLoading, setIsLoading } = useLoader();

  useEffect(getMovie, [id]);

  function getMovie() {
    setIsLoading(true);
    axios
      .get(`${productsApi}/${id}`)
      .then((res) => {
        console.log(res.data.result);
        setMovie(res.data.result);
      })
      .finally(() => setIsLoading(false));
  }

  if (isLoading) return <Loader />;

  if (!movie) {
    return <div className="container">Loading...</div>;
  }
  return (
    <section className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <Movie movie={movie}></Movie>
        </div>
        <div className="col-12 col-md-6">
          <Reviews movie={movie}></Reviews>
          <ReviewForm movieId={id} getMovie={getMovie}></ReviewForm>
        </div>
      </div>
    </section>
  );
}
