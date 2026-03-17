import { Link } from "react-router";

export default function MoviesList({ moviesList }) {
  return (
    <>
      {moviesList.map((movie) => (
        <div key={movie.id} className="card my-3">
          <Link to={"/" + movie.id}>
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
          </Link>
        </div>
      ))}
    </>
  );
}
