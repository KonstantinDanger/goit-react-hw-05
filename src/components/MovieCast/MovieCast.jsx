import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../api/movieSearchApi";
import MovieCastList from "../MovieCastList/MovieCastList";

export default function MovieCast() {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      const data = await fetchMovieCast(movieId);
      setCast(data);
    };

    try {
      fetchCast();
    } catch (error) {
      console.log("error", error);
    }
  }, [movieId]);

  return (
    <>
      {cast.length > 0 ? <MovieCastList cast={cast} /> : <p>No cast found</p>}
    </>
  );
}
