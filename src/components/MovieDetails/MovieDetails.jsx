import { getImagePath } from "../../api/MovieSearchApi";
import css from "./MovieDetails.module.css";

export default function MovieDetails({ movieDetails }) {
  const {
    title,
    vote_average: vote,
    overview,
    poster_path: imagePath,
  } = movieDetails;

  return (
    <div className={css.movieDetails}>
      <img src={getImagePath(imagePath)} alt={`${title} picture`}></img>
      <div className={css.infoBlock}>
        <h2>{title}</h2>
        <p>User score: {vote} / 10.0</p>
        <h3>Overview</h3>
        <p>{overview || "No information yet"}</p>
        <h3>Genres</h3>
        <p>{movieDetails.genres.map((genre) => genre.name).join(" ")}</p>
      </div>
    </div>
  );
}
