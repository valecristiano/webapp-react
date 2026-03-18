import axios from "axios";
import MovieCard from "../../components/MovieCard";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const latestUrl = "http://localhost:3000/movies/latest";
const bestRatedUrl = "http://localhost:3000/movies/bestrated";

export default function HomePage() {
  const [latestMovie, setLatestMovie] = useState();
  const [bestMovie, setBestMovie] = useState();

  useEffect(() => {
    axios.get(latestUrl).then((res) => setLatestMovie(res.data.result));
  }, []);

  useEffect(() => {
    axios.get(bestRatedUrl).then((res) => setBestMovie(res.data.result));
  }, []);

  if (!latestMovie || !bestMovie) {
    return <div className="container">Loading...</div>;
  }

  return (
    <>
      <section className="container">
        <div className="row row-cols-1 row-cols-md-2 g-5">
          <div className="col">
            <MovieCard movie={latestMovie} label="Latest Movie"></MovieCard>
          </div>
          <div className="col">
            <MovieCard movie={bestMovie} label="Best Rated Movie"></MovieCard>
          </div>
        </div>
      </section>
      <section className="container mt-4">
        <div className=" row g-5">
          <div className="col-12">
            <div className="card h-100 w-100 bg-secondary-subtle border border-warning-subtle text-center">
              <Link to={"/movies"} className="card-body p-1 text-center text-decoration-none">
                <h2 className="card-title ">Movies List</h2>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
