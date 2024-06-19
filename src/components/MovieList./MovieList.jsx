import { getTrendMovies } from "../../getMovies";

export default function MovieList() {
  console.log(getTrendMovies());
  return <p>List of movies</p>;
}
