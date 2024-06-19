import { useEffect, useState } from "react";
import { getTrendMovies, getMovieCredits } from "../../getMovies";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    async function handelTrendMovies() {
      try {
        const data = await getTrendMovies();
        setTrendMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    handelTrendMovies();
  }, []);

  return (
    <ul>
      {trendMovies.map((movie) => {
        return (
          <Link key={movie.id}>
            <p>{movie.title}</p>
          </Link>
        );
      })}
    </ul>
  );
}
