import { fetchMockDatas } from "@/app/lib/fetchData";
import Carousel from "@/app/ui/common/carousel";
import styles from "./trending-list.css";
import Tile from "@/app/ui/common/carousel/tile";

export default async function TrendingList({ title }: { title: string }) {
  const mockDatas = await fetchMockDatas();
  const datas = mockDatas.filter(({ isTrending }) => (isTrending));
  return (
    <section className={styles.trending}>
      <h2 className={styles.heading}>{title}</h2>
      <Carousel>
        {datas.map((data) => (
          <Tile key={data.title} {...data} />
        ))}
      </Carousel>
    </section>
  );
}
