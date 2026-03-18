import { Link } from "react-router";

export default function MoviesList({ moviesList }) {
  return (
    <>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-2 ">
        {moviesList.map((movie) => (
          <div key={movie.id} className="col">
            <div className="card h-100 shadow-sm bg-secondary-subtle border border-warning-subtle">
              <Link to={"/" + movie.id}>
                <img src={movie.image} className="card-img-top img-list" alt={movie.title} />
              </Link>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{movie.title}</h5>
                <p className="card-text">{movie.abstract}</p>
              </div>
              <ul className="list-group list-group-flush ">
                <li className="list-group-item text-white fw-bold list-group-item-secondary">{movie.director}</li>
                <li className="list-group-item text-white list-group-item-secondary">{movie.release_year}</li>
                <li className="list-group-item text-white list-group-item-secondary">{movie.genre}</li>
                <li className="list-group-item text-white list-group-item-secondary">
                  <Link to={"/" + movie.id} className="link-underline-secondary text-white">
                    Details
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
