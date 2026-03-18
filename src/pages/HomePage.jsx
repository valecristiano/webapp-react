import axios from "axios";
import MovieCard from "../../components/MovieCard";
import { useEffect, useState } from "react";

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
      <section className="container-fluid">
        <div className="row row-cols-1 row-cols-md-2 g-5">
          <div className="col">
            <MovieCard movie={latestMovie} label="Latest Movie"></MovieCard>
          </div>
          <div className="col">
            <MovieCard movie={bestMovie} label="Best Rated Movie"></MovieCard>
          </div>
        </div>
      </section>
    </>
  );
}
