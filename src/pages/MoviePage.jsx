import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

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
  return (
    <section className="container">
      <h2>{movie.title}</h2>
      <div className="card">
        <img src={movie.image} className="card-img-top" alt={movie.title} />
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
      <div className="mt-4">
        <h3>Recensioni degli utenti:</h3>
        <ul className="list-group">
          {movie.reviews.map((review) => (
            <li key={review.id} className="list-group-item">
              <strong>{review.name}</strong> - {review.vote}/5
              <p className="mb-0 text-muted">{review.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
