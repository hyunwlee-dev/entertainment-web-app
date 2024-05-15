import { Entertainment } from "@/app/lib/definitions";
import Card from "@/app/ui/common/card";
import styles from "./card-list.css";

interface CardListProps {
  title: string;
  datas: Entertainment[];
}

export default function CardList({ title, datas }: CardListProps) {
  return (
    <>
      <h2 className={styles.heading}>{title}</h2>
      <ul className={styles.list}>
        {datas?.map((data) => (
          <Card key={data.title}>
            <Card.Thumbnail {...data} />
            <Card.Descrition {...data} />
          </Card>
        ))}
      </ul>
    </>
  );
}
