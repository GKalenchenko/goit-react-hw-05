import { Link, Outlet, useParams } from "react-router-dom";
import { getMovieById } from "../../getMovies";
import { useEffect, useState } from "react";
import css from "../MovieDetailsPage/MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const [selectedMovie, setSelectedMovie] = useState({});
  const { movieId } = useParams();

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
    <div>
      <img
        src={poster_path && `https://image.tmdb.org/t/p/w300${poster_path}`}
        className=""
      ></img>
      <h2>{original_title}</h2>
      <p>User Score {vote_average && vote_average.toFixed(1)}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <ul className={css.list}>
        {genres &&
          genres.length &&
          genres.map(({ id, name }) => <li key={id}>{name}</li>)}
      </ul>
      <Link to="cast">Movie cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
}
