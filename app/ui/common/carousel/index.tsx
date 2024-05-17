'use client';

import React from "react";
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay'
import { Entertainment } from '@/app/lib/definitions';
import useEmblaCarousel from 'embla-carousel-react';
import Bookmark from "@/app/ui/common/bookmark";
import Description from "@/app/ui/common/description";
import styles from "./carousel.css";

interface CarouselProps {
  datas: Entertainment[];
  className?: string;
  align?: 'center' | 'start' | 'end';
};

export default function Carousel({
  datas,
  align = 'start',
}: CarouselProps) {
  const [emblaRef] = useEmblaCarousel({ align }, [Autoplay()]);
  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.emblaContainer}>
        {datas.map((data) =>
          <picture key={data.title} className={styles.emblaSlide}>
            <Image
              className={styles.image}
              priority={true}
              src={`/images/${data.imgSrc}/trending/small.jpg`}
              alt={data.title}
              fill
              loading='eager'
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              placeholder="blur"
              sizes='33vw'
            />
            <Bookmark isMarked={data.isBookmarked} />
            <Description className={styles.description} {...data} />
          </picture>
        )}
      </div>
    </div>
  );
}
