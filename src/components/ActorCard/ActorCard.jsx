import { getImagePath } from "../../api/movieSearchApi";

export default function ActorCard({ actor }) {
  return (
    <>
      <img src={`${getImagePath(actor.profile_path)}`} alt="Image not found" />
      <div>{actor.name}</div>
      <div>Role: {actor.character}</div>
    </>
  );
}
