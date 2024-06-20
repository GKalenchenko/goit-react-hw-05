import { useEffect, useState } from "react";
import { getTrendMovies, getMovieCredits } from "../../getMovies";
import { Link } from "react-router-dom";
import css from "../HomePage/HomePage.module.css";

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
    <div className="container">
      <h2 className={css.hero_title}>Trend Today !</h2>
      <ul className={css.list}>
        {trendMovies.map(({ id, title }) => {
          return (
            <li className={css.item} key={id}>
              <Link to={`/movies/${id}`} className={css.link}>
                <h3 className={css.title}>{title}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
