import { Carousel, Tile } from "@ui/common";
import { fetchTrendingEntertainments } from "@lib/fetchData";
import styles from "./trending-list.css";

export default async function TrendingList({
  title,
}: { title: string }) {
  const trends = await fetchTrendingEntertainments();
  return (
    <section className={styles.trending}>
      <h2 className={styles.heading}>{title}</h2>
      <Carousel>
        {trends.map((trend) => (
          <Tile key={trend.title} {...trend} />
        ))}
      </Carousel>
    </section>
  );
}
