import { Card } from "@ui/common";
import { fetchFilteredEntertainments } from "@lib/fetchData";
import clsx from "clsx";
import styles from "./card-list.css";

interface CardListProps {
  title: string;
  query: string;
}

export default async function CardList({ query, title }: CardListProps) {
  const entertainments = await fetchFilteredEntertainments(query);
  return (
    <section className={clsx(styles.cardList, { [styles.existOnly]: query !== '' })}>
      <h2 className={styles.heading}>{query === '' ? title : `Found ${entertainments.length} result for '${query}'`}</h2>
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
