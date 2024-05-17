import { fetchMockDatas } from "@/app/lib/fetchData";
import Carousel from "@/app/ui/common/carousel";
import styles from "./trending-list.css";

export default async function TrendingList({ title }: { title: string }) {
  const mockDatas = await fetchMockDatas();
  return (
    <section className={styles.trending}>
      <h2 className={styles.heading}>{title}</h2>
      <Carousel datas={mockDatas.filter(({ isTrending }) => isTrending)} />
    </section>
  );
}
