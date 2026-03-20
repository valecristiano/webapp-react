import { Link } from "react-router";

export default function MovieCard({ movie, label }) {
  return (
    <section className="container">
      <h2>{label}</h2>
      <div className="">
        {/* SCHEDA FILM */}
        <div className="">
          <div className="card h-100 w-100 bg-secondary-subtle border border-warning-subtle text-center">
            <Link to={"/" + movie.id} className="p-1">
              <img src={movie.image} className="img-card" alt={movie.title} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
