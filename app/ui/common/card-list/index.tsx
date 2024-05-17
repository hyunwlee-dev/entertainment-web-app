import Card from "@/app/ui/common/card";
import { fetchMockDatas } from "@/app/lib/fetchData";
import styles from "./card-list.css";

interface CardListProps {
  title: string;
}

export default async function CardList({ title }: CardListProps) {
  const mockDatas = await fetchMockDatas();
  return (
    <section className={styles.cardList}>
      <h2 className={styles.heading}>{title}</h2>
      <ul className={styles.list}>
        {mockDatas?.map((data) => (
          <Card key={data.title}>
            <Card.Thumbnail {...data} />
            <Card.Info {...data} />
          </Card>
        ))}
      </ul>
    </section>
  );
}
