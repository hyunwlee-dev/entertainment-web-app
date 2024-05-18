import { Suspense } from "react";
import { signOut } from "@/auth";
import Navigation from "@/app/ui/common/navigation";
import Container from "@/app/ui/common/container";
import CardList from "@/app/ui/common/card-list";
import TrendingList from "@/app/ui/common/trending-list";
import SearchBar from "@/app/ui/common/search-bar";
import TrendingListSkeleton from "@/app/ui/common/trending-list/trending-list.skeleton";
import CardListSkeleton from "./ui/common/card-list/card-list.skeleton";

export default async function Home() {
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
        <SearchBar />
        <Suspense fallback={<TrendingListSkeleton />}>
          <TrendingList title='Trending' />
        </Suspense>
        <Suspense fallback={<CardListSkeleton />}>
          <CardList title='Recommended for you' />
        </Suspense>
      </Container>
    </>
  );
}
