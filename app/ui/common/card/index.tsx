import { HTMLAttributes } from "react";
import Image, { getImageProps } from "next/image";
import getBase64 from "@/app/util/getBase64";
import Bookmark from "@/app/ui/common/bookmark";
import { Entertainment } from "@/app/lib/definitions";
import clsx from "clsx";
import styles from "./card.css";
import Description from "../description";

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

async function Info(data: Entertainment) {
  return (
    <Description {...data} />
  );
}

Card.Info = Info;
Info.displayName = 'card-info';
