import css from "../SearchBar/SearchBar.module.css";
export default function SearchBar({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className={css.form}>
      <input
        type="text"
        name="keyword"
        placeholder="Enter keyword"
        className={css.input}
      />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
}
