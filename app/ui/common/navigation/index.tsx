"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import Logo from "@/app/ui/common/logo";
import Avatar from "@/app/ui/common/avatar";
import NavHomeIcon from "./home-icon";
import NavMoviesIcon from "./movies-icon";
import NavTvSeriesIcon from "./tv-series-icon";
import NavBookmarkedIcon from "./bookmarked-icon";
import SignOutIcon from "/public/icons/sign-out.svg";
import styles from "./navigation.css";

export default function Navigation({ signOut }: { signOut: () => void }) {
  const segment = useSelectedLayoutSegment();
  const links = [
    {
      href: "/",
      icon: <NavHomeIcon isStroke={segment === null} className={styles.icon} />,
    },
    {
      href: "/movies",
      icon: <NavMoviesIcon isStroke={segment === "movies"} className={styles.icon} />,
    },
    {
      href: "/tv-series",
      icon: <NavTvSeriesIcon isStroke={segment === "tv-series"} className={styles.icon} />,
    },
    {
      href: "/bookmarked",
      icon: <NavBookmarkedIcon isStroke={segment === "bookmarked"} className={styles.icon} />,
    },
  ];

  return (
    <nav className={styles.wrapper}>
      <Logo />
      <ul className={styles.list}>
        {links.map(({ href, icon }) => (
          <Link href={href} key={href}>
            <li>{icon}</li>
          </Link>
        ))}
      </ul>
      <form action={signOut}>
        <button className={styles.signOut} type='submit'>
          <SignOutIcon className={styles.icon} />
        </button>
      </form>
      <Avatar />
    </nav>
  );
}
