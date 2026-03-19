import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "../../components/Movie";
import ReviewForm from "../../components/ReviewForm";

const productsApi = "http://localhost:3000/movies";

export default function MoviePage() {
  const { id } = useParams();

  const [movie, setMovie] = useState();

  useEffect(getMovie, [id]);

  function getMovie() {
    axios.get(`${productsApi}/${id}`).then((res) => {
      console.log(res.data.result);

      setMovie(res.data.result);
    });
  }

  if (!movie) {
    return <div className="container">Loading...</div>;
  }
  return (
    <section className="container">
      <Movie movie={movie}></Movie>
      <ReviewForm movieId={id} getMovie={getMovie}></ReviewForm>
    </section>
  );
}
