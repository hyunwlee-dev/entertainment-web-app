import { HTMLAttributes } from "react";
import Image, { getImageProps } from "next/image";
import getBase64 from "@/app/util/getBase64";
import Bookmark from "@/app/ui/common/bookmark";
import { Entertainment } from "@/app/lib/definitions";
import Icon from "@/app/ui/common/icon";
import OvalIcon from "/public/icons/oval.svg";
import clsx from "clsx";
import styles from "./card.css";

export default async function Card({ children, ...props }: HTMLAttributes<HTMLLIElement>) {
  return (
    <li {...props}>{children}</li>
  );
}

async function Thumbnail({
  title,
  imgSrc,
  isBookmarked,
  isTrending,
  className,
  children,
  ...props }: HTMLAttributes<HTMLDivElement> & Entertainment) {

  const common = {
    alt: `${title} image`
  }

  const {
    props: { srcSet: laptop },
  } = getImageProps({
    ...common,
    width: 280,
    height: 174,
    quality: 80,
    src: `/images/${imgSrc}/regular/large.jpg`,
  })

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 220,
    height: 140,
    quality: 70,
    src: `/images/${imgSrc}/regular/medium.jpg`,
  })

  const { base64 } = await getBase64(`/images/${imgSrc}/regular/medium.jpg`);

  return (
    <picture className={clsx(styles.thumbnail, className)} {...props}>
      <source media="(min-width: 1024px)" srcSet={laptop} />
      <source media="(min-width: 768px)" srcSet={tablet} />
      <Image
        className={styles.image}
        src={`/images/${imgSrc}/regular/small.jpg`}
        alt={`${title} image`}
        fill
        sizes='(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 50vw'
        placeholder='blur'
        blurDataURL={base64}
        loading="lazy"
      />
      <Bookmark isMarked={isBookmarked} />
    </picture>
  );
}

Card.Thumbnail = Thumbnail;
Thumbnail.displayName = 'card-thumnail';

async function Description({
  title,
  year,
  category,
  rating
}: Entertainment) {
  return (
    <div className={styles.description}>
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
      <h4 className={styles.title}>{title}</h4>
    </div>
  );
}

Card.Descrition = Description;
Description.displayName = 'card-descrition';
