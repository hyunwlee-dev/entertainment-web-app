import Carousel from "@/app/ui/common/carousel";
import styles from "./trending-list.css";
import Tile from "@/app/ui/common/carousel/tile";
import { fetchTrendingEntertainments } from "@/app/lib/fetchData";

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
