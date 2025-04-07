import { getImagePath } from "../../api/movieSearchApi";
import css from "./Review.module.css";

export default function Review({ review }) {
  const { author, content, author_details } = review;
  return (
    <div className={css.review}>
      <div className={css.reviewAvatar}>
        <img
          src={`${getImagePath(author_details.avatar_path)}`}
          alt="No image"
        ></img>
      </div>
      <div className={css.reviewContent}>
        <div className={css.reviewAuthor}>{author}</div>
        <p className={css.reviewContent}>{content}</p>
      </div>
    </div>
  );
}
