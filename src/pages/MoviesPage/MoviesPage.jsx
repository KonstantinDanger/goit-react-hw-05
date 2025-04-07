import { useEffect, useState } from "react";
import { fetchMoviesByQuery } from "../../api/MovieSearchApi";
import { useSearchParams } from "react-router-dom";

import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";

  const handleSubmit = async (query) => {
    try {
      const shots = await fetchMoviesByQuery(query);
      const nextSearchParams = new URLSearchParams(searchParams);
      nextSearchParams.set("query", query);
      setSearchParams(nextSearchParams);
      setMovies(shots);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const getInitialMovies = async () => {
      try {
        const shots = await fetchMoviesByQuery(query);
        const nextSearchParams = new URLSearchParams(searchParams);
        nextSearchParams.set("query", query);
        setSearchParams(nextSearchParams);
        setMovies(shots);
      } catch (error) {
        console.log("error", error);
      }
    };

    if (query) getInitialMovies();
  }, [query, searchParams, setSearchParams]);

  return (
    <>
      <SearchBar initialQuery={query} onSubmit={handleSubmit} />
      {movies.length > 0 && (
        <MovieList movies={movies} renderAsGallery={true} />
      )}
    </>
  );
}
