import Image, { getImageProps } from "next/image";
import { Entertainment } from "@/app/lib/definitions";
import Bookmark from "@/app/ui/common/bookmark";
import Description from "@/app/ui/common/description";
import styles from "./carousel.css";
import getBase64 from "@/app/util/getBase64";

export default async function Tile({
  title,
  imgSrc,
  year,
  category,
  rating,
  isBookmarked,
}: Entertainment) {
  const common = {
    alt: `${title} image`
  }

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 470,
    height: 230,
    quality: 80,
    src: `/images/${imgSrc}/trending/large.jpg`,
  });

  const { base64 } = await getBase64(`/images/${imgSrc}/trending/small.jpg`);

  return (
    <picture key={title} className={styles.emblaSlide}>
      {`${title} / ${imgSrc}`}
      <source media="(min-width: 768px)" srcSet={tablet} />
      <Image
        className={styles.image}
        priority={true}
        src={`/images/${imgSrc}/trending/small.jpg`}
        alt={title}
        fill
        blurDataURL={base64}
        placeholder="blur"
        loading='eager'
        sizes="75vw"
      />
      <Bookmark isMarked={isBookmarked} />
      <Description
        title={title}
        year={year}
        category={category}
        rating={rating}
        className={styles.description}
      />
    </picture>
  );
}
