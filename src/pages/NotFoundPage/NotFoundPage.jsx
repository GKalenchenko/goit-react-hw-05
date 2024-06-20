import { Link } from "react-router-dom";
import css from "../NotFoundPage/NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>404 - Page Not Found</h1>
      <p className={css.message}>
        The page you are looking for does not exist.
      </p>
      <Link to="/" className={css.link}>
        Go to Home
      </Link>
    </div>
  );
}
