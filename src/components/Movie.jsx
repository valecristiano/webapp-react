export default function Movie({ movie }) {
  return (
    <>
      <h2>{movie.title}</h2>
      <div className="row row-cols-1 row-cols-md-2 g-2 ">
        <div className="col">
          <div className="card h-100 bg-secondary-subtle border border-warning-subtle">
            <div className="p-3 text-center">
              <img src={movie.image} className="img-card" alt={movie.title} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.abstract}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item fw-bold list-group-item-secondary text-white">{movie.director}</li>
              <li className="list-group-item list-group-item-secondary text-white">{movie.release_year}</li>
              <li className="list-group-item list-group-item-secondary text-white">{movie.genre}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
