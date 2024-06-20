import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieById } from "../../getMovies";
import { useEffect, useRef, useState } from "react";
import css from "../MovieDetailsPage/MovieDetailsPage.module.css";
import { Suspense } from "react";

export default function MovieDetailsPage() {
  const [selectedMovie, setSelectedMovie] = useState({});
  const location = useLocation();
  const { movieId } = useParams();
  const backHref = useRef(location.state?.from || "/");

  useEffect(() => {
    async function getFilm() {
      try {
        const response = await getMovieById(movieId);
        setSelectedMovie(response);
      } catch (error) {
        console.log(error);
      }
    }
    getFilm();
  }, [movieId]);

  const { original_title, overview, genres, poster_path, vote_average } =
    selectedMovie;

  return (
    <div className={css.container}>
      <Link to={backHref.current} className={css.goBackLink}>
        Go back
      </Link>
      <img
        src={poster_path && `https://image.tmdb.org/t/p/w300${poster_path}`}
        className={css.movieImage}
      ></img>
      <h2 className={css.movieTitle}>{original_title}</h2>
      <p className={css.userScore}>
        User Score {vote_average && vote_average.toFixed(1)}
      </p>
      <h3 className={css.sectionTitle}>Overview</h3>
      <p>{overview}</p>
      <h3 className={css.sectionTitle}>Genres</h3>
      <ul className={css.list}>
        {genres &&
          genres.length &&
          genres.map(({ id, name }) => (
            <li className={css.item} key={id}>
              {name}
            </li>
          ))}
      </ul>
      <Link to="cast" state={{ ...location.state }} className={css.subLink}>
        Movie cast
      </Link>
      <Link to="reviews" state={{ ...location.state }} className={css.subLink}>
        Reviews
      </Link>

      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}
