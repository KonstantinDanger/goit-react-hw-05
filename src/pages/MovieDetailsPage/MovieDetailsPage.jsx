import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetailsById } from "../../api/movieSearchApi";

import MovieDetails from "../../components/MovieDetails/MovieDetails";
import BackLink from "../../components/BackLink/BackLink";

export default function MovieDetailsPage() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkRef = useRef(location.state);
  useEffect(() => {
    const fetchMovie = async () => {
      const details = await fetchMovieDetailsById(movieId);
      setMovieDetails(details);
    };

    try {
      fetchMovie();
    } catch (error) {
      console.log("error", error);
    }
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkRef.current} text="Back" />
      {movieDetails && (
        <>
          <MovieDetails movieDetails={movieDetails} />
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </>
  );
}
