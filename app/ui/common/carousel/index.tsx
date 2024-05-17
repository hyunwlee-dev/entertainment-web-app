'use client';

import React, { ReactNode } from "react";
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react';
import styles from "./carousel.css";

interface CarouselProps {
  children: ReactNode;
  className?: string;
  align?: 'center' | 'start' | 'end';
};

export default function Carousel({
  children,
  align = 'start',
}: CarouselProps) {
  const [emblaRef] = useEmblaCarousel({ align }, [Autoplay()]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.emblaContainer}>
        {children}
      </div>
    </div>
  );
}
