'use client';

import { PropsWithChildren } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './trending-list.css';

export default function TrendingListSkeleton({ }) {
  return (
    <SkeletonTheme baseColor='#202020' highlightColor='#444'>
      <section className={styles.trending}>
        <Skeleton wrapper={Heading} height={'100%'} />
        <div className={styles.skeletonCarousel}>
          <Skeleton
            wrapper={Item}
            height={'100%'}
          />
          <Skeleton
            wrapper={Item}
            height={'100%'}
          />
          <Skeleton
            wrapper={Item}
            height={'100%'}
          />
        </div>
      </section>
    </SkeletonTheme>
  );
}

function Heading({ children }: PropsWithChildren<unknown>) {
  return (
    <h2 className={styles.skeletonHeading}>
      {children}
    </h2>
  );
}

function Item({ children }: PropsWithChildren<unknown>) {
  return (
    <div className={styles.skeletonItem}>
      {children}
    </div>
  );
}
