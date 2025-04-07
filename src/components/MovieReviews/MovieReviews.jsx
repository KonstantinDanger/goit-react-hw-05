import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../api/movieSearchApi.js";
import Review from "../Review/Review";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await fetchMovieReviews(movieId);
      setReviews(data);
    };

    try {
      fetchReviews();
    } catch (error) {
      console.log("error", error);
    }
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul className={css.reviewList}>
          {reviews.map((review) => {
            return (
              <li key={review.id}>
                <Review review={review} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No reviews yet</p>
      )}
    </>
  );
}
