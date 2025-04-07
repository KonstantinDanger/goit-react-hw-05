import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../api/MovieSearchApi";

import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const fetchedTrendingMovies = await fetchTrendingMovies();
      setTrendingMovies(fetchedTrendingMovies);
    };

    try {
      fetchMovies();
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  return (
    <div>
      <h1 className={css.header}>Trending today</h1>
      <MovieList movies={trendingMovies} />
    </div>
  );
}
