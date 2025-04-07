import { NavLink, useLocation } from "react-router-dom";
import { getImagePath } from "../../api/MovieSearchApi";
import MovieTitle from "../MovieTitle/MovieTitle";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.movieList}>
      {movies.map((movie) => {
        const { poster_path: imagePath, id, title, release_date: date } = movie;
        date;
        return (
          <li key={id}>
            <NavLink to={`/movies/${id}`} state={location}>
              <div className={css.movieCard}>
                <img src={getImagePath(imagePath)} alt={`image`} />
                <MovieTitle className={css.title} title={title} date={date} />
              </div>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
