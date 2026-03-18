import axios from "axios";
import MovieCard from "../../components/MovieCard";
import { useEffect, useState } from "react";

const latestUrl = "http://localhost:3000/movies/latest";

export default function HomePage() {
  const [latestMovie, setLatestMovie] = useState();

  useEffect(() => {
    axios.get(latestUrl).then((res) => setLatestMovie(res.data.result));
  }, []);

  if (!latestMovie) {
    return <div className="container">Loading...</div>;
  }

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col">
          <MovieCard movie={latestMovie}></MovieCard>
        </div>
        <div className="col">
          <MovieCard movie={latestMovie}></MovieCard>
        </div>
      </div>
    </>
  );
}
