"use client";

import { HTMLAttributes } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import SearchIcon from "@icons/icon-search.svg";
import { useDebouncedCallback } from "use-debounce";
import clsx from "clsx";
import styles from "./search-bar.css";

interface SearchBarProp extends HTMLAttributes<HTMLDivElement> {
  placeholder: string;
}

export default function SearchBar({ placeholder, className, ...props }: SearchBarProp) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(`Searching... ${term} ${pathname}`);
    const params = new URLSearchParams(searchParams);
    if (term)
      params.set('q', term);
    else
      params.delete('q');
    replace(`${pathname}?${params.toString()}`);
  }, 300);

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
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('q')?.toString()}
        autoFocus
      />
    </div>
  );
}
