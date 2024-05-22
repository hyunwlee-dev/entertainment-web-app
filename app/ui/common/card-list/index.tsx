import { Card } from "@ui/common";
import { fetchEntertainments } from "@lib/fetchData";
import clsx from "clsx";
import styles from "./card-list.css";

interface CardListProps {
  title: string;
  category?: 'ALL' | 'Movie' | 'TV Series' | 'Bookmarked';
  query: string;
}

export default async function CardList({ title, category = 'ALL', query }: CardListProps) {
  const entertainments = await fetchEntertainments(category, query);
  return (
    <section className={clsx(styles.cardList, { [styles.existOnly]: query !== '' || category !== 'ALL' })}>
      <h2 className={styles.heading}>{query === '' ? title : `Found ${entertainments?.length} result for '${query}'`}</h2>
      <ul className={styles.list}>
        {entertainments?.map((entertainment) => (
          <Card key={entertainment.title}>
            <Card.Thumbnail {...entertainment} />
            <Card.Info {...entertainment} />
          </Card>
        ))}
      </ul>
    </section>
  );
}
