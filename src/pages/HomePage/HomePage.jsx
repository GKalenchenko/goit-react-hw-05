import { useEffect, useState } from "react";
import { getTrendMovies, getMovieCredits } from "../../getMovies";
import { Link, useLocation } from "react-router-dom";
import css from "../HomePage/HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();

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
    <div className="container">
      <h2 className={css.title}>Trend Today !</h2>
      <MovieList movies={trendMovies} location={location} />
    </div>
  );
}
