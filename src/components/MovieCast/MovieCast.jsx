import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../getMovies";
import { useEffect, useState } from "react";
import css from "../MovieCast/MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    async function getMovieCast() {
      try {
        const response = await getMovieCredits(movieId);
        setMovieCast(response.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieCast();
  }, [movieId]);

  return (
    <ul className={css.list}>
      {movieCast.length > 0 ? (
        movieCast.map(({ id, name, profile_path, character }) => {
          return (
            <li key={id} className={css.item}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                    : "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                }
                className={css.image}
              />
              <h3 className={css.name}>{name}</h3>
              <p className={css.character}>Character {character}</p>
            </li>
          );
        })
      ) : (
        <p className={css.no_cast}>Cast information not available</p>
      )}
    </ul>
  );
}
