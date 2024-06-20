import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../getMovies";
import { useEffect, useState } from "react";

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
    <ul>
      {movieCast.length > 0 ? (
        movieCast.map(({ id, name, profile_path, character }) => {
          return (
            <li key={id}>
              <img
                src={
                  profile_path &&
                  `https://image.tmdb.org/t/p/w200/${profile_path}`
                }
              />
              <h3>{name}</h3>
              <p>Character {character}</p>
            </li>
          );
        })
      ) : (
        <p>Cast information not available</p>
      )}
    </ul>
  );
}
