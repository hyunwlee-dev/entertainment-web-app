import Image from "next/image";
import styles from "./avatar.css";

export default function Avatar() {
  return (
    <Image
      className={styles.avatar}
      src='/icons/image-avatar.png'
      width={24}
      height={24}
      alt='profile'
    />
  );
}
