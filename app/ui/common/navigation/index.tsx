"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import Icon from "@/app/ui/common/icon";
import Logo from "@/app/ui/common/logo";
import Avatar from "@/app/ui/common/avatar";
import SignOutIcon from "/public/icons/sign-out.svg";
import styles from "./navigation.css";

export default function Navigation({ signOut }: { signOut: () => void }) {
  const segment = useSelectedLayoutSegment();
  const links = [
    {
      href: "/",
      icon: <Icon name='home' isStroke={segment === null} className={styles.icon} />,
    },
    {
      href: "/movies",
      icon: <Icon name='movies' isStroke={segment === "movies"} className={styles.icon} />,
    },
    {
      href: "/tv-series",
      icon: <Icon name='tv-series' isStroke={segment === "tv-series"} className={styles.icon} />,
    },
    {
      href: "/bookmarked",
      icon: <Icon name='bookmarked' isStroke={segment === "bookmarked"} className={styles.icon} />,
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
      <form action={signOut} className={styles.form}>
        <button className={styles.signOut} type='submit'>
          <SignOutIcon className={styles.icon} />
        </button>
      </form>
      <Avatar />
    </nav>
  );
}
