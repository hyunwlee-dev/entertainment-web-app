import Icon from "@/app/ui/common/icon";
import { Entertainment } from "@/app/lib/definitions";
import OvalIcon from "/public/icons/oval.svg";
import clsx from "clsx";
import styles from "./description.css";

export default function Description({
  title,
  year,
  category,
  rating,
  className,
}: Entertainment & { className?: string }) {
  return (
    <div className={clsx(styles.description, className)}>
      <div className={styles.inner}>
        <span>{year}</span>
        <OvalIcon className={styles.ovalLt} />
        <span>{
          (category === 'Movie')
            ? <Icon name='movies' isStroke className={styles.categoryIcon} />
            : <Icon name='tv-series' isStroke className={styles.categoryIcon} />
        }</span>
        <OvalIcon className={styles.ovalRt} />
        <span>{category}</span>
        <span>{rating}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>

  );
}
