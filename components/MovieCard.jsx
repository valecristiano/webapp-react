import { Link } from "react-router";

Link;
export default function MovieCard({ movie }) {
  return (
    <section className="container">
      <h2>Latest Movie</h2>
      <div className="row row-cols-1 row-cols-md-2 g-2 ">
        {/* SCHEDA FILM */}
        <div className="col">
          <div className="card h-100 w-100 bg-secondary-subtle border border-warning-subtle">
            <Link to={"/" + movie.id} className="p-1">
              <img src={movie.image} className="img-card" alt={movie.title} />
            </Link>

            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.abstract}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item fw-bold list-group-item-secondary text-white">{movie.director}</li>
              <li className="list-group-item list-group-item-secondary text-white">{movie.release_year}</li>
              <li className="list-group-item list-group-item-secondary text-white">{movie.genre}</li>
              <li className="list-group-item text-white list-group-item-secondary">
                <Link to={"/" + movie.id} className="link-underline-secondary text-white">
                  Details
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
