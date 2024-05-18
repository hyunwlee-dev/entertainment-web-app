import { FormHTMLAttributes } from "react";
import SearchIcon from "/public/icons/icon-search.svg";
import clsx from "clsx";
import styles from "./search-bar.css";

interface SearchBarProp extends FormHTMLAttributes<HTMLFormElement> { }

export default function SearchBar({ className, ...props }: SearchBarProp) {
  return (
    <form className={clsx(styles.form, className)} {...props}>
      <SearchIcon className={styles.searchIcon} />
      <label
        className={styles.srOnly}
        htmlFor='search'
      >
        search
      </label>
      <input
        className={styles.input}
        type="search"
        id='search'
        placeholder="Search for moview or TV series"
        autoFocus
      />
    </form>
  );
}
