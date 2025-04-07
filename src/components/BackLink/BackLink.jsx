import { NavLink } from "react-router-dom";
import css from "./BackLink.module.css";

export default function BackLink({ to = "/", text }) {
  return (
    <NavLink to={to} className={css.backLink}>
      {text}
    </NavLink>
  );
}
