'use client';

import { PropsWithChildren } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import clsx from 'clsx';
import styles from './card-list.css';

export default function CardListSkeleton({
  isExistOnly = false
}: { isExistOnly: boolean }) {
  return (
    <SkeletonTheme baseColor='#202020' highlightColor='#444'>
      <section className={clsx(styles.cardList, { [styles.existOnly]: isExistOnly })}>
        <Skeleton wrapper={Heading} height={'100%'} />
        <div className={styles.list}>
          <div className={styles.skeletonItem}>
            <Skeleton
              wrapper={Thumnail}
              height={'100%'}
            />
            <Skeleton
              wrapper={Description}
              height={'100%'}
            />
            <Skeleton
              wrapper={Title}
              height={'100%'}
            />
          </div>

          <div className={styles.skeletonItem}>
            <Skeleton
              wrapper={Thumnail}
              height={'100%'}
            />
            <Skeleton
              wrapper={Description}
              height={'100%'}
            />
            <Skeleton
              wrapper={Title}
              height={'100%'}
            />
          </div>

          <div className={styles.skeletonItem}>
            <Skeleton
              wrapper={Thumnail}
              height={'100%'}
            />
            <Skeleton
              wrapper={Description}
              height={'100%'}
            />
            <Skeleton
              wrapper={Title}
              height={'100%'}
            />
          </div>
          <div className={styles.skeletonItem}>
            <Skeleton
              wrapper={Thumnail}
              height={'100%'}
            />
            <Skeleton
              wrapper={Description}
              height={'100%'}
            />
            <Skeleton
              wrapper={Title}
              height={'100%'}
            />
          </div>
          <div className={styles.skeletonItem}>
            <Skeleton
              wrapper={Thumnail}
              height={'100%'}
            />
            <Skeleton
              wrapper={Description}
              height={'100%'}
            />
            <Skeleton
              wrapper={Title}
              height={'100%'}
            />
          </div>
          <div className={styles.skeletonItem}>
            <Skeleton
              wrapper={Thumnail}
              height={'100%'}
            />
            <Skeleton
              wrapper={Description}
              height={'100%'}
            />
            <Skeleton
              wrapper={Title}
              height={'100%'}
            />
          </div>
        </div>
      </section>
    </SkeletonTheme >
  );
}

function Heading({ children }: PropsWithChildren<unknown>) {
  return (
    <h2 className={styles.skeletonHeading}>
      {children}
    </h2>
  );
}

function Thumnail({ children }: PropsWithChildren<unknown>) {
  return (
    <div className={styles.skeletonThumbnail}>
      {children}
    </div>
  );
}

function Description({ children }: PropsWithChildren<unknown>) {
  return (
    <div className={styles.skeletonDescription}>
      {children}
    </div>
  );
}

function Title({ children }: PropsWithChildren<unknown>) {
  return (
    <div className={styles.skeletonTitle}>
      {children}
    </div>
  );

}
