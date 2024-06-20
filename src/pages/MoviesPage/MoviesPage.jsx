import { useLocation, useSearchParams } from "react-router-dom";
import { getMovieByKeyword } from "../../getMovies";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import css from "../MoviesPage/MoviesPage.module.css";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyWord = searchParams.get("keyword") ?? "";
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (keyWord === "") {
      return;
    }
    setMovieList([]);
    const getMovie = async (keyWord) => {
      try {
        await getMovieByKeyword(keyWord).then((data) => {
          console.log(data);
          setMovieList(data.results);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getMovie(keyWord);
  }, [keyWord]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchForm = e.currentTarget;
    const keyWord = searchForm.elements.keyword.value;
    setSearchParams({ keyword: keyWord });
    searchForm.reset();
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSubmit} />
      <MovieList movies={movieList} location={location} />
    </div>
  );
}
