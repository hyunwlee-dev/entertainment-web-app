import { HTMLAttributes } from "react";
import Link from "next/link";
import LogoIcon from "@icons/logo.svg";
import styles from "./logo.css";

interface LogoProps extends HTMLAttributes<HTMLAnchorElement> {
}

export default function Logo({ ...props }: LogoProps) {
  return (
    <Link href={'/'} {...props}>
      <h1 className={styles.srOnly}>
        entertainment-web-app
      </h1>
      <LogoIcon className={styles.icon} />
    </Link>
  );
};
