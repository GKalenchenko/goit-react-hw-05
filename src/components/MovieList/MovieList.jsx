import { Link } from "react-router-dom";
import css from "../MovieList/MovieList.module.css";

export default function MovieList({ movies, location }) {
  return (
    <ul className={css.list}>
      {movies.map((movie) => {
        return (
          <li key={movie.id} className={css.item}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              className={css.link}
            >
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
