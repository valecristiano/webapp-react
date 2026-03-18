import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "../../components/Movie";

const productsApi = "http://localhost:3000/movies";

export default function MoviePage() {
  const { id } = useParams();

  const [movie, setMovie] = useState();

  useEffect(() => {
    axios.get(`${productsApi}/${id}`).then((res) => {
      console.log(res.data.result);

      setMovie(res.data.result);
    });
  }, [id]);

  if (!movie) {
    return <div className="container">Caricamento in corso...</div>;
  }
  return <Movie movie={movie}></Movie>;
}
