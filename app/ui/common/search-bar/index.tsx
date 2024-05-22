"use client";

import { HTMLAttributes } from "react";
import SearchIcon from "/public/icons/icon-search.svg";
import clsx from "clsx";
import styles from "./search-bar.css";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface SearchBarProp extends HTMLAttributes<HTMLDivElement> { }

export default function SearchBar({ className, ...props }: SearchBarProp) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = (term: string) => {
    console.log(`Searching... ${term} ${pathname}`);
    const params = new URLSearchParams(searchParams);
    if (term)
      params.set('q', term);
    else
      params.delete('q');
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={clsx(styles.form, className)} {...props}>
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
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('q')?.toString()}
        autoFocus
      />
    </div>
  );
}
