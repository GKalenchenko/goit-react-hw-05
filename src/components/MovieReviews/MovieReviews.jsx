import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../getMovies";
import { useEffect, useState } from "react";
import css from "../MovieReviews/MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        const response = await getMovieReviews(movieId);
        setMovieReviews(response.results);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <ul className={css.list}>
      {movieReviews.length > 0 ? (
        movieReviews.map(({ author, content, id }) => {
          return (
            <li key={id} className={css.item}>
              <h3 className={css.author}>Author {author}</h3>
              <p className={css.content}>{content}</p>
            </li>
          );
        })
      ) : (
        <p className={css.no_reviews}> We have no reviews for this movie</p>
      )}
    </ul>
  );
}
