import { signOut } from "@/auth";
import Navigation from "./ui/common/navigation";
import Container from "./ui/common/container";
import { fetchMockDatas } from "./lib/fetchData";
import CardList from "./ui/common/card-list";

export default async function Home() {
  const mockDatas = await fetchMockDatas();
  return (
    <>
      <Navigation
        signOut={
          async () => {
            'use server'
            await signOut()
          }
        }
      />
      <Container as='main'>
        <CardList
          title='Recommended for you'
          datas={mockDatas}
        />
      </Container>
    </>
  );
}
