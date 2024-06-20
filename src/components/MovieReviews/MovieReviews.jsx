import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../getMovies";
import { useEffect, useState } from "react";

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
    <ul>
      {movieReviews.length > 0 ? (
        movieReviews.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <h3>Author {author}</h3>
              <p>{content}</p>
            </li>
          );
        })
      ) : (
        <p>We have no reviews for this movie</p>
      )}
    </ul>
  );
}
