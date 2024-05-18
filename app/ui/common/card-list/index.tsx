import Card from "@/app/ui/common/card";
import { fetchEntertainments } from "@/app/lib/fetchData";
import styles from "./card-list.css";

interface CardListProps {
  title: string;
}

export default async function CardList({ title }: CardListProps) {
  const entertainments = await fetchEntertainments();
  return (
    <section className={styles.cardList}>
      <h2 className={styles.heading}>{title}</h2>
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
