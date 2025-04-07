import ActorCard from "../ActorCard/ActorCard";
import css from "./MovieCastList.module.css";

export default function MovieCastList({ cast }) {
  return (
    <ul className={css.castList}>
      {cast.map((actor) => {
        return (
          <li className={css.actorCard} key={actor.cast_id}>
            <ActorCard actor={actor} />
          </li>
        );
      })}
    </ul>
  );
}
