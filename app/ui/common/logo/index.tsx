import { HTMLAttributes } from "react";
import Link from "next/link";
import styles from "./logo.css";
import LogoIcon from "/public/icons/logo.svg";

interface LogoProps extends HTMLAttributes<HTMLAnchorElement> {
}

export default function Logo({ ...props }: LogoProps) {
  return (
    <Link href={'/'} {...props}>
      <h1 className={styles.srOnly}>
        entertainment-web-app
      </h1>
      <LogoIcon />
    </Link>
  );
};
