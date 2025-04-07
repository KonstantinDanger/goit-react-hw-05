import { NavLink } from "react-router-dom";
import css from "./AppBar.module.css";

export default function AppBar() {
  return (
    <div className={css.bar}>
      <ul className={css.linkList}>
        <li className={css.link}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={css.link}>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
    </div>
  );
}
