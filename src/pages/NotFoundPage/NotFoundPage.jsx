import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <p>Page not found</p>
      <p>
        <Link to="/">Return to home page</Link>
      </p>
    </>
  );
}
